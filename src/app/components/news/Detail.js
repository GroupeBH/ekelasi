"use client"

import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../header/HeaderAdmin'
import Header from '../Header'
import Image from 'next/image'
import logo from "../../assets/agenda.png"
import { useParams } from 'next/navigation'
import axios from "axios"
import { Footer } from 'flowbite-react'

function Detail() {

    const params = useParams()
    const [news, setNews] = useState(null)

    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'))

    const getNews = async() => {
        const data = await axios.get(`http://localhost:8002/api/get-news/${params?.id}`)
        console.log("news : ", data.data.news)
        setNews(data.data.news)
      }
    
      useEffect(() => {
        getNews()
      },[])


  return (
    <div className='py-[100px] bg-[#eeeff3]'>
        <div className='bg-white mx-16 p-16'>
            <div>
                { currentAdmin ? <HeaderAdmin /> : <Header /> }
            </div>
            <div className=''>
                <div> <Image src={logo} alt='' className='w-[600px] h-[400px] object-cover' /> </div>
                <div className='text-[45px] py-6 font-bold'>{news?.title}</div>
                <div className='text-[18px]'>{news?.description}</div>
            </div>
            <div>
                { currentAdmin ? '': <Footer /> }
            </div>
        </div>
    </div>
  )
}

export default Detail