"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import logo from "../../assets/logo e-kelasi.png"
import axios from "axios"




function Admin() {
  const router = useRouter()

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [errTilte, setErrTitle] = useState(null)
  const [errDescription, setErrDescription] = useState(null)


  const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'))
  useEffect(() => {
    !currentAdmin && router.push('/auth')
  },[router, currentAdmin]);

  const handleSubmit = async(e) => {
    e.preventDefault()
    !title ? setErrTitle('get title') : setErrTitle(null)
    !description ? setErrDescription('get description') : setErrDescription(null)

    if(title && description) {

      const news = await axios.post("http://localhost:8002/api/add-news", { user: currentAdmin._id, title, description })
      console.log("news : ", news)
      if(news.data.message === "success") {
          console.log("news : ", news)
      }
      
    }
  }

  return (
    <div className='flex'>
      <div className='w-[30%] h-[100vh] flex flex-col justify-center items-center'>
          <div>
                <Image alt="" src={logo} className="w-[120px] object-cover" />
          </div>
          <div className='px-4 text-center text-[18px] font-light'>Cet espace est reservé uniquement pour les administrateur E-KELASI.</div>
      </div>
      <div className='flex flex-col justify-center items-center w-[70%] h-[100vh] border-[rgba(0,0,0,0.087)] border-l-[1px]'>
        <div className='w-[65%]'>
          <h2 className='mr-auto text-[25px] mb-3 font-bold'>Formulaire de news</h2>
        </div>
        <form className="flex  flex-col w-[65%]" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type="text" id="identifiant" placeholder="Titre" className="w-[100%] mt-1 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" onChange={(e) => setTitle(e.target.value)} />
            </div>
            {errTilte && <p className='text-[rgba(206,19,34,0.85)] text-[15px]'>{errTilte}</p>}
            <div className='pt-4'>
                <textarea rows="5" placeholder='Description' className="w-[100%] mt-1 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            {errDescription && <p className='text-[rgba(206,19,34,0.85)] text-[15px]'>{errDescription}</p>}
            <div className="pt-5">
                <input type="submit" className="text-white w-[100%] border-[1px] outline-none rounded-[4px] text-[18px] bg-[rgba(206,19,34,0.78)] cursor-pointer py-[7px]" value="Publier" />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Admin