"use client"

import React, {useEffect, useState} from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Footer } from "flowbite-react"
import { sectionData } from "@/app/helper/featuresSectionData"
import Link from "next/link"

export default function Detail() {
    const params = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(sectionData[params.id])
    }, [])

    console.log(data?.details)
    return(
        <div>     
            <div className="px-5 md:px-16 mb-5">
                <div className="py-5">
                    <Link className="flex gap-2" href="/">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                        </svg>
                        Accueil
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mt- bg-slate-300 py-10 px-5 rounded-lg">
                    <div className="">
                       <Image src={data?.src} className="md:h-50 md:w-[40vw] " />
                    </div>
                    <div>
                     <div className="md:w-[50%] w-[100%] order-1 md:order-2">
                        <h5 className="text-[18px] text-center md:text-left pb-4 md:pb-4 font-bold text-[rgb(0,0,0,0.76)]" >{data?.title}</h5>
                        <ul>
                            {data?.paragraph?.map((p, index) => {
                                return (
                                    <li key={index}  className="" >
                                        <div className="flex items-center space-x-3 rtl:space-x-reverse md:leading-7">
                                            <svg className="flex-shrink-0 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span className="font-light" >{p}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                      </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7 mt-10">
                    {data?.details?.map((item, index) => {
                        return(
                            <div key={index} className="flex flex-col gap-5">
                                <div className="text-[20px] font-bold">{item.name}</div>
                                <div className="">{item.mainParagraph}</div>
                                <div className="">
                                  <ul>
                                    {item?.mainList?.map((p, index) => {
                                        return (
                                            <li key={index}  className="" >
                                                <div className="flex items-center space-x-3 rtl:space-x-reverse md:leading-7">
                                                    <svg className="flex-shrink-0 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                    </svg>
                                                    <span className="font-light" >{p}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                   </ul>
                                </div>
                                {item.secondParagraph}
                                <div className="">
                                  <ul>
                                    {item?.secondList?.map((p, index) => {
                                        return (
                                            <li key={index}  className="" >
                                                <div className="flex items-center space-x-3 rtl:space-x-reverse md:leading-7">
                                                    <svg className="flex-shrink-0 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                    </svg>
                                                    <span className="font-light" >{p}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                   </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}