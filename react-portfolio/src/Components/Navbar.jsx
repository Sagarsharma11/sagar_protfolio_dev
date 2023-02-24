import React from "react";

const Navbar = ()=>{
    return (
        <>
        <nav className="flex py-3 items-center justify-between bg-purple-800 text-white">
            <a className="mx-4 font-serif font-bold" href="/">SAGAR SHARMA</a>
            <ul className=" flex space-x-12 mx-4 cursor-pointer">
                <li className="hover:text-yellow-300">Home</li>
                <li className="hover:text-yellow-300">About</li>
                <li className="hover:text-yellow-300">Proect</li>
                <li className="hover:text-yellow-300">Resume</li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar