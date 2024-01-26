import Image from "next/image";
import side_image from "../assets/header.png"

const sectionData = [
    {title: 'Organisations éducatives', src: '', paragraph: ['Gestion opérationnelle du processus éducatif', 'Libération de la paperasse', 'Automatisation des tâches courantes', 'Informations complètes sur les activités éducatives', 
    'Accès sur n’importe quel appareil depuis n’importe où dans le monde']},
    {title: 'Aux instances dirigeantes', src: '', 
     paragraph: ['Surveillance des organisations subordonnées', 'Intégration avec les services et ressources gouvernementaux',
    'Conformité aux exigences gouvernementales en matière de développement et de mise en œuvre']},
    {title: 'Pour les étudiants et les parents', src: '', paragraph: ['Suivi des progrès et de la fréquentation', 'Contact avec les professeurs',
    'Notifications et rapports instantanés', 'Calendrier, sujets de cours, devoirs', "Ressources pédagogiques et d'apprentissage en ligne"]}
]

export default function FeaturesSection() {
    return (
        <div className="py-24 bg-[#eeeff3] w-[100%] md:px-16 px-5">
            <div className="flex flex-col w-[100%] gap-2">
                <h3 className="self-center md:text-[27px] text-center font-bold text-[25px]">Complexe {"d'information"} polyvalent</h3>
                <p className="self-center text-[16px] font-light text-center">Pour les organismes éducatifs, les instances dirigeantes, les étudiants et les parents.</p>
            </div>
            <div className="w-[100%] grid gap-12 pt-10 md:pt-20 pr-10">
                {sectionData.map((i, index) => {
                    return (
                        <div key={index} className="flex w-[100%] md:items-center md:pb-7 md:flex-row md:justify-between flex-col">
                            <div className="md:w-[50%] w-[100%] " data-aos="fade-left" data-aos-delay="200">
                                <Image src={side_image} alt="" className="md:h-[50vh] md:w-[90%] w-[97.5%] h-[35vh]" />
                            </div>
                            <div className="md:w-[50%] w-[100%]">
                                <h5 className="text-[18px] md:pb-4 font-bold text-[rgb(0,0,0,0.76)]">{i.title}</h5>
                                <ul>
                                    {i.paragraph.map((p, index) => {
                                        return (
                                            <li key={index}  className="flex items-center space-x-3 rtl:space-x-reverse md:leading-7">
                                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                </svg>
                                                <span className="font-light">{p}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}