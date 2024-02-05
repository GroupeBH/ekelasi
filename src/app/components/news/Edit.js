"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import logo from "../../assets/logo e-kelasi.png"
import axios from "axios"
import Link from 'next/link';
import { cloudinary } from '@/app/services/cloudinary';
import { useParams } from 'next/navigation'




function Edit() {

  const router = useRouter()
  const params = useParams()

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [errTilte, setErrTitle] = useState(null)
  const [errDescription, setErrDescription] = useState(null)
  const [successPublish, setSuccessPublish] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [urlImage, setUrlImage] = useState(null)
  const [loader, setLoader] = useState(false)
  const [news, setNews] = useState(null)
  const [fileURL, setFileURL] = useState(null)


  const currentAdmin = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentAdmin')) : null;
  useEffect(() => {
    !currentAdmin && router.push('/auth')
  },[router, currentAdmin]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessPublish(false)
    },1000)
  },[])

  const selectFilesHandler = (e) => {
    setPhoto(e.target.files[0])
    setFileURL(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    const getNews = async() => {
        const data = await axios.get(`https://ekelasi-p59w.onrender.com/api/get-news/${params.id}`)
        setNews(data.data.news)
        setUrlImage(data?.data?.news?.image)
        }
        getNews()
    },[params?.id])

    useEffect(() => {
      setDescription(news?.description)
      setTitle(news?.title )
    }, [news])

  //Use cloudinary
  let formData = new FormData()
  formData.append('file', photo)
  formData.append('upload_preset', 'yp1zbtgx')
  formData.append('quality', 'auto:best');
    

  const handleSubmit = async(e) => {
    e.preventDefault()
    !title ? setErrTitle('get title') : setErrTitle(null)
    !description ? setErrDescription('get description') : setErrDescription(null)
    setSuccessPublish(false)
    setLoader(true)

    let data = { user: currentAdmin._id, title, description }

    let image = null

    if(photo) {
      await cloudinary(formData)
        .then((res) => {
          image = res.data.secure_url
        })
        .catch((err) => {
          console.log(err)
        })
    }

    image ?  data.image = image : data.image = urlImage
  

    if(title && description && (photo || urlImage)) {
      const news = await axios.patch(`https://ekelasi-p59w.onrender.com/api/update-news/${params.id}`, data)
      console.log("news : ", news)
      try{
        if(news.data.message === "success") {
          setTitle(null)
          setDescription(null)
          router.push('/news')
        }
      }
      catch(err) {
        console.log(err)
        setLoader(false)
      }
    }
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <div className=' flex flex-col  items-center md:justify-center md:w-[30%] md:h-[100vh]'>
          <div>
              <Link href={"/"}>
                  <Image alt="" src={logo} className="pt-5 w-[120px] object-cover md:pt-0" />
              </Link>
          </div>
          <div className='px-[20px] pt-4 pb-2 text-center text-[18px] font-light md:pt-0 md:pb-0 md:py-0 md:px-4'>Cet espace est reservé uniquement pour les administrateur E-KELASI.</div>
          <div className='flex text-[17px] gap-3 pt-2 md:pt-4 '>
            <Link href={"/"}>
              <div className='text-[#3972b7] underline hover:no-underline cursor-pointer'>Acueil</div>
            </Link>
            <Link href={"/news"}>
              <div className='text-[#3972b7] underline hover:no-underline cursor-pointer'>Nouvelles</div>
            </Link>
          </div>
      </div>
      <div className='flex flex-col justify-center items-center border-[rgba(0,0,0,0.087)] border-l-[1px] h-auto w-[100%]  md:w-[70%] md:h-[100vh]'>
        <div className='pt-5 pb-2 w-[100%] md:pb-0 md:pt-0 md:w-[65%]'>
          <h2 className='px-[21px] text-20px md:text-[25px] font-bold md:mr-auto md:mb-3'>Formulaire de modification</h2>
        </div>
        <form className="flex flex-col px-[20px] md:px-0 w-[100%] md:w-[65%]" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <input type="text" id="identifiant" placeholder="Titre" className="w-[100%] mt-1 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" value={title ? title : ''} onChange={(e) => setTitle(e.target.title)} />
            </div>
            {errTilte && <p className='text-[rgba(206,19,34,0.85)] text-[15px]'>{errTilte}</p>}
            <div className='pt-4'>
                <textarea rows="5" placeholder='Description' className="w-[100%] mt-1 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" value={description ? description : ''} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="pt-5">
              <input onChange={selectFilesHandler} type="file" accept="image/*" className="" />
              {
                urlImage && 
                  <div className='w-[60px] h-[60px] mt-3'>
                    <Image src={fileURL ? fileURL : urlImage} alt='' width={20} height={20} className='w-[60px] h-[60px] object-cover' />
                  </div>
              }
            </div>
            
            {errDescription && <p className='text-[rgba(206,19,34,0.85)] text-[15px]'>{errDescription}</p>}
            <div className="pt-5">
              {
                !loader ? 
                <input type="submit" className="text-white w-[100%] border-[1px] outline-none rounded-[4px] text-[18px] bg-[rgba(206,19,34,0.78)] cursor-pointer py-[7px]" value="Publier" /> : 
                <input type="submit" className="text-white w-[100%] border-[1px] outline-none rounded-[4px] text-[18px] bg-[rgba(206,19,34,0.78)] cursor-pointer py-[7px]" value="Publication en cours..." />

              }
            </div>
        </form>
      
        {
        successPublish && <div className='text-green-600'>Publication reussie avec success</div>
      }
      </div>
     
    </div>
  )
}

export default Edit