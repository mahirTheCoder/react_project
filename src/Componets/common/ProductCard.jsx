import React from 'react'
import { FiShoppingBag, FiEye, FiHeart, FiStar } from 'react-icons/fi'

// Directly destructuring data inside the component parameter
const ProductCard = ({ title, price, oldPrice, discount, img }) => {
  return (
    <div className="w-full border border-gray-100 rounded-sm bg-white overflow-hidden group relative flex flex-col justify-between">
      
      {/* Product Top Box Image side */}
      <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge layout */}
        {discount && (
          <span className="absolute top-3 left-3 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-prim">
            {discount}
          </span>
        )}

        {/* Animated Action Buttons */}
        <div className="absolute top-5 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 z-10">
          <button className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base">
            <FiShoppingBag />
          </button>
          <button className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base">
            <FiEye />
          </button>
          <button className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base">
            <FiHeart />
          </button>
        </div>
      </div>

      {/* Product Bottom Content side */}
      <div className="p-4 flex flex-col items-center text-center space-y-1.5">
        {/* Rating icons */}
        <div className="flex items-center gap-0.5 text-[#FBBF24] text-xs">
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar />
        </div>
        
        <h3 className="font-prim font-bold text-prim text-sm sm:text-base tracking-wide truncate w-full max-w-[160px]">
          {title}
        </h3>
        
        {/* Prices box */}
        <div className="flex items-center gap-2 font-prim text-sm">
          <span className="text-brand font-bold">{price}</span>
          {oldPrice && <span className="text-gray-300 line-through">{oldPrice}</span>}
        </div>
      </div>

    </div>
  )
}

export default ProductCard