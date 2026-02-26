import React from 'react'
import { CiSearch } from "react-icons/ci";
import Desplegable from '@/components/ui/Desplegable';
import DesplegableUbi from '@/components/ui/DesplegableUbi';

export default function PageHome() {
  return (
    <div>
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-4xl font-extrabold'>¿Que quieres comprar hoy?</h1>
        <div className='flex border shadow-lg rounded-full w-3/4 border-gray-400 h-20 mt-10 px-5'>
          <div className='flex gap border-r items-center gap-3'>
            <CiSearch className='text-3xl' />
            <input className='focus:outline-none' placeholder='Estoy buscando' type="search" name="" id="" />
          </div>
          <div className='flex w-full gap border-r justify-center items-center gap-3'>
            <Desplegable />
          </div>
          <div className='flex gap w-full justify-center items-center gap-3'>
            <DesplegableUbi />
          </div>
          <div className='rounded-full ml-5 my-1  w-1/2 flex justify-center border bg-green-700 text-white items-center'>
            <CiSearch className='text-3xl' />
            Buscar
          </div>
        </div>
      </div>
    </div>
  )
}
