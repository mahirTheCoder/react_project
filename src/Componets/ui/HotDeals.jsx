import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import honeyImg from '../../assets/honeyImg.png' // আপনার ইমেজের পাথ অনুযায়ী চেঞ্জ করে নিবেন

const HotDeals = () => {
  // Live Countdown State (Target: 10 days from now for example)
  const [timeLeft, setTimeLeft] = useState({ days: '10', hrs: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10); // 10 days countdown

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(timer);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : d.toString(),
          hrs: h < 10 ? `0${h}` : h.toString(),
          mins: m < 10 ? `0${m}` : m.toString(),
          secs: s < 10 ? `0${s}` : s.toString()
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 bg-[#FDFBF7] select-none">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left Side: Product Image (w-548px h-508px -> w-137 h-127) */}
        <div className="w-full max-w-137 lg:w-137 lg:h-127 flex items-center justify-center">
          <img 
            src={honeyImg} 
            alt="Original Stock Honey" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side: Content & Countdown */}
        <div className="flex flex-col items-start max-w-125">
          
          <span className="text-brand font-prim font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            Todays Hot Deals
          </span>
          
          <h2 className="font-prim font-bold text-prim text-3xl sm:text-4xl lg:text-5xl tracking-wide leading-[1.15] mb-8">
            Original Stock Honey <br /> Combo Package
          </h2>

          {/* Countdown Timer Circles */}
          <div className="flex items-center gap-4 sm:gap-6 mb-10">
            {/* Days */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm font-prim font-bold text-prim text-base sm:text-lg">
                {timeLeft.days}
              </div>
              <span className="font-prim font-semibold text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm font-prim font-bold text-prim text-base sm:text-lg">
                {timeLeft.hrs}
              </div>
              <span className="font-prim font-semibold text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Hrs</span>
            </div>

            {/* Mins */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm font-prim font-bold text-prim text-base sm:text-lg">
                {timeLeft.mins}
              </div>
              <span className="font-prim font-semibold text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Mins</span>
            </div>

            {/* Secs */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm font-prim font-bold text-prim text-base sm:text-lg">
                {timeLeft.secs}
              </div>
              <span className="font-prim font-semibold text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase">Secs</span>
            </div>
          </div>

          {/* Shop Now Button Link */}
          <Link 
            to="/" 
            className="bg-brand text-white font-prim font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-sm hover:bg-prim duration-300 shadow-sm"
          >
            Shop Now
          </Link>

        </div>

      </div>
    </section>
  )
}

export default HotDeals