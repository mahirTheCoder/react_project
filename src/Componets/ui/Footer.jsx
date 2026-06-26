import React from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { Link } from "react-router"; 

const Footer = () => {
  // Top Features Data
  const features = [
    {
      id: 1,
      title: "Curated Products",
      desc: "Provide Curated Products for all product over $100",
    },
    {
      id: 2,
      title: "Curated Products",
      desc: "Provide Curated Products for all product over $100",
    },
    {
      id: 3,
      title: "Curated Products",
      desc: "Provide Curated Products for all product over $100",
    },
    {
      id: 4,
      title: "Curated Products",
      desc: "Provide Curated Products for all product over $100",
    },
  ];

  return (
    <footer className="w-full bg-[#FAF8F2] relative mt-[450px] sm:mt-[240px] lg:mt-32 select-none">
      
      {/* 1. Top Feature Cards Wrapper (Half overlapping the footer) */}
      <div className="container mx-auto px-4 max-w-6xl relative z-20 -translate-y-1/2">
        <div className="bg-white border border-gray-100 shadow-xl py-6 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          {features.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 ${idx > 0 ? "sm:pt-0 lg:pl-6" : ""} ${idx > 1 ? "pt-4 sm:pt-4 lg:pt-0" : ""} ${idx === 1 ? "pt-4 sm:pt-0" : ""}`}
            >
              {/* Icon Container */}
              <div className="size-12 flex-shrink-0 flex items-center justify-center bg-transparent">
                <svg
                  className="size-10 text-[#7CA900] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3c-1.2 0-2.4.4-3.4 1.2L4.3 7.5C3.5 8.1 3 9 3 10v4c0 1 .5 1.9 1.3 2.5l4.3 3.3c1 .8 2.2 1.2 3.4 1.2s2.4-.4 3.4-1.2l4.3-3.3c.8-.6 1.3-1.5 1.3-2.5v-4c0-1-.5-1.9-1.3-2.5l-4.3-3.3C14.4 3.4 13.2 3 12 3zm-1 4.5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-1zm-3 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-1z" />
                </svg>
              </div>
              {/* Text */}
              <div>
                <h4 className="font-prim font-bold text-sm text-[#1F2E24] tracking-wide mb-0.5">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Footer Content */}
      {/* Added 'text-center lg:text-left' to align content globally based on screen size */}
      <div className="container mx-auto px-4 max-w-6xl pb-12 -mt-4 text-center lg:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6 justify-center items-start">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 font-prim font-extrabold text-2xl text-[#1F2E24]">
                <span className="text-[#7CA900]">
                  <svg className="size-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </span>
                Broccoli
              </div>
            </div>
            <p className="text-[#556057] text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            {/* Contact Details */}
            <div className="flex flex-col items-center lg:items-start gap-2.5 text-sm text-[#334237] mt-1 font-medium">
              <div className="flex items-start justify-center lg:justify-start gap-2">
                <span className="text-[#7CA900] mt-0.5">📍</span>
                <span>Brooklyn, New York, United States</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#7CA900]">📞</span>
                <span>+0123-456789</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#7CA900]">✉️</span>
                <span>example@example.com</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-1 text-[#1F2E24]">
              <a href="#" className="hover:text-[#7CA900] transition-colors"><i className="fab fa-facebook-f text-base"></i></a>
              <a href="#" className="hover:text-[#7CA900] transition-colors"><i className="fab fa-twitter text-base"></i></a>
              <a href="#" className="hover:text-[#7CA900] transition-colors"><i className="fab fa-instagram text-base"></i></a>
              <a href="#" className="hover:text-[#7CA900] transition-colors"><i className="fab fa-dribbble text-base"></i></a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:col-span-2">
            <h5 className="font-prim font-bold text-base text-[#1F2E24] tracking-wide mb-4">
              Company
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#556057]">
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">About</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">All Products</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Locations Map</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-2">
            <h5 className="font-prim font-bold text-base text-[#1F2E24] tracking-wide mb-4">
              Services.
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#556057]">
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Order tracking</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Wish List</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Login</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">My account</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Promotional Offers</Link></li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div className="lg:col-span-2">
            <h5 className="font-prim font-bold text-base text-[#1F2E24] tracking-wide mb-4">
              Customer Care.
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-[#556057]">
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Login</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">My account</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Wish List</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Order tracking</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-[#7CA900] transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start gap-3">
            <h5 className="font-prim font-bold text-base text-[#1F2E24] tracking-wide mb-1">
              Newsletter
            </h5>
            <p className="text-[#556057] text-sm leading-relaxed max-w-sm">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch w-full max-w-xs sm:max-w-md mt-1"
            >
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-white text-sm px-4 py-2.5 border border-r-0 border-gray-200 outline-none placeholder-gray-400 font-medium text-gray-700 focus:border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-[#7CA900] hover:bg-[#668B00] text-white px-5 transition-colors flex items-center justify-center group"
              >
                <HiPaperAirplane className="size-5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>

            {/* Payment Systems */}
            <div className="mt-2 w-full flex flex-col items-center lg:items-start">
              <span className="block text-xs font-bold text-[#1F2E24] uppercase tracking-wider mb-2">
                We Accept
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center opacity-85">
                <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="PayPal" className="h-10 object-contain" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" className="h-10 object-contain" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Discover" className="h-10 object-contain" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="Mastercard" className="h-10 object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar Copyright */}
      <div className="w-full bg-[#0F1D14] py-4 text-gray-400 text-xs font-medium border-t border-emerald-950/20">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>All Rights Reserved @ Company 2025</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/" className="hover:text-white transition-colors">Claim</Link>
            <Link to="/" className="hover:text-white transition-colors">Privacy & Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;