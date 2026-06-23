import React, { useRef } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const LatestBlog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogs = [
    {
      id: 1,
      title: "Common Engine Oil Problems and Solutions",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "How and when to replace brake rotors",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Elenance, Servicing & Repairs",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Essential Tools for Modern Gardening",
      author: "Admin",
      category: "Tools",
      date: "August 25, 2025",
      img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format&fit=crop&q=80",
    }
  ];

  // Loop ঠিকমতো কাজ করার জন্য অ্যারে ডুপ্লিকেট করা হয়েছে
  const duplicatedBlogs = [...blogs, ...blogs];

  return (
    <section className="w-full bg-white py-12 md:py-20 select-none overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-prim font-bold text-3xl md:text-4xl text-[#1F2E24] tracking-wide">
            Latest Blog
          </h2>
        </div>

        {/* Navigation Buttons */}
        <button 
          ref={prevRef}
          className="absolute top-[40%] md:top-[55%] -left-2 xl:-left-6 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#7CA900] hover:bg-[#668B00] flex items-center justify-center text-white transition-colors shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>

        <button 
          ref={nextRef}
          className="absolute top-[40%] md:top-[55%] -right-2 xl:-right-6 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#7CA900] hover:bg-[#668B00] flex items-center justify-center text-white transition-colors shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          loop={true} 
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 }
          }}
          className="w-full !px-1 !py-2"
        >
          {duplicatedBlogs.map((blog, index) => (
            <SwiperSlide key={`${blog.id}-${index}`} className="h-auto">
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group">
                
                {/* Image Box */}
                <Link to={`/blog/${blog.id}`} className="w-full aspect-[4/3] block overflow-hidden bg-gray-50">
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  
                  {/* Meta Tags */}
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3 font-prim font-medium">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 fill-[#7CA900]" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                      <span>by: {blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 fill-[#7CA900]" viewBox="0 0 24 24">
                        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 6.8c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3z"/>
                      </svg>
                      <span>{blog.category}</span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="font-prim font-bold text-base md:text-lg text-[#1F2E24] leading-snug mb-5 flex-grow line-clamp-2 hover:text-[#7CA900] transition-colors duration-200">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-prim font-medium">
                      <svg className="w-3.5 h-3.5 fill-[#7CA900]" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2h-2v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                      </svg>
                      <span>{blog.date}</span>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="text-[#7CA900] hover:text-[#668B00] text-xs font-prim font-bold uppercase tracking-wider transition-colors duration-200">
                      Read More
                    </Link>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default LatestBlog;