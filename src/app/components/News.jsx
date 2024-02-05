'use client';
import React, { useState } from "react";
import { news } from "../helper/news";
import Image from "next/image";
import axios from "axios"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Link from "next/link";


function News() {

  const [newss, setNewss] = useState([])
  const [data, setData] = useState([])


  const getNews = async() => {
    const data = await axios.get("https://ekelasi-p59w.onrender.com/api/get-news")
    console.log("news : ", data.data.news.reverse().slice(0, 3))
    setNewss(data.data.news.slice(0, 3))
    setData(data.data.news)
  }

  useEffect(() => {
    getNews()
  },[])

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-[20px] bg-[#eeeff3] md:px-16 py-8">
      <h2 className="text-center py-7 text-[25px] md:text-[27px] font-bold" >Nouvelles</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10" data-aos="fade-up" data-aos-delay="100">
        {(newss ? newss : news)?.map((news) => (
          <Link href={`/news/${news._id}`}
            key={news?._id}
            className="bg-white px-7 py-5 cursor-pointer rounded-[8px] shadow-[0_0_0_rgba(48, 48, 49, 0.3)] hover:shadow-[0_0_15px_rgba(20,_20,_20,_0.07)] transition-all ease-in-out delay-150 hover:bg-[rgba(255,255,255,0.7)]"
          >
            <div>
              <div className="text-[15px] text-end text-[rgba(0,0,0,0.82)]">
                {news?.date}
              </div>
              <div className="py-4">
                <Image src={news?.image} width={20} height={20} alt="" className=" w-[100%] h-[200px] object-cover rounded-[8px] " />
              </div>
              <h3 id="news" className="font-bold text-[20px] pb-3 underline text-[rgba(0,0,0,0.76)]">
                {news?.title}
              </h3>
              <div  className="text-[15px] font-light max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis">{news.description}</div>
            </div>
          </Link>
        ))}
      </div>
     <Link href={"/news"}>
      {
          data?.length > 3 &&
        <div className="text-center pt-6 underline cursor-pointer">Voir plus</div>
      }
     </Link>
    </div>
  );
}

export default News;
