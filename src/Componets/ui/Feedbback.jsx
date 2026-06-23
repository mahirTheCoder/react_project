import React from "react";

const Feedbback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Researge Withcon",
      role: "Founder",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Researge Withcon",
      role: "Founder",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Researge Withcon",
      role: "Founder",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Researge Withcon",
      role: "Founder",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
    },
  ];

  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <div className="w-full select-none overflow-x-hidden">
      
      {/* Top Background Area */}
      <div className="w-full h-32 md:h-48 bg-white" />

      {/* Main Section */}
      <section className="w-full bg-[#FDFBF7] relative pb-20">
        
        {/* Video Container */}
        <div className="container mx-auto px-4 max-w-4xl relative -top-24 md:-top-36 z-20">
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-lg border border-gray-100 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zFmeeMZioio"
              title="Hand Watering a Small Plant Close Up"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 px-4 -mt-12 md:-mt-20">
          <span className="text-brand font-prim font-semibold text-xs uppercase tracking-widest block mb-2">
            // Testimonials
          </span>
          <h2 className="font-prim font-bold text-3xl md:text-4xl tracking-wide text-[#1F2E24]">
            Clients Feedbacks.
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="w-full overflow-hidden relative flex">
          {/* Side Gradients */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Scrolling Track */}
          <div className="flex gap-4 sm:gap-6 animate-infinite-scroll whitespace-nowrap py-4 px-2">
            {duplicatedFeedbacks.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex w-72 sm:w-104 bg-white border border-gray-100 p-4 sm:p-5 rounded-sm shadow-sm gap-3 sm:gap-4 items-center whitespace-normal flex-shrink-0"
              >
                {/* Client Avatar */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 rounded-sm overflow-hidden bg-gray-50">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Feedback Content */}
                <div className="flex flex-col justify-between relative h-full w-full min-w-0">
                  <p className="text-gray-500 text-[11px] sm:text-[13px] leading-relaxed mb-2 sm:mb-3 font-prim font-medium line-clamp-3 sm:line-clamp-none">
                    {item.comment}
                  </p>

                  <div className="truncate">
                    <h4 className="font-prim font-bold text-xs sm:text-sm tracking-wide text-[#1F2E24] truncate">
                      {item.name}
                    </h4>
                    <span className="text-brand text-[10px] sm:text-[11px] font-bold font-prim uppercase tracking-wider block">
                      {item.role}
                    </span>
                  </div>

                  {/* Decorative Icon */}
                  <div className="absolute bottom-0 right-0 text-gray-100 opacity-30 pointer-events-none hidden sm:block">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Feedbback;