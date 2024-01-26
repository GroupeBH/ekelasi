'use client'
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
      <div className="fixed top-0 left-0 right-0 z-50 px-10 bg-white">
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href="#">
            <Image
              src={logo}
              alt=""
              className="mr-3 h-6 md:w-[10vw] w-[30vw] sm:h-9 object-cover"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {navTags.map((i, index) => {
              return (
                <div key={index} className="cursor-pointer text-[16px]">
                  {i.name}
                </div>
              )
            })}
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
}