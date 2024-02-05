"use client"

import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../header/HeaderAdmin'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import axios from "axios"
import { Footer } from 'flowbite-react'
import Moment from 'react-moment';
import 'moment-timezone';
import Nav from '../Nav'

function Detail() {

    const params = useParams()
    const [news, setNews] = useState(null)

    const currentAdmin = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentAdmin')) : null;

    useEffect(() => {
    const getNews = async() => {
        const data = await axios.get(`https://ekelasi-p59w.onrender.com/api/get-news/${params.id}`)
        console.log("news : ", data.data.news)
        setNews(data.data.news)
        }
        getNews()
    },[params?.id])


  return (
    <div className='py-[100px] bg-[#eeeff3]'>
        <div className='bg-white mx-[20px] p-[20px] md:mx-16 md:p-16'>
            <div>
                { currentAdmin ? <HeaderAdmin /> : <Nav /> }
            </div>
            <div className=''>
                <div> <Image src={news?.image} width={50} height={50} alt='' className='w-[100%] h-[300px] md:w-[400px] md:h-[400px] object-center object-cover' /> </div>
                <div className='text-[35px] py-6 font-bold md:text-[45px]'>{news?.title}</div>
                <div className='text-[18px]'>{news?.description}</div>
                <div className='text-end font-medium italic pt-[80px]'>
                    <Moment date={news?.createdAt} format="DD-MM-YYYY HH:mm" />
                </div>
            </div>
            <div>
                { currentAdmin ? '': <Footer /> }
            </div>
        </div>
    </div>
  )
}

export default Detail