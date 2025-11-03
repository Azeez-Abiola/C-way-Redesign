import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaDroplet, FaGlassWater, FaCookie, FaArrowRight } from 'react-icons/fa6'

const Brands = () => {
  const categories = [
    {
      title: 'Water',
      description: 'Premium water products including CWAY Water, CWAY Prime Water, and innovative dispenser machines',
      link: '/brands/water',
      icon: FaDroplet,
      gradient: 'from-blue-500 to-cyan-500',
      count: '3 Products'
    },
    {
      title: 'Beverages',
      description: 'Diverse beverage portfolio including Nutri Milk, Nutri Yo, BOXI Energy Drink, and 14+ innovative products',
      link: '/brands/beverages',
      icon: FaGlassWater,
      gradient: 'from-purple-500 to-pink-500',
      count: '14+ Products'
    },
    {
      title: 'Snacks',
      description: 'Delicious snack options under the Wellcome brand, perfect for on-the-go consumption',
      link: '/brands/snacks',
      icon: FaCookie,
      gradient: 'from-orange-500 to-yellow-500',
      count: 'Wellcome Brand'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-display"
          >
            Our Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
          >
            Premium products designed to meet your health needs and lifestyle
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <category.icon className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3 relative z-10">{category.title}</h2>
                <p className="text-primary-600 font-semibold mb-4 relative z-10">{category.count}</p>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{category.description}</p>
                <Link
                  to={category.link}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform relative z-10"
                >
                  <span>Explore Products</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brands

