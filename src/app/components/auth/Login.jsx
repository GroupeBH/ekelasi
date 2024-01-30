"use client"
import React, { useState } from 'react'
import logo from "../../assets/logo e-kelasi.png"
import Image from "next/image";

function Login() {

    const [identify, setIdentify] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        if(!identify){
            setErrorMessage("error identify")
        }
        else if(!password){
            setErrorMessage("error password")
        }
        else{
            setErrorMessage(null)
        }
    }


  return (
    <div className=" flex h-[100vh] justify-center items-center flex-col">
        <div className="flex flex-col gap-2 justify-center items-center gradiant w-[450px] h-[510px] ">
            <div>
                <Image alt="" src={logo} className="w-[110px] object-cover" />
            </div>
            <h2 className="font-bold text-[30px]">Connexion</h2>
            <form className="flex flex-col gap-6 w-[75%]" onSubmit={(e) => handleLogin(e)}>
                <div>
                    <label htmlFor="identifiant" className="text-[rgba(0,0,0,0.73)] text-[15px] ">Identifiant</label>
                    <input type="text" id="identifiant" className="w-[100%] mt-2 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" placeholder="" onChange={(e) => setIdentify(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password" className="text-[rgba(0,0,0,0.73)] text-[15px] ">Mot de passe</label>
                    <input type="text" id="password" className="w-[100%] mt-2 border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                </div>
                    <div className="">
                    <input type="submit" className="text-white w-[100%] border-[1px] outline-none rounded-[4px] text-[18px] bg-[rgba(206,19,34,0.78)] cursor-pointer py-[7px]" value="Se connecter" />
                </div>
            </form>
            {
                errorMessage && <p className='text-[rgba(206,19,34,0.85)] text-[15px]'>{errorMessage}</p>
            }
        </div>
  </div>
  )
}

export default Login