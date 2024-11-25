"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaMinus, FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Product_card from '@/Components/Product_card'

export default function ProductDetails() {
    const { id } = useParams();
    const [allItems, setAllItems] = useState([]);
    const [image, setImage] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const fetchItems = async () => {
            const request = await fetch('/Products.json');
            const response = await request.json();
            setAllItems(response);
        }

        fetchItems()
    }, [])

    const selectedItem = allItems?.products?.find((item) => {
        return item?.id === id
    })

    useEffect(() => {
        if (selectedItem?.images) {
            setImage(selectedItem?.images[0])
        }
    }, [selectedItem])

    const handleSelectImage = async (itemImage) => {
        setImage(itemImage)
    }

    const handleIncrease = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handlePrevious = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        console.log("Hello")
        if(currentIndex + 4 < allItems?.products?.length){
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className='lg:px-8 lg:py-4 p-4'>
            <div className='flex flex-col lg:space-x-4 lg:flex lg:flex-row'>
                <div>
                    {/* Image div */}
                    <img src={image} alt='Product Image' className='rounded-md shadow-md' />
                    <div className='flex items-center space-x-2 mt-4'>
                        {
                            selectedItem?.images?.map((itemImage, index) => {
                                return <img onClick={() => handleSelectImage(itemImage)} src={itemImage} alt="Item Image" key={index} className='w-16 h-16 rounded-lg shadow-md' />
                            })
                        }
                    </div>
                </div>
                <div className='py-2 space-y-3 mt-4 lg:mt-0'>
                    {/* Details Div */}
                    <span className='bg-[#2F1C59] text-white rounded-md px-3 py-2'>
                        {selectedItem?.tag}
                    </span>
                    <h3 className="text-2xl"><span className='text-purple-500'>Product Name</span> : {selectedItem?.productName}</h3>
                    <div className='flex items-center space-x-8'>
                        <div className='flex items-center space-x-2'>
                            <Rating style={{ maxWidth: 70 }} value={Math.floor(selectedItem?.averageRating)} readOnly />
                            <p>({selectedItem?.averageRating})</p>
                        </div>
                        <div className='text-purple-500'>
                            {selectedItem?.reviews?.length} Reviews
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold'><span className='text-purple-500'>Price</span> : ${selectedItem?.price}</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <h3>Available Sizes</h3>
                            <div className='flex items-center space-x-2 mt-2'>
                                {
                                    selectedItem?.availableSizes?.map((size, index) => {
                                        return <div className='p-3 border border-purple-500 text-purple-500 rounded-md' key={index}>
                                            {size}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <h3>Available Colors</h3>
                            <div className='flex items-center space-x-2 mt-2'>
                                {
                                    selectedItem?.availableColors?.map((color, index) => {
                                        return <div className='p-3 border border-purple-500 text-purple-500 rounded-md' key={index}>
                                            {color}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h3>Quantity</h3>
                        <div className='flex mt-2'>
                            <button onClick={handleDecrease} className='py-2 px-4 bg-slate-300 rounded-l-badge text-center text-lg'><FaMinus /></button>
                            <p className='px-4 py-2 bg-slate-300 text-lg font-semibold'>{quantity}</p>
                            <button onClick={handleIncrease} className='py-2 px-4 bg-slate-300 rounded-r-badge text-center text-lg'><FaPlus /></button>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button className='w-full py-2 text-white rounded-md bg-purple-500 hover:bg-purple-600 transition'>Buy Now</button>
                        <button className='w-full py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white transition'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='mt-20 text-center text-3xl'>Reviews & Ratings</h3>
                <hr className='my-4'/>
                <div className='space-y-3'>
                    {
                        selectedItem?.reviews?.map((review, index) => {
                            return <div key={index} className='flex space-x-3 items-start'>
                                <img className='w-12 rounded-full border-2 border-black' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4RujW9_si89qvtoXLwIripLMrwQe78N0xA&s" alt={review?.user} />
                                <div>
                                    <h3 className='font-semibold'>{review?.user}</h3>
                                    <div className='flex items-center space-x-2'>
                                        <Rating style={{ maxWidth: 70 }} value={Math.floor(review?.rating)} readOnly />
                                        <p>({review?.rating})</p>
                                    </div>
                                    <p>{review?.comment}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between mt-20'>
                    <h3 className='font-semibold text-2xl'>Related Products</h3>
                    <div className='space-x-2'>
                        <button onClick={handlePrevious} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><FaArrowLeft /></button>
                        <button onClick={handleNext} className='p-3 rounded-full text-purple-500 border border-purple-500 transition hover:bg-purple-500 hover:text-white'><FaArrowRight /></button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-3'>
                    {
                        allItems?.products ? (
                            allItems?.products?.slice(currentIndex, currentIndex + 4)?.map((product, index) => {
                                return <Product_card key={index} product={product} />
                            })
                        ) : <p>No Items Found!!</p>
                    }
                </div>
            </div>
        </div>
    )
}
