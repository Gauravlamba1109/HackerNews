import { useState } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    const [open, setOpen] = useState(false);
    const handleclick = () => setOpen(!open)

    return (
        <header className="h-[10px] w-full bg-indigo-200 border-b border-grey-300 py-2 ">
            <div className="px-2 flex justify-between items-center w-full h-full">

                <div className="flex items-center">
                    <Link to='/' style={{ textDecoration: "none" }} className='text-gray-900 flex flex-shrink-0 items-center mr-10 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium'>
                        <svg id="logo-14" width="73" height="30" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path> </svg>
                        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HN.</h1>
                    </Link>
                    <ul className="hidden md:flex ">
                        <li className="mt-4"><a className='text-gray-900 hover:bg-indigo-900 hover:text-white block py-2 px-3 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/">Home</a></li>
                        <li className="mt-4"><a className='text-gray-900 hover:bg-indigo-900 hover:text-white block py-2 px-3 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/newstories">New Stories</a></li>
                        <li className="mt-4"><a className='text-gray-900 hover:bg-indigo-900 hover:text-white block py-2 px-3 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/newcomments">New Comments</a></li>
                        <li className="mt-4"><a className='text-gray-900 hover:bg-indigo-900 hover:text-white block py-2 px-3 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/search">Search</a></li>
                    </ul>
                </div>
                <div className="md:hidden px-4" onClick={handleclick}>
                    {!open ?
                        <MenuIcon className='w-5 shadow-md rounded-sm'></MenuIcon>
                        :
                        <XIcon className="w-5 shadow-md rounded-sm" ></XIcon>
                    }
                </div>
            </div>
            <ul className={(!open) ? "hidden" : "bg-indigo-200 w-full px-8 md:hidden"}>
                <li className="border-b-2 border-indigo-200 w-full"><a className='text-gray-900  shadow-lg hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/">Home</a></li>
                <li className="border-b-2 border-indigo-200 w-full"><a className='text-gray-900 shadow-lg hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/newstories">New Stories</a></li>
                <li className="border-b-2 border-indigo-200 w-full"><a className='text-gray-900 shadow-lg hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/newcomments">New Comments</a></li>
                <li className="border-b-2 border-indigo-200 w-full"><a className='text-gray-900 shadow-lg hover:bg-indigo-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium' style={{ textDecoration: "none" }} href="/search">Search</a></li>
            </ul>
        </header>
    );
}

export default Navbar