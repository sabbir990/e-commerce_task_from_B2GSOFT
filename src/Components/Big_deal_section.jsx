"use client"

import React, { useEffect, useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import Big_deal_item_card from './Big_deal_item_card';
import Link from 'next/link';

export default function Big_deal_section() {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(10)

    useEffect(() => {
        const fetchItems = async () => {
            const request = await fetch('/Products.json');
            const response = await request.json();
            setItems(response)
        }

        fetchItems()
    }, [])

    const handlePrevious = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if(currentIndex+4 < items?.products?.length){
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className='mt-20 lg:px-8 px-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='text-purple-500 text-sm'>SUMMER</p>
                    <h3 className='font-semibold text-black text-lg'>Big Deal</h3>
                </div>
                <div className='space-x-2'>
                    <button onClick={handlePrevious} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><MdArrowBack /></button>
                    <button onClick={handleNext} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><IoArrowForwardSharp /></button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
                {
                    items?.products ? (
                        items?.products?.slice(currentIndex, currentIndex + 4)?.map((product, index) => {
                            return <Big_deal_item_card product={product} key={index} />
                        })
                    ) : <p className=''>No Items Found!!</p>
                }
            </div>
            <div className='flex justify-center mt-4'>
                <Link href={'/store'} className='bg-purple-500 text-white px-3 py-2 rounded-md hover:bg-purple-600 transition'>See More</Link>
            </div>
        </div>
    )
}
