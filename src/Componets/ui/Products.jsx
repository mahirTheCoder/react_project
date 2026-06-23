import React from 'react'
import ProductCard from './ProductCard' // নিশ্চিত করুন পাথ ঠিক আছে

// Assets
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'

const Products = () => {
  // Mock data structure
  const products = [
    { id: 1, title: 'Carrot Group Seal', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img1 },
    { id: 2, title: 'Red Hot Tomato', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img2 },
    { id: 3, title: 'Orange Fresh Juice', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img3 },
    { id: 4, title: 'Poultry Farm Meat', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img4 },
    { id: 5, title: 'Fresh Butter Cake', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img5 },
    { id: 6, title: 'Orange Sliced Mix', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img6 },
    { id: 7, title: 'Orange Fresh Juice', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img7 },
    { id: 8, title: 'Carrot Group Seal', price: '$32.20', oldPrice: '$46.00', discount: '-19%', img: img8 }
  ];

  return (
    <section className="w-full py-16 bg-white select-none">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-center font-prim font-bold text-prim text-3xl md:text-4xl tracking-wide mb-12">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products