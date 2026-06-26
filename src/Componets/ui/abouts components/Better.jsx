import React, { useState } from "react";

const Better = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // সাবস্ক্রিপশন লজিক এখানে হবে
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <section 
      className="w-full h-[400px] sm:h-[450px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-photo/many-fruits-vegetables-falling-into-260nw-2336472537.jpg')`
      }}
    >
      {/* Dark Overlay (ইমেজের ওপর কালো আবরণের জন্য যেন লেখা স্পষ্ট দেখা যায়) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Container */}
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-20 flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="font-prim font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide mb-4">
          We Make Your Inbox Better
        </h2>

        {/* Short Description Description */}
        <p className="text-gray-200/90 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mb-8 whitespace-normal sm:whitespace-pre-line">
          Sign Up To Our Newsletter To Receive Grooming Tips, Style Inspiration,{"\n"}
          Exclusive Access To Pre-Launch Product Pricing And More.
        </p>

        {/* Subscription Input Form */}
        <form 
          onSubmit={handleSubscribe}
          className="w-full max-w-[680px] flex flex-col sm:flex-row items-stretch rounded-none overflow-hidden shadow-lg gap-3 sm:gap-0"
        >
          {/* Input Field */}
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white px-5 py-4 text-sm text-[#1F2E24] placeholder-gray-400 focus:outline-none rounded-none w-full"
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-[#7CA900] hover:bg-[#688c02] text-white font-prim font-bold text-xs uppercase tracking-wider px-8 py-4 transition-colors duration-300 rounded-none whitespace-nowrap min-w-[140px]"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default Better;