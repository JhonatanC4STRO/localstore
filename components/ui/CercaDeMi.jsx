import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PiMapPinAreaThin } from "react-icons/pi";
export default function CercaDeMi() {
    return (
        <div className=''>
            <div className='flex w-full justify-center items-center'>
                <div className='flex items-center gap-3 border shadow-lg rounded-full w-full border-gray-400 mt-3 mb-3 py-2 px-5 transition-all duration-200 focus-within:border-green-700 focus-within:ring-2 focus-within:ring-green-200'>
                    <CiSearch className="text-3xl" />
                    <input className='focus:outline-none' type="search" placeholder='Buscar' name="" id="" />
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d25341.8614627063!2d-75.62619367978084!3d1.6180903160110516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1ses-419!2sco!4v1772054435410!5m2!1ses-419!2sco"
                width="100%"
                height="200px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <p className='mt-3 text-gray-500 text-end'>Radio de busqueda</p>
            <input className='w-full focus:outline-none mt-3' type="range" />
            <div className='flex justify-center items-center gap-3 mt-3'>
                <p className='hover:cursor-pointer'>Limpiar filtro</p>
                <button className='bg-green-700 text-white px-4 py-2 rounded-lg hover:cursor-pointer'>Ver +10.000 anuncios</button>
            </div>
        </div>
    )
}
