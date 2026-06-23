import React, { useState } from "react";
import { FiShoppingBag, FiEye, FiHeart, FiStar } from "react-icons/fi";

// Correctly imported asset paths
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import { Link } from "react-router";

const OurProducts = () => {
  // Set default active tab to 'ALL' to show all products initially
  const [activeTab, setActiveTab] = useState("ALL");

  // Included 'ALL' at the beginning of categories list
  const categories = [
    "ALL",
    "FOOD & DRINKS",
    "VEGETABLES",
    "DRIED FOODS",
    "BREAD & CAKE",
    "FISH & MEAT",
  ];

  // Mock data structure
  const products = [
    {
      id: 1,
      category: "FOOD & DRINKS",
      title: "Carrot Group Seal",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img1,
    },
    {
      id: 2,
      category: "VEGETABLES",
      title: "Red Hot Tomato",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img2,
    },
    {
      id: 3,
      category: "FOOD & DRINKS",
      title: "Orange Fresh Juice",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img3,
    },
    {
      id: 4,
      category: "FISH & MEAT",
      title: "Poultry Farm Meat",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img4,
    },
    {
      id: 5,
      category: "BREAD & CAKE",
      title: "Fresh Butter Cake",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img5,
    },
    {
      id: 6,
      category: "DRIED FOODS",
      title: "Orange Sliced Mix",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img6,
    },
    {
      id: 7,
      category: "FOOD & DRINKS",
      title: "Orange Fresh Juice",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img7,
    },
    {
      id: 8,
      category: "FOOD & DRINKS",
      title: "Carrot Group Seal",
      price: "$32.20",
      oldPrice: "$46.00",
      discount: "-19%",
      img: img8,
    },
  ];

  // Updated filtering logic: Shows all if activeTab is 'ALL', otherwise filters by category
  const filteredProducts =
    activeTab === "ALL"
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <section className="w-full py-16 bg-white select-none">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center font-prim font-bold text-prim text-3xl md:text-4xl tracking-wide mb-8">
          Our Products
        </h2>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 border-b border-gray-100 pb-4 mb-10 text-xs sm:text-sm font-prim font-semibold tracking-wider">
          {categories.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 relative cursor-pointer duration-300 uppercase ${
                activeTab === tab
                  ? "text-brand"
                  : "text-gray-400 hover:text-prim"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid Layout: 2 items on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full border border-gray-100 rounded-sm bg-white overflow-hidden group relative flex flex-col justify-between"
            >
              {/* Product Top Box Image side */}
              <div className="w-full aspect-square bg-[#F9F9F9] flex items-center justify-center p-4 relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge layout */}
             <span className="absolute top-3 left-3 bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-tl-xl rounded-br-xl font-prim">
                  {product.discount}
                </span>

                {/* Animated Action Buttons (Top-5, Right-3 layout on hover) */}
                <div className="absolute top-5 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 z-10">
                  {/* Cart Link */}
                  <Link
                    to="/"
                    className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base"
                  >
                    <FiShoppingBag />
                  </Link>

                  {/* Details Link */}
                  <Link
                    to="/"
                    className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base"
                  >
                    <FiEye />
                  </Link>

                  {/* Wishlist Link */}
                  <Link
                    to="/"
                    className="w-9 h-9 bg-white text-prim hover:bg-brand hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer text-base"
                  >
                    <FiHeart />
                  </Link>
                </div>
              </div>

              {/* Product Bottom Content side */}
              <div className="p-4 flex flex-col items-center text-center space-y-1.5">
                {/* Static rating icons */}
                <div className="flex items-center gap-0.5 text-[#FBBF24] text-xs">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar />
                </div>

                <h3 className="font-prim font-bold text-prim text-sm sm:text-base tracking-wide truncate w-full max-w-[160px]">
                  {product.title}
                </h3>

                {/* Prices box */}
                <div className="flex items-center gap-2 font-prim text-sm">
                  <span className="text-brand font-bold">{product.price}</span>
                  <span className="text-gray-300 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
