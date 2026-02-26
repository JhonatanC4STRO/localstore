"use client";
import React from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export default function LoginPage() {
    return (
        <div className="grid h-screen grid-cols-[1fr_40%]">
            <div className="">
                <BackgroundGradientAnimation />
            </div>
            <div className=" flex flex-col justify-center px-10" >
                <h1 className="text-gray-900 text-3xl mb-3">Log in</h1>

                <a className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 mb-8 rounded-full hover:bg-gray-100" href="#">
                    <img src="/google.png" alt="Google logo" className="w-5 h-5" />
                    Continue with Google
                </a>

                <form action="" className="border-b border-t pt-8 border-gray-300 pb-10 flex flex-col justify-center">
                    <div className="flex flex-col mb-3">
                        <label className="pb-2" htmlFor="">Email addres</label>
                        <input className="border border-gray-300 py-2 px-4 rounded-lg" type="email" name="email" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label className="pb-2" htmlFor="">Password</label>
                        <input className="border border-gray-300 py-2 px-4 rounded-lg" type="password" name="password" />
                    </div>
                    <a className="text-end text-blue-500 hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                    <div className="flex mb-2 gap-3">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Recordar contraseña</label>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 hover:cursor-pointer">Log in</button>
                </form>
                <p className="text-center mt-3 text-lg">Don&apos;t have an account?</p>
                <Link className="text-center mt-3 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-200" href="/auth/signup">Sign up</Link>
            </div>
        </div>

    );
}
