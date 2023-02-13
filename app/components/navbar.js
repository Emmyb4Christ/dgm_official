'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center md:px-[30px] px-[20px] bg-[#292828] text-white ">
                <div className="flex items-center gap-[10px]">
                    <Image className="md:w-auto md:h-auto w-[50px] h-[50px]" src='/dgmlogo.png' width={100} height={100} alt='MinistryLogo' />
                    <h1 className="uppercase text-[10px] sm:text-lg md:text-xl font-bold font-Poppins">dominion gospel ministry</h1>
                </div>
                <div className='lg:hidden flex justify-end mr-4'>
                    <i
                        className='fa-sharp fa-solid fa-bars text-xl cursor-pointer'
                        onClick={() => setIsMenuOpen(true)}
                    ></i>
                </div>
                <div className="hidden lg:flex justify-center gap-[10px]">
                    <Link className="text-xl opacity-90 text font-robotoCondensed focus:bg-orange-600 p-4 active:bg-orange-500" href='/'>Home</Link>
                    <Link className="text-xl opacity-90 text font-robotoCondensed focus:bg-orange-600 p-4 active:bg-orange-500" href='/about'>About</Link>
                    <Link className="text-xl opacity-90 text font-robotoCondensed focus:bg-orange-600 p-4 active:bg-orange-500" href='/sermon'>Sermon</Link>
                    <Link className="text-xl opacity-90 text font-robotoCondensed focus:bg-orange-600 p-4 active:bg-orange-500" href='/contact'>Contact</Link>
                </div>
                <div className="hidden lg:flex px-[30px] mr-6 py-2 bg-[#FFD2A4] backdrop-blur-2xl border rounded-xl focus:bg-orange-600 p-4 active:bg-orange-500 ">
                    <Link className="text-xl text-[#1C1D28] opacity-90 text font-robotoCondensed" href='gallery'>Gallery</Link>
                </div>
            </div>
            {/* Mobile View Menu */}
            {isMenuOpen && (
                <div className="bg-[#000] lg:hidden absolute min-h-screen min-w-[50%] z-[9999] right-0 top-0 flex flex-col text-white">
                    <i
                        className='fa-sharp fa-solid fa-xmark text-2xl cursor-pointer ml-10 mb-5'
                        onClick={() => setIsMenuOpen(false)}
                    ></i>
                    <div className="flex flex-col lg:hidden justify-center gap-[10px]">
                        <Link className="text-xl opacity-90 text font-robotoCondensed hover:bg-[#444343] focus:bg-orange-600 p-4 active:bg-orange-500" href='/'>Home</Link>
                        <Link className="text-xl opacity-90 text font-robotoCondensed hover:bg-[#444343] focus:bg-orange-600 p-4 active:bg-orange-500" href='/about'>About</Link>
                        <Link className="text-xl opacity-90 text font-robotoCondensed hover:bg-[#444343] focus:bg-orange-600 p-4 active:bg-orange-500" href='/sermon'>Sermon</Link>
                        <Link className="text-xl opacity-90 text font-robotoCondensed hover:bg-[#444343] focus:bg-orange-600 p-4 active:bg-orange-500" href='/contact'>Contact</Link>
                    </div>
                    <div className="lg:hidden flex mt-6 py-3 bg-[#FFD2A4] backdrop-blur-2xl focus:bg-orange-600 p-4 active:bg-orange-500 ">
                        <Link className="text-xl text-[#1C1D28] opacity-90 text font-robotoCondensed" href='gallery'>Gallery</Link>
                    </div>
                </div>
            )}

        </div>
    )
}