import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

function TopHeader() {
  return (
    // Uses overflow-x-auto to keep everything in one line on small screens
    <div className="w-full bg-[#F7F5EB] border-b border-gray-200 py-2.5 font-sec text-[11px] sm:text-xs text-prim overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center min-w-[max-content] gap-6">
        
        {/* Left side info (One line) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <IoLocationOutline className="text-brand text-sm shrink-0" />
            <span className="whitespace-nowrap">15/A, Nest Tower, NYC</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <IoMailOutline className="text-brand text-sm shrink-0" />
            <span className="lowercase whitespace-nowrap">info@webmail.com</span>
          </div>
        </div>
        
        {/* Right side controls (One line) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors whitespace-nowrap select-none">
            <span>English</span>
            <FiChevronDown className="text-brand shrink-0" />
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-3.5 sm:gap-4 text-sm font-bold shrink-0">
            <a href="#" className="hover:text-brand transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-brand transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-brand transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-brand transition-colors"><FaGlobe /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TopHeader;