
import side_image from "../assets/header.png"
import Image from "next/image";

export default function Header() {
    return (
        <div className="w-[100vw] py-20 pt-32 md:px-16 p-5 bg-[#f5f5f5]">

          <div className="flex justify-between items-center w-[100%]">
            <div className="md:w-[50%]">
                <div className="w-[100%]">
                    <p className="md:text-4xl text-2xl font-medium pb-3">Plateforme éducative numérique ekelasi</p>
                    <p className="text-sm">Traduction et accompagnement dans l'environnement numérique des processus des organisations éducatives et des instances dirigeantes</p>
                </div>
                <div className="flex gap-3 text-lg font-medium mt-5">
                    <button className="px-5 md:py-3 py-3 bg-red-600 rounded-lg text-white">Entrer</button>
                    <button className="md:px-5 md:py-3 py-3 px-1 bg-blue-600 rounded-lg text-white">Connecter l'école</button>
                </div>
            </div>
            <div className="md:block hidden">
                <Image src={side_image} className="h-[65vh] w-[40vw]" />
            </div>
          </div>
        </div>
    )
}