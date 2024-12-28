import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Yin Yoga Relax",
        description: "Tiefenentspannung mit langen, ruhigen Dehnungen. Ideal zur Stressreduktion und um das Bindegewebe zu regenerieren.",
        image: image1
    },
    {
        name: "Vinyasa Flow",
       /* description: "Eine dynamische, fließende Praxis, die Atem und Bewegung harmonisch verbindet. Ideal für alle, die Flexibilität und Kraft aufbauen möchten.",*/
        image: image2
    },
    {
        name: "Hatha Yoga Basics",
        description: "Traditionelle Hatha-Übungen für eine solide Basis. Perfekt für Anfänger*innen und zur bewussten Kräftigung von Körper und Geist.",
        image: image3
    },
    {
        name: "Achtsamkeitsmeditation",
        description: "Lerne, den gegenwärtigen Moment bewusst wahrzunehmen und deine innere Ruhe zu finden. Hilft bei Stressabbau und emotionaler Balance.",
        image: image4
    },
    {
        name: "Power Yoga",
        description: "Ein intensives, kraftvolles Yoga-Workout, das Kondition, Balance und Muskelausdauer verbessert. Für alle, die ein körperliches Training suchen.",
        image: image5
    },
    {
        name: "Geführte Tiefenmeditation",
        description: "Eine angeleitete Reise in tiefe Entspannung und Selbstreflexion. Perfekt, um mental abzuschalten und innere Klarheit zu erlangen.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="unserekurse" className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            
            {/* Header */}
            <motion.div 
                className="mx-auto w-5/6"
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
                    <HText>UNSERE KURSE</HText>
                    <p className="py-5">
                        Entdecke unser vielfältiges Kursangebot: Von energetischem Vinyasa-Yoga über 
                        entspannendes Yin-Yoga bis hin zu geführten Meditationssessions. Egal ob Anfängerin 
                        oder Fortgeschrittener – bei uns findest du deinen perfekten Kurs!
                    </p>
                </div>
                <motion.div>
                    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                        <ul className="w-[2800px] whitespace-nowrap">
                            {classes.map((item: ClassType, index) => (
                                <Class
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))}
                        </ul>
                    </div>
                </motion.div>
                
            </motion.div>

        </motion.div>
    </section>
  )
}

export default OurClasses;