'use client'
import {useEffect, useState} from 'react'
import logo from "../assets/logo e-kelasi.png"
import Image from "next/image";
import { Navbar } from "flowbite-react";
import imgFooter1 from "../assets/logo-drk-1.png";
import imgFooter2 from "../assets/logo-drk-footer.png";

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
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt=""
              className="w-[100px] object-cover mr-5 md:mr-20 md:order-1"
            />
            <div className=" hidden order-2 md:order-3 md:flex md:flex-row gap-6 pb-10 md:pb-0">
              <div className="w-[70px] flex md:hidde md:w-[100px] mb-10 md:mb-0 md:h-[50px] text-white">
                <Image
                  src={imgFooter1}
                  alt=""
                  className="w-[70px] md:w-[100px] md:h-[50px] object-contain"
                />
              </div>
              <div className="w-[100px] md:w-[150px] md:h-[50px]">
                <Image
                  src={imgFooter2}
                  alt=""
                  className="W-[100px] md:w-[150px] md:h-[50px] object-contain"
                />
              </div>
            </div>
            <div className=" flex flex-row md:hidden gap-3 pt-2 pb-1 md:pb-0">
              <div className="w-[70px] md:w-[100px] mb-0 md:mb-0 md:h-[50px] text-white">
                <Image
                  src={imgFooter1}
                  alt=""
                  className="w-[70px] md:w-[100px] md:h-[50px] object-contain"
                />
              </div>
              <div className="w-[100px] md:w-[150px] md:h-[50px]">
                <Image
                  src={imgFooter2}
                  alt=""
                  className="W-[100px] md:w-[150px] md:h-[50px] object-contain"
                />
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className='' />
          <Navbar.Collapse className='md:order-2'>
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