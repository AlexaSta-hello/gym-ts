import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [ 
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "Modernste Ausstattung",
        description: "Erlebe Yoga in lichtdurchfluteten Räumen mit hochwertiger Ausstattung für deinen maximalen Komfort und Wohlfühlfaktor."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "Vielfältige Kursangebote",
        description: "Wähle aus über 25 Kursen, von entspannender Meditation bis hin zu dynamischem Power-Yoga – für jedes Level!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Qualifizierte Lehrer",
        description: "Unsere zertifizierten Yoga-Lehrer garantieren fachkundige Anleitung, persönliche Betreuung und Inspiration für deinen individuellen Fortschritt."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                transition={{duration: 0.8}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
            >
                <HText>MEHR ALS NUR SPORT.</HText>
                <p className="my-5 text-sm">
                    Erlebe Yoga in seiner schönsten Form! Unsere ausgebildeten Lehrer begleiten 
                    dich mit Expertise und Herz, während du in unserem stilvollen Ambiente neue 
                    Energie tankst. Gesundheit, Balance und Wohlbefinden – für Körper und Geist!
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => ( /* Array mit Icon, Überschirft, Text etc */
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>

            {/* Graphics an Description */}
            <div className="my-16 items-center justify-between gap-20 md:mt-28 md:flex ">
                {/* Graphic */}
                <img 
                    className="mx-auto xs:my-5"
                    src={BenefitsPageGraphic} alt="benefits-page-graphic" />

                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                                transition={{duration: 0.8}}
                                variants={{
                                    hidden: {opacity: 0, x:50},
                                    visible: {opacity: 1, x:0}
                                }}
                            >
                                <HText>
                                    ÜBER 200 GLÜCKLICHE MITGLIEDER*INNEN BLEIBEN MIT UNS {" "}
                                    <span className="text-secondary-400">FIT</span>.
                                </HText>
                            </motion.div>
                        </div>

                    </div>
                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
                        transition={{delay: 0.2, duration: 0.8}}
                        variants={{
                            hidden: {opacity: 0, x:50},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <p className="my-5">
                            In unserem Yogastudio findest du eine Gemeinschaft von Gleichgesinnten, 
                            die gemeinsam an ihrer Gesundheit und ihrem Wohlbefinden arbeiten. 
                            Mit unserer großen Auswahl an Kursen und individuellen Angeboten sorgen 
                            wir dafür, dass jede*r das passende Training findet – vom Anfänger bis 
                            zur erfahrenen Yogi.
                        </p>
                        <p className="mb-5">
                            Unsere Mitgliederinnen schätzen nicht nur die persönliche Betreuung 
                            durch unsere qualifizierten Lehrerinnen, sondern auch das moderne 
                            Ambiente und die entspannte Atmosphäre. Werde Teil unserer Yoga-Familie 
                            und erlebe die positive Veränderung!
                        </p>
                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Jetzt anmelden!
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
};

export default Benefits;