
import side_image from "../assets/header.png"
import Image from "next/image";

export default function Header() {
    return (
        <div className="h-[100vh] py-20 pt-32 md:px-16 p-5 bg-[#f5f5f5]">

          <div className="flex justify-between items-center w-[100%]">
            <div className="md:w-[50%]">
                <div className="w-[100%]">
                    <p className="md:text-[48px] md:pb-5 font-bold leading-[60px] text-2xl pb-3">Plateforme éducative <br /> numérique <br /> <span className="text-[#3972b7]">e-ke</span><span className="text-[#ce1322]">la</span><span className="text-[#f7d715]">si</span></p>
                    <p className="text-sm md:text-[16px] md:pb-5 text-[rgba(0,0,0,0.7)] font-light">{"Traduction et accompagnement dans l'environnement numérique des processus des organisations éducatives et des instances dirigeantes"}</p>
                </div>
                <div className="flex gap-3 text-lg font-medium mt-5">
                    <button className="px-5 md:py-[6px] md:text-[15px] py-3 bg-[#ce1322] rounded-lg text-white">Entrer</button>
                    <button className="md:px-5 md:py-[6px] md:text-[15px] py-3 px-1 bg-[#3972b7] rounded-lg text-white">{"Connecter l'école"}</button>
                </div>
            </div>
            <div className="md:block hidden">
                <Image src={side_image} alt="" className="h-[65vh] w-[40vw]" />
            </div>
          </div>
        </div>
    )
}