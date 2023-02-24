import React from 'react'
import './style.css'

const Banner = () => {
    return (
        <div className='flex justif-center'>
            <div className=' bg-red-200 content'>
                <h2 className='pt-40 text-slate-800'>
                    HELLO, MY NAME IS
                </h2>
                <h1 className='text-7xl py-4 text-teal-700 font-mono'>
                    Sagar Sharma
                </h1>
                <p className=' text-slate-600'>
                    MERN Stack Developer
                </p>
            </div>
            <div className='banner_image bg-stone-100 '>
                
            </div>
        </div>
    )
}

export default Banner