'use client';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Image from 'next/image'
import Nav from '../Nav'
import { useRouter } from 'next/navigation'
import HeaderAdmin from '../header/HeaderAdmin'
import Moment from 'react-moment';
import 'moment-timezone';
import { FiEdit3 } from "react-icons/fi";

function AllNews() {

    const router = useRouter();
    

    const [news, setNews] = useState([])
    const currentAdmin = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentAdmin')) : null;
    

      const getNews = async() => {
        const data = await axios.get("https://ekelasi-p59w.onrender.com/api/get-news")
        console.log("news : ", data.data.news.reverse())
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
            <h2 className="text-center pb-7 pt-20 text-[25px] md:text-[27px] font-bold" >Nouvelles</h2>
            <div className="h-auto grid md:grid-cols-3 gap-5 " data-aos="fade-up" data-aos-delay="100">
                {news.map((news) => (
                <div key={news._id} className='bg-white rounded-[8px] shadow-[0_0_0_rgba(48, 48, 49, 0.3)] pb-4 hover:shadow-[0_0_15px_rgba(20,_20,_20,_0.07)] '>
                    <div onClick={() => router.push(`news/${news._id}`)} className=" px-7 h-auto pt-5 cursor-pointer  transition-all ease-in-out delay-150 hover:bg-[rgba(255,255,255,0.7)]" >
                        <div>
                            <div className="text-[15px] text-end text-[rgba(0,0,0,0.82)]">
                                {news.date}
                            </div>
                            <div className="py-4">
                                <img src={news?.image} width={100} height={100} alt="" className="w-[100%] h-[250px] object-cover rounded-[8px] " />
                            </div>
                            <h3 id="news" className="font-bold text-[17px] pb-3 underline text-[rgba(0,0,0,0.76)]">
                                {news.title}
                            </h3>
                            <div  className="text-[15px] font-light max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis">{news.description}</div>
                            <div className='text-end text-[14px] font-medium italic pt-[25px] '>
                                <Moment date={news?.createdAt} format="DD-MM-YYYY" />
                            </div>
                        </div>
                    </div>
                    {
                        currentAdmin && <div onClick={() => router.push(`edit/${news._id}`)} className='flex text-white items-center text-[15px] gap-1 cursor-pointer bg-[#3b71b9] ml-7 px-7 py-1 rounded-[10px] w-[113px]'>Modifier<FiEdit3 /></div>
                    }
                </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default AllNews