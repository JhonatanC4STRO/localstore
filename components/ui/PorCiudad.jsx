import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function PorCiudad() {
  return (
    <div>
      <div>
        <div className='flex items-center gap-3 border shadow-lg rounded-full w-full border-gray-400 mt-3 mb-3 py-2 px-5 transition-all duration-200 focus-within:border-green-700 focus-within:ring-2 focus-within:ring-green-200'>
          <CiSearch className="text-3xl" />
          <input className='focus:outline-none' type="search" placeholder='Buscar' name="" id="" />
        </div>
      </div>
    </div>
  )
}
