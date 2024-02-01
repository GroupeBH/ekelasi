"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Image from 'next/image'
import Nav from '../Nav'
import { useRouter } from 'next/navigation'
import HeaderAdmin from '../header/HeaderAdmin'

function AllNews() {

    const router = useRouter()

    const [news, setNews] = useState([])
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'))


      const getNews = async() => {
        const data = await axios.get("http://localhost:8002/api/get-news/")
        console.log("news : ", data.data.news)
        setNews(data.data.news)
      }
    
      useEffect(() => {
        getNews()
      },[])

  return (
    <div>
        <div className="px-[20px] bg-[#eeeff3] md:px-16 py-8">
            {
                currentAdmin ? <HeaderAdmin />  : <div className='pt-[60px]'><Nav /></div>
            }
            <div>
            </div>
            <h2 className="text-center pb-7 pt-20 text-[25px] md:text-[27px] font-bold" >Nouvelles</h2>
            <div className="h-auto grid grid-cols-3 gap-5 " data-aos="fade-up" data-aos-delay="100">
                {news.map((news) => (
                <div
                onClick={() => router.push(`news/${news._id}`)}

                    key={news._id}
                    className="bg-white px-7 h-auto py-5 cursor-pointer rounded-[8px] shadow-[0_0_0_rgba(48, 48, 49, 0.3)] hover:shadow-[0_0_15px_rgba(20,_20,_20,_0.07)] transition-all ease-in-out delay-150 hover:bg-[rgba(255,255,255,0.7)]"
                >
                    <div>
                    <div className="text-[15px] text-end text-[rgba(0,0,0,0.82)]">
                        {news.date}
                    </div>
                    <div className="py-4">
                        <Image src={news?.image} width={100} height={100} alt="" className="w-[100%] h-[250px] object-cover rounded-[8px] " />
                    </div>
                    <h3 id="news" className="font-bold text-[17px] pb-3 underline text-[rgba(0,0,0,0.76)]">
                        {news.title}
                    </h3>
                    <div  className="text-[15px] font-light">{news.description}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllNews