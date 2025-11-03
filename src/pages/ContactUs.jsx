import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope, FaHeadset, FaCircleQuestion } from 'react-icons/fa6'

const ContactUs = () => {
  const contactOptions = [
    {
      title: 'Locations',
      description: 'Office and factory locations across 4 countries',
      link: '/contact-us/locations',
      icon: FaLocationDot,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Customer Care',
      description: 'Support services and helplines for customer inquiries',
      link: '/contact-us/customer-care',
      icon: FaHeadset,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'FAQs',
      description: 'Answers to frequently asked questions',
      link: '/contact-us/faqs',
      icon: FaCircleQuestion,
      gradient: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Get in touch with CWAY Group - We're here to help
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <option.icon className="text-3xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <Link
                  to={option.link}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform"
                >
                  <span>Explore</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

