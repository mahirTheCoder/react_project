import React from "react";

const WhyChooseUs = () => {
  // Features card data list
  const features = [
    {
      id: 1,
      title: "All Kind Brand",
      desc: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore.",
      icon: (
        <svg className="size-12 text-[#7CA900] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 0 1 8.716 2.253M12 3a9.004 9.004 0 0 0-8.716 2.253m0 0A9.003 9.003 0 0 1 12 12c2.485 0 4.5 4.03 4.5 9" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Curated Products",
      desc: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore.",
      icon: (
        <svg className="size-12 text-[#7CA900] fill-current" viewBox="0 0 24 24">
          <path d="M12 3c-1.2 0-2.4.4-3.4 1.2L4.3 7.5C3.5 8.1 3 9 3 10v4c0 1 .5 1.9 1.3 2.5l4.3 3.3c1 .8 2.2 1.2 3.4 1.2s2.4-.4 3.4-1.2l4.3-3.3c.8-.6 1.3-1.5 1.3-2.5v-4c0-1-.5-1.9-1.3-2.5l-4.3-3.3C14.4 3.4 13.2 3 12 3z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Pesticide Free Goods",
      desc: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore.",
      icon: (
        <svg className="size-12 text-[#7CA900] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3M5.318 7.257l13.364 9.486m-13.364 0l13.364-9.486" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F2] py-16 md:py-24 select-none">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12 md:mb-16">
          <span className="text-[#7CA900] text-xs font-bold uppercase tracking-widest mb-2 block">
            // Features //
          </span>
          <h2 className="font-prim font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1F2E24] tracking-tight">
            Why Choose Us.
          </h2>
        </div>

        {/* Responsive Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 border border-gray-100/50 shadow-sm rounded-none flex flex-col items-start text-left transition-all duration-300 hover:shadow-md"
            >
              {/* Header Top: Icon and Title Inline */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-prim font-bold text-lg text-[#1F2E24] tracking-wide">
                  {item.title}
                </h4>
              </div>

              {/* Description Body */}
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;