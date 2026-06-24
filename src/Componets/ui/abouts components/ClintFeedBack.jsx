import React from "react";
import bn1 from "../../../assets/bn1.png";
import bn2 from "../../../assets/bn2.png";
import bn3 from "../../../assets/bn3.png";
import bn4 from "../../../assets/bn4.png";

const ClintFeedBack = () => {
  const feedbacks = [
    { id: 1, name: "Researge Withcon", role: "Founder", img: bn1 },
    { id: 2, name: "Researge Withcon", role: "Founder", img: bn2 },
    { id: 3, name: "Researge Withcon", role: "Founder", img: bn3 },
    { id: 4, name: "Researge Withcon", role: "Founder", img: bn4 },
  ];

  const doubleFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <section className="w-full bg-[#FAF8F2] py-16 md:py-24 overflow-hidden select-none">
      
      {/* Section Title */}
      <div className="text-center flex flex-col items-center mb-12 md:mb-16 px-4">
        <span className="text-[#7CA900] text-xs font-bold uppercase tracking-widest mb-2 block">
          // Testimonials //
        </span>
        <h2 className="font-prim font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1F2E24] tracking-tight">
          Clients Feedbacks.
        </h2>
      </div>

      {/* Infinite Slider Outer Wrapper */}
      <div className="w-full relative flex overflow-x-hidden">
        
        {/* Infinite Scroll Track */}
        <div className="custom-marquee py-6 px-3">
          {doubleFeedbacks.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              tabIndex="0" // এর ফলে কার্ডে ক্লিক বা টাচ করলে ফোকাসড থাকবে এবং থিমে যাবে
              className="marquee-card w-[420px] sm:w-[460px] h-[190px] bg-white p-6 rounded-none flex items-center gap-5 flex-shrink-0 shadow-sm border border-gray-100/40 relative cursor-pointer"
            >
              {/* Client Left Image */}
              <div className="size-[110px] rounded-none overflow-hidden flex-shrink-0 bg-gray-50">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Feedback Text & Details Area */}
              <div className="flex-1 flex flex-col justify-between h-full whitespace-normal">
                {/* Review Paragraph */}
                <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed mt-1 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Info and Chat Bubble Icon Row */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <h4 className="font-prim font-bold text-sm sm:text-base text-[#1F2E24] tracking-wide">
                      {client.name}
                    </h4>
                    <span className="text-[#7CA900] text-xs font-semibold block mt-0.5">
                      {client.role}
                    </span>
                  </div>

                  {/* SVG Chat Bubble Icon */}
                  <div className="text-[#FAF8F2] flex-shrink-0">
                    <svg className="size-10 fill-current text-gray-100/80" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClintFeedBack;