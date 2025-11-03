import React from 'react'
import { motion } from 'framer-motion'
import { FaDroplet, FaGlassWater, FaCircleCheck } from 'react-icons/fa6'

const Water = () => {
  const products = [
    {
      id: 'dispensers',
      name: 'Dispenser Machines',
      description: 'Innovative water dispensers designed for both home and office use',
      features: [
        'Various models to meet diverse customer needs',
        'Technology-enabled with modern features',
        'Accessories for healthy water drinking habits',
        'Easy to use and maintain'
      ],
      icon: FaGlassWater,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cway-water',
      name: 'CWAY Water',
      description: 'Flagship bottled water product - clean, hygienic, and pure',
      features: [
        'High-quality purification process',
        'Available in various sizes',
        'Hygienic packaging',
        'Health-focused product positioning'
      ],
      icon: FaDroplet,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'prime-water',
      name: 'CWAY Prime Water',
      description: 'Premium bottled water product line for discerning consumers',
      features: [
        'Enhanced quality and premium positioning',
        'Higher-tier offering in water portfolio',
        'Superior taste and purity',
        'Premium packaging'
      ],
      icon: FaDroplet,
      gradient: 'from-cyan-500 to-teal-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/src/images/water-capacity1.jpg" alt="Water" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaDroplet className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Water Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              CWAY Water is the flagship of CWAY Group operations in Nigeria and leads the industry since 2000. 
              We provide clean hygienic water and innovative dispensers with accessories and technology that support healthy water drinking habits for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-24 h-24 bg-gradient-to-br ${product.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-xl`}>
                    <product.icon className="text-5xl text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">{product.name}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{product.description}</p>
                  <div className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaCircleCheck className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="rounded-3xl overflow-hidden border border-gray-200">
                    <img src={index === 0 ? '/src/images/water-capcity2.jpg' : '/src/images/water-capacity1.jpg'} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CWAY Water */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Our Range of Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              18.9L refillable dispenser water (Regular and Prime), 75cl and 1.5L table water (including Prime), and rugged, durable, aesthetic dispenser machines.
            </p>
          </motion.div>
          <ul className="max-w-3xl mx-auto list-disc pl-6 text-gray-700">
            <li>18.9L refillable dispenser water brands (Regular & Prime)</li>
            <li>75cl and 1.5L table water brands, and 75cl Prime</li>
            <li>Bespoke dispenser machines – rugged, durable and aesthetic</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Water

