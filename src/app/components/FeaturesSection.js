import Image from "next/image"
import {sectionData} from "../helper/featuresSectionData"
import { useRouter } from 'next/navigation'

export default function FeaturesSection() {
    const router = useRouter();
    return (
        <div className="flex justify-center flex-col  py-24 bg-[#eeeff3] w-[100%] md:px-16 px-5">
            <div className="flex flex-col w-[100%] gap-2 pb-3 md:pb-0">
                <h3 className="self-center md:text-[27px] text-center font-bold text-[25px]" >Complexe {"d'information"} polyvalent</h3>
                <p className="self-center text-[16px] font-light text-center">Pour les organismes éducatifs, les instances dirigeantes, les étudiants et les parents.</p>
            </div>
            <div className="w-[100%] grid gap-12 pt-10 md:pt-20">
                {sectionData.map((i, index) => {
                    return (
                        <div key={index} className="flex w-[100%] md:items-center pb-1 md:pb-7  md:flex-row md:justify-between flex-col">
                            <div className="flex justify-center md:w-[50%] w-[100%] order-2 pt-2 md:pt-0 md:order-1 " data-aos="fade-up" data-aos-delay="200">
                                <Image src={i.src} id="features" alt="" className=" md:h-[50vh] md:w-[90%] w-[97.5%] h-[35vh] object-cover" />
                            </div>
                            <div className="md:w-[50%] w-[100%] order-1 md:order-2">
                                <h5 className="text-[18px] text-center md:text-left pb-4 md:pb-4 font-bold text-[rgb(0,0,0,0.76)]" >{i.title}</h5>
                                <ul>
                                    {i.paragraph.map((p, index) => {
                                        return (
                                            <li key={index}  className="" >
                                               <div className="flex items-center space-x-3 rtl:space-x-reverse md:leading-7">
                                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                    </svg>
                                                    <span className="font-light" >{p}</span>
                                               </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <button 
                                  className="border-blue-500 border-2 p-2 rounded-[0.5rem] text-sm text-blue-500 mt-2 hover:bg-blue-500 hover:text-white hover:animate-bounce"
                                  onClick={() => router.push(`features/${index}`)}
                                >
                                    Voir plus
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}