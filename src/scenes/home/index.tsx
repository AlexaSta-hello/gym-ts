/* Anlegen mit shortcode tsrafc*/
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery ("(min-width:1060px)");

  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" /* full height above medium screens */
    >
    {/* Image and Main Header */}
    <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)} 
    >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* Headings */}
            <motion.div 
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                transition={{duration: 0.8}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-10 before:z-[-1] md:before:content-evolvetext"> {/* siehe Tailwind.config. so baue ich content in :before  ein*/}
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
                </div>
                <p className="mt-8 text-sm">
                Willkommen in unserem Yogastudio! Erreiche deine Traumfigur und finde innere Ruhe und Balance 
                mit unseren vielseitigen Yoga-Kursen und Meditations-Zirkeln. Starte jetzt dein Wohlfühlabenteuer!
                </p>
            </motion.div>
            {/* Actions */}
            <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                transition={{delay: 0.2, duration: 0.8}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Jetzt anmelden!
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Erfahre mehr</p>
                </AnchorLink>
            </motion.div>
        </div>
        {/* Image */}
        <div className="mt-8 flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
    </motion.div>

    {/* Sponsors */}
    {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 flex justify-center">
            <div className="mx-auto w-5/6 flex items-center">
                <div className="flex items-center w-3/5 justify-between gap-8">
                   <img src={SponsorRedBull} alt="redbull-sponsors" />
                   <img src={SponsorForbes} alt="forbes-sponsors" />
                   <img src={SponsorFortune} alt="fortune-sponsors" />
                </div>
            </div>
        </div>
    )}
    </section>
  )
}

export default Home