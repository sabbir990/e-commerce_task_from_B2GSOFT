import Image from 'next/image'
import React from 'react'
import discountImage from "../../public/discountSectionImage.png"
import { MdArrowOutward } from "react-icons/md";

export default function DiscountSection() {
    return (
        <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:space-x-28 mt-20 space-y-12 lg:space-y-0 p-4 pb-0 lg:p-0 bg-purple-200 lg:bg-white'>
            <div className='space-y-4 flex flex-col items-center lg:items-start'>
                <p className='text-[#6F42C1] font-semibold text-lg'>Big Deal</p>
                <h3 className='text-4xl text-center lg:text-start'><span className='text-[#6F42C1]'>30%</span> Off for New Customers</h3>
                <div className='flex items-center'>
                    <button className='px-8 py-3 text-white rounded-badge bg-[#8F71E1]'>Shop Now</button>
                    <button className='p-3 text-white rounded-full bg-[#8F71E1]'><MdArrowOutward size={24} /></button>
                </div>
            </div>
            <Image src={discountImage} alt="Discount" />
        </div>
    )
}
