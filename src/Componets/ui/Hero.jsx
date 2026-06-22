import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FaArrowLeft as ArrowIconLeft, FaArrowRight as ArrowIconRight } from 'react-icons/fa'
import { FaAppleWhole } from 'react-icons/fa6'
import img from '../../assets/image 7.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Hero = () => {
  // Slider data
  const slides = [
    {
      tag: "100% Genuine Products",
      title: "Tasty & Healthy Organic Food",
      btnText: "EXPLORE PRODUCTS",
      img: img
    },
    {
      tag: "Fresh From Our Farm",
      title: "Organic Vegetables For Your Family",
      btnText: "SHOP NOW",
      img: img
    },
    {
      tag: "Big Sale Offer",
      title: "Get Special Discount On Fresh Food",
      btnText: "VIEW OFFERS",
      img: img
    }
  ];

  return (
    <section className="w-full bg-[#F7F5EB]  relative min-h-137.5 sm:min-h-150 lg:min-h-175 flex items-center overflow-hidden select-none">
      
      <Swiper
        space={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-0">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                
                {/* Content side */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 z-10 order-2 lg:order-1">
                  <div className="flex items-center gap-2 text-prim font-sec font-medium text-xs sm:text-sm lg:text-base tracking-wide">
                    <FaAppleWhole className="text-brand text-base sm:text-lg lg:text-xl" />
                    <span>{slide.tag}</span>
                  </div>
                  <h1 className="font-prim font-bold text-prim text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wide max-w-xl">
                    {slide.title}
                  </h1>
                  <button className="bg-brand text-white font-prim font-bold text-xs lg:text-sm tracking-widest px-5 sm:px-8 h-11 sm:h-14 hover:bg-prim duration-500 transition-all shadow-md rounded-sm">
                    {slide.btnText}
                  </button>
                </div>

                {/* Image side */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 order-1 lg:order-2">
                  <div className="w-full max-w-[320px] sm:max-w-113 md:max-w-138 lg:max-w-170 xl:max-w-200 aspect-square lg:aspect-auto flex items-center justify-center">
                    <img 
                      src={slide.img} 
                      alt="Organic Food" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Desktop navigation buttons */}
        <button className="custom-prev hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md items-center justify-center text-prim hover:bg-brand hover:text-white transition-all duration-300 rounded-sm z-20 cursor-pointer">
          <ArrowIconLeft className="text-base" />
        </button>

        <button className="custom-next hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-md items-center justify-center text-prim hover:bg-brand hover:text-white transition-all duration-300 rounded-sm z-20 cursor-pointer">
          <ArrowIconRight className="text-base" />
        </button>

        {/* Pagination Dots container - Lowered to the bottom */}
        <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="custom-pagination flex items-center gap-2"></div>
        </div>

      </Swiper>
    </section>
  )
}

export default Hero