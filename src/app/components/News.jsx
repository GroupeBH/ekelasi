import React from "react";
import { news } from "../helper/news";
import Image from "next/image";

function News() {
  return (
    <div className="bg-[#eeeff3] px-16 py-8">
      <h2 className="text-center py-7 text-[27px] font-bold">Nouvelles</h2>
      <div className="flex gap-10 ">
        {news.map((news) => (
          <div
            key={news.id}
            className="bg-white px-7 py-5 cursor-pointer rounded-[8px] shadow-[0_0_0_rgba(48, 48, 49, 0.3)] hover:shadow-[0_0_15px_rgba(20,_20,_20,_0.07)] transition-all ease-in-out delay-150 hover:bg-[rgba(255,255,255,0.7)]"
          >
            <div>
              <div className="text-[15px] text-end text-[rgba(0,0,0,0.82)]">
                {news.date}
              </div>
              <div className="py-4">
                <Image src={news.image} alt="" className="rounded-[8px] " />
              </div>
              <h3 className="font-bold text-[22px] pb-3 underline text-[rgba(0,0,0,0.76)]">
                {news.title}
              </h3>
              <div className="text-[15px] font-light">{news.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
