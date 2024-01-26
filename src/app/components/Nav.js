'use client'
import logo from "../assets/logo e-kelasi.png"
import Image from "next/image";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const navTags = [
    {name: "Nouvelles", link: "news"},
    {name: "Possibilités", link: "features"},
    {name: "Ecosysteme", link: "eco"},
    {name: "Ils travaillent avec nous", link: "partner"},
    {name: "Contacts", link: "contact"},
]
export default function Nav({scrolltoHash}){

 
    return (
      <div className="fixed top-0 left-0 right-0 z-50 md:px-10 bg-white">
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
                <div key={index}>
                  <div onClick={() => scrolltoHash(i.link)}>
                    {i.name}
                  </div>
                </div>
              )
            })}
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
}