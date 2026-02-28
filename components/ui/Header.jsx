import React from 'react'
import Link from 'next/link'
import { CiSquarePlus, CiHeart, CiChat1, CiLogin } from "react-icons/ci";
export default function Header() {
  return (
    <div className='pl-10 flex items-center py-5'>
      <Link href="/" className=' text-4xl font-bold w-1/2 text-green-600 hover:text-green-700'>LocalStore</Link>
      <div className='flex gap-2 items-center justify-end pr-15 w-1/2'>
        <Link title='Favoritos' className='flex items-center hover:bg-gray-200 px-4 py-1 rounded-lg gap-5' href='/'>      <CiHeart className='h-8 w-8' /></Link>
        <Link title='Mis Conversaciones' className='flex items-center hover:bg-gray-200 px-4 py-1 rounded-lg gap-5' href='/'>
          <CiChat1 className='h-8 w-8' />

        </Link>
        <Link className='flex items-center gap-5 bg-[#00C950]  hover:bg-green-700 text-white py-1 px-4 rounded-lg' href='/auth/signup'>
          <CiSquarePlus className='h-8 w-8' />

          Vender </Link>
        <Link className='flex items-center bg-[#E7000B] py-2 px-4 rounded-lg  hover:bg-gray-300' href="/auth/login"><CiLogin /> Log In</Link>
      </div>
    </div>
  )
}
