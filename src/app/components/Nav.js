'use client'
import {useEffect, useState} from 'react'
import logo from "../assets/logo e-kelasi.png"
import Image from "next/image";
import { Navbar } from "flowbite-react";

const navTags = [
    {name: "Accueil", link: "home"},
    {name: "Nouvelles", link: "news"},
    {name: "Possibilités", link: "features"},
    {name: "Ecosystème", link: "eco"},
    {name: "Collaborateurs", link: "partner"},
    {name: "Contacts", link: "contact"},
]
export default function Nav({scrolltoHash}){
    const [active, setActive] = useState('')
    const [isShow, setIsShow] = useState(false)

    const handleOnClik = (i) => {
      setActive(`${i.name}`)
      scrolltoHash(i.link)
    }
 
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
              className="w-[100px] object-cover"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
              {navTags.map((i, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`cursor-pointer text-[16px] px-1 md:bg-white  py-1 md:px-0 md:py-0  ${active === i.name ? 'bg-[#3b71b9] text-white md:bg-white  md:text-[#3b71b9]' : ''}`}
                      onClick={() => handleOnClik(i)}
                    >
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