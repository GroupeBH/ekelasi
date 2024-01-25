import React from "react";
import imgFooter1 from "../assets/logo-drk-1.png";
import imgFooter2 from "../assets/logo-drk-footer.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col bg-[#0c77c9] px-16  py-10">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 ">
          <div className="w-[200px] h-[150px] text-white">
            <Image
              src={imgFooter1}
              alt=""
              className="w-[200px] h-[150px] object-contain"
            />
          </div>
          <div className="w-[280px] h-[150px]">
            <Image
              src={imgFooter2}
              alt=""
              className="w-[280px] h-[150px] object-contain"
            />
          </div>
        </div>
        <div className="text-center ">
          <h2 className="font-bold underline pb-2">Contactez nous</h2>
          <div className="flex gap-2 justify-center">
            <FaLinkedin className="text-[22px] cursor-pointer" />
            <FaFacebookSquare className="text-[22px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="pt-3">
        <hr className="pt-12 opacity-[0.3]" />
        <div className="text-center">OXOR™© 2024 All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
