import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'
import Link from 'next/link'

export default function RegisterPage() {
    return (
        <div className='grid grid-cols-[1fr_40%] h-screen w-screen'>
            <BackgroundGradientAnimation />
            <div className=" flex flex-col justify-center px-20" >
                <h1 className="text-gray-900 font-bold text-center text-2xl mb-3">Register</h1>

                <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 mb-3 rounded-full hover:bg-gray-100" href="#">
                    <img src="/google.png" alt="Google logo" className="w-5 h-5" />
                    Continue with Google
                </button>

                <form action="" className=" border-b border-t pt-3 border-gray-300 pb-3 flex flex-col justify-center">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="">Name and Last Name</label>
                        <input className="border border-gray-300 py-2 px-4 rounded-lg" type="text" name="name" />
                    </div>
                    <div className='grid grid-cols-[40%_1fr] gap-2 mb-2'>
                        <div className="flex flex-col">
                            <label htmlFor="">Phone Number</label>
                            <input className="border border-gray-300 py-2 px-4 rounded-lg" type="text" name="phone" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Email addres</label>
                            <input className="border border-gray-300 py-2 px-4 rounded-lg" type="email" name="email" />
                        </div>
                    </div>
                    <div className='flex gap-2 mb-8'>
                        <div className="flex flex-col">
                            <label htmlFor="">Password</label>
                            <input className="border border-gray-300 py-2 px-4 rounded-lg" type="password" name="password" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Confirm Password</label>
                            <input className="border border-gray-300 py-2 px-4 rounded-lg" type="password" name="password" />
                        </div>
                    </div>
                    <div className="flex mb-2 gap-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">I agree to the terms and conditions</label>
                    </div>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 hover:cursor-pointer">Register</button>
                </form>
                <p className="text-center mt-3 text-lg">Already have an account?</p>
                <Link className="text-center mt-3 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-200" href="/auth/login">Log in</Link>
            </div>
        </div>
    )
}
