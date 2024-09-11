"use client";
import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center
    justify-center gap-4'>
        <Image className='w-24' src={logo} alt='logo'></Image>
        <p className='text-sm -mt-4'>All rights reserved <a href="">@oussama.com</a></p>
    </div>
  )
}
