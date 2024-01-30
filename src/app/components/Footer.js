import React from "react";
import imgFooter1 from "../assets/logo-drk-1.png";
import imgFooter2 from "../assets/logo-drk-footer.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col bg-[#3b71b9] px-16  py-10">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-6 pb-10 md:pb-0">
          <div className="w-[160px] md:w-[200px] mb-10 md:mb-0 md:h-[150px] text-white">
            <Image
              src={imgFooter1}
              alt=""
              className="w-[160px] md:w-[200px] md:h-[150px] object-contain"
            />
          </div>
          <div className="md:w-[280px] md:h-[150px]">
            <Image
              src={imgFooter2}
              alt=""
              className="md:w-[280px] md:h-[150px] object-contain"
            />
          </div>
        </div>
        <div className="text-center pb-10 md:pb-0">
          <h2 className="font-bold underline pb-2">Contactez-nous</h2>
          <div className="flex gap-2 justify-center">
            <Link href={"https://www.facebook.com/profile.php?id=61556123817437"}>
              <FaFacebookSquare className="text-[22px] cursor-pointer" title="Facebook" />
            </Link>
            <Link href={"https://www.linkedin.com/company/e-kelasi/"}>
              <FaLinkedin className="text-[22px] cursor-pointer" title="Linkedin" />
            </Link>
            <Link href={"https://twitter.com/EKelasi?t=DexCAHzBMC84K9Zaw_4JPQ&s=08"}>
              <FaTwitterSquare className="text-[22px] cursor-pointer" title="Twitter" />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <hr className="pt-12 opacity-[0.3]" />
        <div className="text-center">E-Kelasi™© 2024 All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
