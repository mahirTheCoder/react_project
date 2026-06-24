import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import bn1 from '../../../assets/bn1.png'
import bn2 from '../../../assets/bn2.png'
import bn3 from '../../../assets/bn3.png'
import bn4 from '../../../assets/bn4.png'

const TeamMember = () => {
  const team = [
    {
      id: 1,
      name: "Rosalina D. William",
      role: "Founder",
      image:bn1
    },
    {
      id: 2,
      name: "Rosalina D. William",
      role: "Founder",
      image: bn3
    },
    {
      id: 3,
      name: "Rosalina D. William",
      role: "Founder",
      image: bn2
    },
    {
      id: 4,
      name: "Rosalina D. William",
      role: "Founder",
      image:bn4
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 select-none">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-prim font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1F2E24] tracking-tight">
            Team Member
          </h2>
        </div>

        {/* Members Grid Container - lg:grid-cols-4 ensures 4 items in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {team.map((member) => (
            <div
              key={member.id}
              className="w-[270px] h-[410px] bg-white border border-gray-100/80 shadow-sm rounded-none flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md group"
            >
              {/* Card Image Area (w-full h-270px) */}
              <div className="w-full h-[270px] overflow-hidden flex-shrink-0 bg-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content Area (140px balance) */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                {/* Role / Designation */}
                <span className="text-[#7CA900] text-[11px] font-bold uppercase tracking-widest mb-1.5 block">
                  // {member.role} //
                </span>
                
                {/* Member Name */}
                <h4 className="font-prim font-bold text-base text-[#1F2E24] tracking-wide mb-4">
                  {member.name}
                </h4>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 text-gray-500">
                  <a
                    href="#"
                    className="hover:text-[#7CA900] transition-colors p-1"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="size-3.5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#7CA900] transition-colors p-1"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="size-3.5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#7CA900] transition-colors p-1"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamMember;