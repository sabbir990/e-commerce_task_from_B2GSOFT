"use client"

import React, { useEffect, useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import Product_card from './Product_card';
import Link from 'next/link';

export default function Featured_products_section() {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch('/Products.json');
            const response = await request.json();
            setItems(response)
        }

        fetchData();
    }, [])

    const handleNext = () => {
        if(currentIndex + 4 < items?.products?.length){
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrevious = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    }
    return (
        <div className='mt-12 lg:px-8 px-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='text-purple-500 text-sm'>FEATURED PRODUCTS</p>
                    <h3 className='font-semibold text-black text-lg'>New Arrivals</h3>
                </div>
                <div className='space-x-2'>
                    <button onClick={handlePrevious} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><MdArrowBack /></button>
                    <button onClick={handleNext} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><IoArrowForwardSharp /></button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
                {items?.products?.length ? (
                    items?.products?.slice(currentIndex, currentIndex + 4)?.map((product, index) => {
                        return <Product_card product={product} key={index} />
                    })
                ) : (
                    <p className=''>No Products Available</p>
                )}
            </div>
            <div className='flex justify-center mt-3'>
                <Link href={'/store'} className='px-4 py-3 bg-purple-500 text-white rounded-md'>See More</Link>
            </div>
        </div>
    )
}
