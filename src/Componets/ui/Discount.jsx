import React from 'react'
import { Link } from 'react-router'
import imgLeft from '../../assets/image 8.png'
import imgRightTop from '../../assets/image 9.png'
import imgRightBottom from '../../assets/image 10.png'

const Discount = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-center">
          
          {/* Left Side (w-571px h-548px) */}
          <Link 
            to="/" 
            className="w-full lg:w-143 lg:h-137 block rounded-md overflow-hidden shadow-sm group mx-auto"
          >
            <img 
              src={imgLeft} 
              alt="Discount Banner Left" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
          </Link>

          {/* Right Side Column */}
          <div className="w-full lg:w-142 flex flex-col gap-6 mx-auto">
            
            {/* Right Top (h-260px) */}
            <Link 
              to="/" 
              className="w-full h-65 block rounded-md overflow-hidden shadow-sm group"
            >
              <img 
                src={imgRightTop} 
                alt="Discount Banner Right Top" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </Link>

            {/* Right Bottom (h-260px) */}
            <Link 
              to="/" 
              className="w-full h-65 block rounded-md overflow-hidden shadow-sm group"
            >
              <img 
                src={imgRightBottom} 
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