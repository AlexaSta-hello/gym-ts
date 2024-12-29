import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `w-full md:w-4/5 flex flex-column mb-8 rounded-lg bg-gray-50 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id="kontakt" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            
            {/* Header */}
            <motion.div 
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                transition={{duration: 0.8}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>
                        <span className="text-secondary-400">JETZT ANMELDEN</span> UND DIE REISE KANN BEGINNEN!</HText>
                    <p className="py-5">
                        Starte dein Yoga-Abenteuer noch heute! Kontaktiere uns für 
                        weitere Informationen oder melde dich direkt für deinen ersten 
                        Kurs an. Wir freuen uns auf dich!
                    </p>
                </div>
            </motion.div> 

            {/* Form and Image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                    transition={{duration: 0.8}}
                    variants={{
                        hidden: {opacity: 0, y:50},
                        visible: {opacity: 1, y:0}
                    }}
                >
                    <form /* Siehe www.formsubmit.co */
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/alex@better-world-web.de"
                        method="POST"
                    >
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })} />
                        {errors.name && (
                            <p className="mt-1 text-secondary-500">
                                {errors.name.type === "required" && "Bitte Namen angeben."}
                                {errors.name.type === "maxLength" && "Maximal 100 Zeichen."}
                            </p>
                        )}

                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                        {errors.email && (
                            <p className="mt-1 text-secondary-500">
                                {errors.email.type === "required" && "Bitte E-Mail angeben."}
                                {errors.email.type === "pattern" && "Keine valide E-Mail-Adresse."}
                            </p>
                        )}

                          <textarea 
                            className={inputStyles}
                            rows={4}
                            placeholder="NACHRICHT"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })} />
                        {errors.message && (
                            <p className="mt-1 text-secondary-500">
                                {errors.message.type === "required" && "Bitte Nachricht verfassen."}
                                {errors.message.type === "maxLength" && "Maximal 2000 Zeichen."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-10 rounded-lg  bg-secondary-400 px-20 py-3 transition duration-500 hover:bg-secondary-500 hover:text-white"
                        >
                          SENDEN  
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                    transition={{delay: 0.2, duration: 0.8}}
                    variants={{
                        hidden: {opacity: 0, y:50},
                        visible: {opacity: 1, y:0}
                    }}
                >
                    <div 
                        className="md:before:content-evolvetext w-full before:absolute
                        before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img 
                            className="w-full md:w-4/5"
                            src={ContactUsPageGraphic} 
                            alt="contact-us-page-graphic" />
                    </div>
                </motion.div>
            </div>   
        </motion.div>
    </section>
  )
}

export default ContactUs;