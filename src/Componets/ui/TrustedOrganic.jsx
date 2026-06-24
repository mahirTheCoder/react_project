import React from "react";
import organ from '../../assets/organ.png'

const TrustedOrganic = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 select-none">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Single Image Section (w-560px h-524px) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start w-full">
            <div className="w-full max-w-[560px] h-[320px] sm:h-[420px] lg:h-[524px] rounded-lg overflow-hidden shadow-md">
              <img
                src= {organ}
                alt="Trusted Organic Food Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Text & Content Section */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Subtitle */}
            <span className="text-[#7CA900] text-xs font-bold uppercase tracking-wider mb-3 block">
              Know More About Shop
            </span>

            {/* Main Heading */}
            <h2 className="font-prim font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1F2E24] leading-tight mb-6 max-w-md">
              Trusted Organic Food Store
            </h2>

            {/* Highlighted Blockquote Style text */}
            <div className="border-l-[3px] border-[#7CA900] pl-4 mb-6">
              <p className="text-[#1F2E24] text-sm md:text-base font-semibold leading-relaxed max-w-xl">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed 
                Do Eiusmod Tempor Incididunt Ut Labore
              </p>
            </div>

            {/* Paragraph Description */}
            <p className="text-[#556057] text-sm leading-relaxed mb-8 max-w-xl">
              Sellers Who Aspire To Be Good, Do Good, And Spread Goodness. We 
              Democratic, Self-Sustaining, Two-Sided Marketplace Which Thrives On 
              Trust And Is Built On Community And Quality Content.
            </p>

            {/* Director Signature & Profile info */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-4 w-full sm:w-auto">
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="font-bold text-base text-[#1F2E24]">
                    Jerry Henson
                  </h4>
                  <span className="font-serif italic text-[#7CA900] text-lg ml-1">
                    Mehedi
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-medium tracking-wide block mt-0.5">
                  / Shop Director
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedOrganic;