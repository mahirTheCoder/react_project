import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowDropdown } from 'react-icons/io'
import { FiSearch, FiUser, FiMenu } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const Navbar = () => {
  const navItems = [
    { 
      navContenet: 'Home', 
      navLinks: '/', 
      dropDown: [
        { dropContenet: 'Home Style 1', dropLink: '/home-1' },
        { dropContenet: 'Home Style 2', dropLink: '/home-2' }
      ] 
    },
    { 
      navContenet: 'About', 
      navLinks: '/about',
      dropDown: [
        { dropContenet: 'About Us', dropLink: '/about-us' },
        { dropContenet: 'Our Team', dropLink: '/team' }
      ]
    },
    { 
      navContenet: 'Shop', 
      navLinks: '/shop',
      dropDown: [
        { dropContenet: 'Shop Grid', dropLink: '/shop-grid' },
        { dropContenet: 'Shop Details', dropLink: '/shop-details' },
        { dropContenet: 'Cart', dropLink: '/cart' }
      ]
    },
    { 
      navContenet: 'News', 
      navLinks: '/news',
      dropDown: [
        { dropContenet: 'News Grid', dropLink: '/news-grid' },
        { dropContenet: 'News Details', dropLink: '/news-details' }
      ]
    },
    { 
      navContenet: 'Pages', 
      navLinks: '/pages',
      dropDown: [
        { dropContenet: 'FAQ', dropLink: '/faq' },
        { dropContenet: 'Gallery', dropLink: '/gallery' },
        { dropContenet: '404 Page', dropLink: '/404' }
      ]
    },
    { 
      navContenet: 'Contact', 
      navLinks: '/contact',
      dropDown: [
        { dropContenet: 'Contact Style 1', dropLink: '/contact-1' },
        { dropContenet: 'Contact Style 2', dropLink: '/contact-2' }
      ]
    }
  ];

  return (
    <nav className="pt-5 w-full bg-[#F7F5EB]  border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container px-4 ">
        <div className="menu_row flex items-center justify-between py-5">
          
          {/* Logo */}
          <div className="logo_col flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold font-prim">B</div>
            <span className="font-prim font-bold text-2xl text-prim tracking-wide">Broccoli</span>
          </div>

          {/* Desktop Links */}
          <ul className="menu_items hidden lg:flex gap-9 font-prim font-semibold">
            {navItems.map((item, i) => (
              <li key={i} className="relative group flex items-center gap-1 py-2">
                <Link 
                  className={`text-lg font-normal font-prim duration-300 ${
                    item.navContenet === 'Home' ? 'text-brand' : 'text-prim group-hover:text-brand'
                  }`} 
                  to={item.navLinks}
                >
                  {item.navContenet}
                </Link>

                {item.dropDown ? (
                  <>
                    <IoIosArrowDropdown className={`text-sm duration-300 ${item.navContenet === 'Home' ? 'text-brand' : 'text-prim group-hover:text-brand group-hover:rotate-180'}`} />
                    
                    {/* Dropdown Box */}
                    <div className="w-52 p-4 rounded bg-white absolute top-11 left-0 shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500 z-50 border border-gray-50">
                      <ul className="flex flex-col gap-3">
                        {item.dropDown.map((dropItem, j) => (
                          <li key={j}>
                            <Link 
                              className="text-base text-prim hover:text-brand font-normal inline-block duration-200" 
                              to={dropItem.dropLink}
                            >
                              {dropItem.dropContenet}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="menu_button w-36 h-12 bg-brand rounded-full  font-prim font-bold text-white hover:bg-prim duration-500 uppercase tracking-wider text-sm">
              Read More
            </button>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 bg-bg-main flex items-center justify-center text-prim hover:bg-brand hover:text-white transition-all shadow-sm text-lg rounded-sm">
                <FiSearch />
              </button>
              <button className="w-10 h-10 bg-bg-main flex items-center justify-center text-prim hover:bg-brand hover:text-white transition-all shadow-sm text-lg rounded-sm">
                <FiUser />
              </button>
              <button className="w-10 h-10 bg-bg-main flex items-center justify-center text-prim hover:bg-brand hover:text-white transition-all shadow-sm text-lg rounded-sm">
                <HiOutlineShoppingBag />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center gap-3">
            <button className="w-9 h-9 bg-bg-main flex items-center justify-center text-prim text-base rounded-sm">
              <FiSearch />
            </button>
            <button className="w-9 h-9 bg-bg-main flex items-center justify-center text-prim text-base rounded-sm">
              <HiOutlineShoppingBag />
            </button>
            <button className="w-9 h-9 bg-brand flex items-center justify-center text-white text-lg rounded-sm hover:bg-prim transition-colors">
              <FiMenu />
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar