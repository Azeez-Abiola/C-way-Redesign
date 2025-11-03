import React from 'react'
import { motion } from 'framer-motion'
import { FaCookie } from 'react-icons/fa6'

const Snacks = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/src/images/snacks1.jpg" alt="Snacks" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-none mb-8">
              <FaCookie className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Snacks</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Delicious snack options perfect for on-the-go consumption
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wellcome Brand */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Wellcome Brand</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Wellcome snacks is a first of its kind 3-layered chips crafted using advanced Japanese technology.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Product Offering</h3>
                <p className="text-gray-700">Single Crunch, Triple Delight</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Target Market</h3>
                <p className="text-gray-700">Primary: Young Adults (16–25). Secondary: All chip consumers.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Variants</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Spicy Chicken</li>
                  <li>Chocolate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">SKU</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>60g</li>
                  <li>30g</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consumer Benefits</h4>
                <p className="text-gray-700">Nutritious, crunchy satisfaction, triples your delight at every single crunch.</p>
              </div>
            </div>
              <div className="space-y-4">
                {[
                  'Quality snack products',
                  'Perfect for on-the-go consumption',
                  'Part of CWAY\'s diversified portfolio',
                  'Various snack options available'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="border border-gray-200 overflow-hidden">
                <img src="/src/images/snacks1.jpg" alt="Wellcome Snacks" className="w-full h-[420px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Snacks

