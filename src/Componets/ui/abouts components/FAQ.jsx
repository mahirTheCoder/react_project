import React, { useState } from "react";

const FAQ = () => {
  // কোন অ্যাকোর্ডিয়নটি ওপেন থাকবে তার স্টেট (ডিফল্টভাবে প্রথমটি ওপেন থাকবে, অর্থাৎ index: 0)
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "How To Buy A Product?",
      answer: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore Et Dolore Magna Aliqua. Scelerisque Eleifend Donec Pretium Vulputate Sapien Nec Sagittis. Proin Libero Nunc Consequat Interdum. Condimentum Lacinia Quis.",
    },
    {
      id: 2,
      question: "How Can I Make Refund From Your Website?",
      answer: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore Et Dolore Magna Aliqua. Scelerisque Eleifend Donec Pretium Vulputate Sapien Nec Sagittis.",
    },
    {
      id: 3,
      question: "I Am A New User. How Should I Start?",
      answer: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore Et Dolore Magna Aliqua. Scelerisque Eleifend Donec Pretium Vulputate Sapien Nec Sagittis.",
    },
    {
      id: 4,
      question: "Returns And Refunds",
      answer: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore Et Dolore Magna Aliqua. Scelerisque Eleifend Donec Pretium Vulputate Sapien Nec Sagittis.",
    },
    {
      id: 5,
      question: "Are My Details Secured?",
      answer: "Lorem Ipsum Dolor Sit Ame It, Consectetur Adipiscing Elit, Sed Do Eiusmod Te Mp Or Incididunt Ut Labore Et Dolore Magna Aliqua. Scelerisque Eleifend Donec Pretium Vulputate Sapien Nec Sagittis.",
    },
  ];

  const toggleFAQ = (index) => {
    // যদি অলরেডি ওপেন থাকা আইটেমে আবার ক্লিক করা হয় তবে ক্লোজ হবে, অন্যথায় নতুনটি ওপেন হবে
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 select-none">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-prim font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1F2E24] tracking-tight">
            Some Questions
          </h2>
        </div>

        {/* Layout Grid: Left FAQ, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Accordion Area */}
          <div className="lg:col-span-6 w-full flex flex-col gap-0 border-b border-gray-100">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="w-full border-t border-gray-100 bg-white overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header Trigger */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 flex items-center justify-between text-left gap-4 group focus:outline-none"
                  >
                    <span className="font-prim font-bold text-sm sm:text-base text-[#1F2E24] tracking-wide transition-colors group-hover:text-[#7CA900]">
                      {faq.question}
                    </span>
                    
                    {/* Plus / Minus Icon Container */}
                    <div className="size-6 rounded-none bg-[#FAF8F2] flex items-center justify-center text-[#7CA900] font-bold text-sm flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {/* Accordion Body Content (Smooth height transition) */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Single Image Area */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[500px] lg:max-w-[540px] h-auto rounded-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800" // ডামি ভেজিটেবল বাস্কেট ইমেজ, এখানে আপনার মেইন ইমেজ বসিয়ে নিবেন
                alt="Fresh Organic Vegetables Basket"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;