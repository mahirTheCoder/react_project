import React from "react";
import { Link } from "react-router";

const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Common Engine Oil Problems and Solutions",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmoxI2FoUSFGJqYg82jIF6RxpI2f1LgKAqH1Rikft8g&s=10",
    },
    {
      id: 2,
      title: "How and when to replace brake rotors",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Q-T95KKEn2tYGDZJE2VEorF8sC_UY1GSxHvwpFew5Q&s=10",
    },
    {
      id: 3,
      title: "Elenance, Servicing & Repairs",
      author: "Admin",
      category: "Services",
      date: "August 22, 2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKFyk2L3PkzYKzql7YBM4krIHQsO_KE-LloEbmeVbPQ&s=10",
    },
  ];

  return (
    <section className="w-full bg-white py-30 md:py-20 select-none">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-prim font-bold text-3xl md:text-4xl text-[#1F2E24] tracking-wide">
            Latest Blog
          </h2>
        </div>

        {/* Responsive Grid - matching your exact clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full sm:max-w-[370px] lg:w-[370px] h-[524px] bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Container with Fixed 4:3 Aspect Ratio */}
              <Link
                to={'/'}
                className="w-full aspect-[4/3] block overflow-hidden bg-gray-50 flex-shrink-0"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </Link>

              {/* Card Body and Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Meta Information (Author & Category) */}
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-4 font-prim font-medium">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 fill-[#7CA900]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                      <span>by: {blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 fill-[#7CA900]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 6.8c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3z" />
                      </svg>
                      <span>{blog.category}</span>
                    </div>
                  </div>

                  {/* Blog Title with exact line-clamp to look pristine */}
                  <h3 className="font-prim font-bold text-lg md:text-xl text-[#1F2E24] leading-snug line-clamp- hover:text-[#7CA900] transition-colors duration-200">
                    <Link to={'/'}>{blog.title}</Link>
                  </h3>
                </div>

                {/* Card Footer (Date & Read More Link) */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-prim font-medium">
                    <svg
                      className="w-3.5 h-3.5 fill-[#7CA900]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 4h-1V2h-2v2H8V2h-2v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                    </svg>
                    <span>{blog.date}</span>
                  </div>
                  <Link
                    to={'/'}
                    className="text-[#7CA900] hover:text-[#668B00] text-xs font-prim font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>                                   
      </div>
    </section>
  );
};

export default LatestBlog;
