import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa6'
import logo from '../images/cway-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Our Presence',
      links: [
        { name: 'Global Locations', path: '/contact-us/locations' },
        { name: 'About Us', path: '/about-us' }
      ]
    },
    {
      title: 'Useful Links',
      links: [
        { name: 'Customer Care', path: '/contact-us/customer-care' },
        { name: 'Careers', path: '/careers' },
        { name: 'FAQs', path: '/contact-us/faqs' },
        { name: 'Tell us', path: '/contact-us/customer-care' }
      ]
    },
    {
      title: 'Media',
      links: [
        { name: 'News', path: '/news' },
        { name: 'Press Release', path: '/news/press-release' },
        { name: 'A/V Library', path: '/news/av-library' },
        { name: 'Image Library', path: '/news/image-library' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6 group">
              <img src={logo} alt="CWAY" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              To consistently ensure the production and sales of safe, quality, premium brand products through cutting-edge technology and global manufacturing best practices.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-none flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-none flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-none flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-none flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaLocationDot className="text-gray-400 mt-1 flex-shrink-0 text-sm" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Plot 98/100, Oshodi – Apapa Expressway,<br />
                  Isolo, Lagos, 102214, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400 flex-shrink-0 text-sm" />
                <span className="text-gray-400 text-sm">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0 text-sm" />
                <span className="text-gray-400 text-sm">info@cwaygroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © CWAY Group {currentYear}. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact-us/faqs" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact-us/faqs" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
