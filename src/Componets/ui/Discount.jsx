import React from 'react'
import { Link } from 'react-router'

const Discount = () => {
  return (
    <section className="w-full py-29 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Main layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-center">
          
          {/* Left Side Banner Link (w-571 h-548 layout) */}
          <Link 
            to="/" 
            className="w-full max-w-[571px] aspect-[571/548] lg:h-[548px] block rounded-md overflow-hidden shadow-sm group mx-auto"
          >
            <img 
              src="/src/assets/image 8.png" 
              alt="Discount Banner Left" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
          </Link>

          {/* Right Side Banners Column */}
          <div className="w-full max-w-[570px] flex flex-col gap-6 mx-auto">
            
            {/* Right Top Card Link (w-570 h-260 layout) */}
            <Link 
              to="/" 
              className="w-full aspect-[570/260] sm:h-[260px] block rounded-md overflow-hidden shadow-sm group"
            >
              <img 
                src="/src/assets/image 9.png" /* Add your top right banner image path here */
                alt="Discount Banner Right Top" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </Link>

            {/* Right Bottom Card Link (w-570 h-260 layout) */}
            <Link 
              to="/" 
              className="w-full aspect-[570/260] sm:h-[260px] block rounded-md overflow-hidden shadow-sm group"
            >
              <img 
                src="/src/assets/image 10.png" 
                alt="Discount Banner Right Bottom" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Discount