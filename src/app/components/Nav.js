import logo from "../assets/logo e-kelasi.png"
import Image from "next/image";
import { Navbar } from "flowbite-react";

const navTags = [
    {name: "Possibilités", link: "#"},
    {name: "Ils travaillent avec nous", link: "#"},
    {name: "Nouvelles", link: "#"},
    {name: "Contacts", link: "#"}
]
export default function Nav(){
    return (
      <div className="flex justify-between items-center w-[100%]">
        <div>
            <Image src={logo} className="h-[60px] w-[100px]" />
        </div>
        <div className="flex gap-3 font-medium">
          {navTags.map((n, index) => {
            return (
                <span key={index}>{n.name}</span>
            )
          })}
        </div>
        <div className="md:hidden block"></div>
      </div>
    )
}