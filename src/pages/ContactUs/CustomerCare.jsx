import React from 'react'
import { motion } from 'framer-motion'
import { FaHeadset, FaPhone, FaEnvelope } from 'react-icons/fa6'

const CustomerCare = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaHeadset className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Customer Care</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Dedicated support for all your inquiries and assistance needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <FaPhone className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <p className="text-primary-600 font-semibold text-lg">+234 (0) 123 456 7890</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <FaEnvelope className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email</p>
              <p className="text-primary-600 font-semibold text-lg">info@cwaygroup.com</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerCare

