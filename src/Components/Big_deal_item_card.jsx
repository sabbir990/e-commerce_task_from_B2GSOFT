"use client"

import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default function Big_deal_item_card({ product }) {
    // console.log(Math.floor(product?.averageRating))
    console.log(product?.averageRating)
    // const [rating, setRating] = useState(0)
    return (
        <div className='p-3 bg-white border-white rounded-lg shadow-lg flex-col h-80 transition'>
            <div className="relative w-full aspect-w-1 aspect-h-1">
                <img
                    src={product?.images[0]}
                    alt={product?.productName}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div
                    className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
                    Up to 40%
                </div>
            </div>
            <div className="mt-3 flex flex-col flex-grow">
                {/* <p className="text-gray-500 text-sm">Rating</p> */}
                <div>
                    <Rating style={{ maxWidth: 100 }} value={Math.floor(product?.averageRating)} readOnly />
                </div>
                <div className="mt-1 flex justify-between items-center">
                    <h3 className="font-medium text-gray-700">{product?.productName?.slice(0, 15)}...</h3>
                    <h3 className="font-bold text-purple-500">${product?.price}</h3>
                </div>
            </div>
            <button className="mt-3 px-4 py-2 text-purple-500 bg-white border border-purple-500 text-sm rounded-md hover:bg-purple-500 hover:text-white transition w-full">
                Add to Cart
            </button>
        </div>
    )
}
