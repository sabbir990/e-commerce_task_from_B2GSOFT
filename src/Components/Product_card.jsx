import React from 'react'

export default function Product_card({ product }) {
    return (
        <div className='p-3 bg-white border-white rounded-lg shadow-lg flex-col h-80 transition'>
            <img
                src={product?.images[0]}
                alt={product?.productName}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className='flex justify-between p-2'>
                <h3 className="text-sm">{product?.productName?.slice(0, 15)}...</h3>
                <p className="text-sm font-semibold">${product?.price}</p>
            </div>
            <button className='btn btn-outline btn-info btn-block'>Add To Cart</button>
        </div>

    )
}
