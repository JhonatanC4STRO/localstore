"use client"
import { useState, useEffect, useRef } from "react"
import { RiArrowDownWideLine, RiCloseFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiMapPinAreaThin } from "react-icons/pi";
import CercaDeMi from "./CercaDeMi";
import PorCiudad from "./PorCiudad";

export default function ModalExample() {
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("cerca")
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
                <PiMapPinAreaThin className='text-3xl' />
                Todo el pais
                <RiArrowDownWideLine />
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div ref={modalRef} className="bg-white w-1/3 h-5/6 p-5 rounded-lg">
                        <div className="flex w-full items-center">
                            <h2 className="w-full text-center text-2xl text-gray-900 font-bold">¿Dónde buscas?</h2>
                            <RiCloseFill onClick={() => setOpen(false)} className='text-3xl hover:cursor-pointer' />
                        </div>
                        <div className="p-1 bg-gray-200 gap-1 flex justify-center items-center rounded-full">
                            <button
                                onClick={() => setActiveTab("cerca")}
                                className={`w-1/2 px-2 py-1 rounded-full transition-all duration-300 ${activeTab === "cerca"
                                    ? "bg-white shadow font-semibold"
                                    : "text-gray-600"
                                    }`}
                            >
                                Cerca de mi
                            </button>

                            <button
                                onClick={() => setActiveTab("ciudad")}
                                className={`w-1/2 px-2 py-1 rounded-full transition-all duration-200 ${activeTab === "ciudad"
                                    ? "bg-white shadow font-semibold"
                                    : "text-gray-600"
                                    }`}
                            >
                                Por ciudad
                            </button>
                        </div>
                        {activeTab === "cerca" && <CercaDeMi />}
                        {activeTab === "ciudad" && <PorCiudad />}
                    </div>
                </div>
            )}
        </div>
    )
}