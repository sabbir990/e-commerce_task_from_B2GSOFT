"use client"

import Store_card from '@/Components/Store_card'
import React, { useEffect, useState } from 'react'

export default function Store() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async() => {
      const request = await fetch('/Products.json');
      const response = await request.json();
      setItems(response)
    }

    fetchItems();
  }, [])

  console.log(items)
  return (
    <div className='lg:px-8 px-4'>
      <div className='text-center mt-4'>
        <h3 className='font-semibold text-3xl'>Discover Your Perfect Style</h3>
        <p>Shop the latest trends, timeless designs, and everything in between—crafted for every occasion and every you.</p>
      </div>
      <hr className='mt-2' />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
        {
          items?.products ? (
            items?.products?.map((product, index) => {
              return <Store_card key={index} product={product} />
            })
          ) : <p>No items found!!</p>
        }
      </div>
    </div>
  )
}
