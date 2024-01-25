import Image from "next/image";
import React from "react";
import { ecosystems } from "../helper/ecosystemes";

function Ecosystem() {
  return (
    <div className="px-[20px] bg-[#eeeff3] md:px-16">
      <h2 className="text-center py-6 text-[27px] font-bold">
        Écosystème Kelasi
      </h2>
      <div className="text-center md:w-[62%] m-auto text-[16px] font-light">
        {
          "ElZhur est une variété de services numériques permettant de résoudre divers problèmes. L'intégration des services dans un espace numérique unique crée un écosystème où chaque élément fait partie intégrante et joue un rôle particulier."
        }
      </div>
      <div className="grid md:grid-cols-2 gap-9 md:px-10 py-16 ">
        {ecosystems.map((ecosystem) => (
          <div
            key={ecosystem.id}
            className="bg-[#d7e7ff] relative px-8 rounded-[10px] boxshadow-eco"
          >
            <h3 className=" pb-2 pt-4 text-[18px] font-bold text-[rgb(0,0,0,0.76)]">
              {ecosystem.title}
            </h3>
            <div className="font-light pb-48">{ecosystem.description}</div>
            <div className="flex w-[80%] md:w-[100%] m-auto md:m-0 justify-center absolute bottom-0 left-0 right-0">
              <Image src={ecosystem.image} alt="" className="text-center" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecosystem;
