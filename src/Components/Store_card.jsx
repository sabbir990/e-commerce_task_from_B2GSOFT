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
  } = product;

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover rounded-t-lg"
          src={images[0]}
          alt={productName}
        />
        {/* Tag */}
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {tag}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productName}
        </h5>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          Sizes: {availableSizes.join(", ")}
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Colors: {availableColors.join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </p>
          <p className="text-sm text-yellow-500 font-medium flex items-center">
            ★ {averageRating.toFixed(1)} ({reviews.length} reviews)
          </p>
        </div>
        {/* View Details Button */}
        <button className="w-full mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Store_card;
