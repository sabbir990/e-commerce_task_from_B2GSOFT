import Image from 'next/image'
import React from 'react'
import womenCollection from '../../public/women_collection.jpg'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

export default function Women_collection_section() {
  return (
    <div className='lg:flex lg:flex-row flex flex-col-reverse items-center lg:justify-center mt-32 lg:space-x-6 px-10'>
        <Image className='rounded-lg shadow-xl mt-4 lg:mt-0' src={womenCollection} alt='collection'/>
        <div className='space-y-4'>
            <h1 className='text-4xl text-center lg:text-start'>Explore the <span className='text-[#6F42C1]'>Elegance</span> of Women's Fashion</h1>
            <p className='text-gray-500 font-semibold text-center lg:text-start'>Discover a curated selection of timeless styles, trendy outfits, and versatile essentials designed to elevate your wardrobe.</p>
            <div className='flex items-center justify-center lg:justify-start'>
                <Link href={'/store'} className="px-4 py-3 text-white rounded-badge bg-[#8F71E1]">Shop Now</Link>
                <Link href={'/store'} className="p-3 text-white rounded-full bg-[#8F71E1]"><MdArrowOutward size={24} /></Link>
            </div>
        </div>
    </div>
  )
}
