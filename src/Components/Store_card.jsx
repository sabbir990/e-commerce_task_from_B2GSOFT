import Link from "next/link";
import React from "react";

const Store_card = ({ product }) => {
  const {
    tag,
    productName,
    reviews,
    averageRating,
    price,
    availableSizes,
    availableColors,
    images,
    id
  } = product;

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg"
          src={images[0]}
          alt={productName}
        />
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {tag}
        </span>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productName.slice(0, 15)}...
        </h5>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          Sizes: {availableSizes.join(", ")}
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Colors: {availableColors.join(", ").slice(0, 15)}...
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </p>
          <p className="text-sm text-yellow-500 font-medium flex items-center">
            ★ {averageRating.toFixed(1)} ({reviews.length} reviews)
          </p>
        </div>
        <Link href={`/store/${id}`} className="btn btn-info text-white btn-block">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Store_card;
