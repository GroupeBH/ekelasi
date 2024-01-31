import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../assets/logo e-kelasi.png"


function HeaderAdmin() {
  return (
    <div className='flex py-4 bg-white justify-between items-center px-16 fixed top-0 left-0 right-0'>
        <Link href={"/"}>
            <Image
                src={logo} alt="" className="mr-3 h-6 md:w-[10vw] w-[30vw] sm:h-9 object-cover"
            />
        </Link>
        <Link href={"/admin"}>
            <div className='pt-1 cursor-pointer font-medium text-[16px] hover:text-[#3b71b9]'>Cliquez ici pour publier</div>
        </Link>
    </div>
  )
}

export default HeaderAdmin