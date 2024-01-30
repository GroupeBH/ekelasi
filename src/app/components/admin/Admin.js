"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


function Admin() {
  const router = useRouter()


  if (typeof window !== 'undefined') {
      const identify = localStorage.getItem('identify')
      const password = localStorage.getItem('password')

      if(!identify && !password) {
          router.push('/auth')
      }
      console.log("identify", identify)
      console.log("password", password)
  }
  return (
    <div>Admin</div>
  )
}

export default Admin