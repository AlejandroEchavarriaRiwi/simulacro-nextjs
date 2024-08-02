'use client'
import Image from "next/image"
import { useEffect } from "react";
export default function Hero() {
    useEffect(() => {
        localStorage.removeItem('token');
    }, []);
    return (
        <div className="flex flex-wrap">
            <div className="w-full mb-10 sm:w-8/12">
                <div className="container h-full mx-auto sm:p-10">
                    <nav className="flex items-center justify-between px-4">
                        <div className="flex gap-3 text-4xl font-bold">
                            <Image src="/media/cloudy.png" alt="Descripción" width={50} height={30}/>
                            RiwiWheaterApp<span className="text-blue-400">.</span>
                        </div>
                    </nav>
                    <header className="container items-center h-full px-4 mt-10 lg:flex lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold lg:text-6xl">Find the <span className="text-blue-400">wheater</span> of your city location</h1>
                            <div className="w-20 h-2 my-4 bg-blue-400"></div>
                            <p className="mb-10 text-xl">Welcome to your best wheather app friend, save, share, be notified.</p>
                            <div className="flex gap-5">
                            <button className="px-4 py-2 text-xl font-medium text-white bg-blue-400 rounded shadow hover:bg-blue-300" onClick={()=>{window.location.href = "/login"}}>Login</button>
                            <button className="px-4 py-2 text-xl font-medium text-white bg-blue-400 rounded shadow hover:bg-blue-300" onClick={()=>{window.location.href = "/register"}}>Register</button>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <img src="https://images.pexels.com/photos/6685417/pexels-photo-6685417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Leafs" className="object-cover w-full h-48 sm:h-screen sm:w-4/12"/>
        </div>
    )
}