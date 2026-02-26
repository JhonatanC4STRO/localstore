"use client"
import { useState, useEffect, useRef } from "react"
import { RiArrowDownWideLine, RiCloseFill } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export default function ModalExample() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") setOpen(false)
        }

        function handleClickOutside(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("keydown", handleEsc)
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("keydown", handleEsc)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="flex justify-center items-center ">
            <button
                onClick={() => setOpen(true)}
                className="flex gap-2 items-center px-4 py-2 rounded-lg"
            >
                <LuLayoutGrid className='text-3xl' />

                Todas las categorias
                <RiArrowDownWideLine />
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div ref={modalRef} className="bg-white w-1/3 h-5/6 p-5 rounded-lg">
                        <div className="flex w-full items-center">
                            <h2 className="w-full text-center text-2xl text-gray-900 font-bold">Categorias</h2>
                            <RiCloseFill onClick={() => setOpen(false)} className='text-3xl hover:cursor-pointer' />
                        </div>
                        <div className='flex items-center gap-3 border shadow-lg rounded-full w-full border-gray-400 mt-10 py-2 px-5 transition-all duration-200 focus-within:border-green-700 focus-within:ring-2 focus-within:ring-green-200'>
                            <CiSearch className="text-3xl" />
                            <input className='focus:outline-none' type="search" placeholder='Buscar' name="" id="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}