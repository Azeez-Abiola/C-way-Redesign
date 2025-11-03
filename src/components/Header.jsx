import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaBars, 
  FaXmark,
  FaChevronDown
} from 'react-icons/fa6'
import logo from '../images/cway-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubDropdown, setOpenSubDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [location])

  const navigation = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About Us',
      path: '/about-us',
      submenu: [
        { name: 'Who we are', path: '/about-us/who-we-are' },
        { name: 'Mission, Vision and Values', path: '/about-us/mission-vision-values' }
      ]
    },
    {
      name: 'Brands',
      path: '/brands',
      submenu: [
        {
          name: 'Water',
          path: '/brands/water',
          submenu: [
            { name: 'Dispenser Machines', path: '/brands/water/dispensers' },
            { name: 'CWAY Water', path: '/brands/water/cway-water' },
            { name: 'CWAY Prime Water', path: '/brands/water/prime-water' }
          ]
        },
        {
          name: 'Beverages',
          path: '/brands/beverages'
        },
        {
          name: 'Snacks',
          path: '/brands/snacks'
        }
      ]
    },
    {
      name: 'Affiliates',
      path: '/affiliates',
      submenu: [
        { name: 'Packaging Solutions', path: '/packaging-solutions' },
        { name: 'Dairy', path: '/dairy' }
      ]
    },
    {
      name: 'CSR',
      path: '/csr'
    },
    {
      name: 'Careers',
      path: '/careers',
      submenu: [
        { name: 'Working at CWAY', path: '/careers/working-at-cway' }
      ]
    },
    {
      name: 'News',
      path: '/news',
      submenu: [
        { name: 'Press Release', path: '/news/press-release' },
        { name: 'Latest News', path: '/news/latest-news' },
        { name: 'Image Library', path: '/news/image-library' },
        { name: 'AV Library', path: '/news/av-library' }
      ]
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
      submenu: [
        { name: 'Locations', path: '/contact-us/locations' },
        { name: 'Customer Care', path: '/contact-us/customer-care' },
        { name: 'FAQs', path: '/contact-us/faqs' }
      ]
    }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="CWAY" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="px-0 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm uppercase tracking-wide flex items-center gap-2 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all">
                      <span>{item.name}</span>
                      <FaChevronDown className="text-xs" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-none shadow-lg border border-gray-200 py-3"
                        >
                          {item.submenu.map((subItem) => (
                            <div
                              key={subItem.name}
                              className="relative group/sub"
                              onMouseEnter={() => setOpenSubDropdown(subItem.name)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              <Link
                                to={subItem.path}
                                className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
                              >
                                {subItem.name}
                              </Link>
                              {subItem.submenu && (
                                <AnimatePresence>
                                  {openSubDropdown === subItem.name && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 8 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 8 }}
                                      className="absolute top-0 left-full ml-2 w-80 bg-white rounded-none shadow-lg border border-gray-200 py-3"
                                    >
                                      {subItem.submenu.map((leaf) => (
                                        <Link
                                          key={leaf.path}
                                          to={leaf.path}
                                          className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
                                        >
                                          {leaf.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-0 py-2 font-medium transition-colors text-sm uppercase tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray-900 after:transition-all ${
                      location.pathname === item.path
                        ? 'text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-900'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg uppercase text-sm tracking-wide"
                      >
                        <span className="font-medium">{item.name}</span>
                        <FaChevronDown
                          className={`transform transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 rounded-lg font-medium uppercase text-sm tracking-wide ${
                        location.pathname === item.path
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
