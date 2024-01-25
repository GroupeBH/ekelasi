import Nav from "./Nav";
import side_image from "../assets/19786.jpg";
import Image from "next/image";

export default function Headers() {
  return (
    <div className=" py-10 px-16 bg-white">
      <Nav />
      <div className="flex justify-between items-center w-[100%] py-12">
        <div className="w-[50%]">
          <div>
            <p className="text-4xl">Plateforme éducative numérique ekelasi</p>
            <p>
              Traduction et accompagnement dans l'environnement numérique des
              processus des organisations éducatives et des instances
              dirigeantes
            </p>
          </div>
          <div className="flex gap-3 text-lg font-medium mt-5">
            <button className="px-5 py-3 bg-red-600 rounded-lg text-white">
              Entrer
            </button>
            <button className="px-5 py-3 bg-blue-600 rounded-lg text-white">
              Connecter l'école
            </button>
          </div>
        </div>
        <div>
          <Image src={side_image} alt="" className="h-[60vh] w-[30vw]" />
        </div>
      </div>
    </div>
  );
}
