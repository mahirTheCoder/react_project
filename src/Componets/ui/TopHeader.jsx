import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

function TopHeader() {
  return (
    <div className="w-full bg-bg-main border-b border-gray-200 py-3 font-sec text-xs text-prim hidden md:block">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-brand text-sm" />
            <span className='text-prim'>15/A, Nest Tower, NYC</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMailOutline className="text-brand text-sm" />
            <span>Info@Webmail.Com</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors">
            <span>English</span>
            <FiChevronDown className="text-brand" />
          </div>
          <div className="flex items-center gap-4 text-sm text-bold">
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