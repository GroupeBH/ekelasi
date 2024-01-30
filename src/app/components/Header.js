
import Link from "next/link";
import side_image from "../assets/header.png"
import Image from "next/image";

export default function Header() {
    return (
        <div id="home" className="flex flex-col justify-center h-[100vh] md:py-20 md:mt-12 md:px-16 p-5  bg-[#f5f5f5]">
          <div className=" md:h-auto flex flex-col md:flex-row md:justify-between md:items-center w-[100%]">
            <div className="md:w-[50%] order-2 md:order-1">
                <div className="w-[100%]">
                    <p className="md:text-[48px] py-5 md:pt-0 md:pb-5 font-bold md:leading-[60px] text-2xl">Plateforme éducative <br /> numérique <br /> <span className="text-[#3972b7]">E-Ke</span><span className="text-[#ce1322]">la</span><span className="text-[#f7d715]">si</span></p>
                    <p className="text-sm md:text-[16px] leading-6 md:leading-6 md:pb-5 text-[rgba(0,0,0,0.7)] font-light">
                        {"Traduction et accompagnement dans l'environnement numérique des processus des organisations éducatives et des instances dirigeantes"}
                    </p>
                </div>
                <div className="flex gap-3 text-lg font-medium mt-5" >
                    <button className="px-5 py-[4px] md:py-[4px] md:text-[15px] bg-[#ce1322] rounded-[4px] text-white">
                        <Link href='https://e-kelasi.cd/'>Entrer</Link>
                    </button>
                    <button className="px-5 md:px-5 py-[4px] md:py-[4px] md:text-[15px] bg-[#3972b7] rounded-[4px] text-white">
                        <Link href='#contact'>{"Connecter l'école"}</Link>
                    </button>
                </div>
            </div>
            <div className=" order-1 md:order-2 md:pt-0 pb-1 md:pb-0" data-aos="fade-left" data-aos-delay="100">
                <Image src={side_image} alt="" className=" md:h-[65vh] md:w-[44vw] object-contain" />
            </div>
          </div>
        </div>
    )
}