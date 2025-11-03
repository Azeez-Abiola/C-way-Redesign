import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaCircleCheck } from 'react-icons/fa6'

const MissionVisionValues = () => {
  const values = [
    {
      icon: FaCircleCheck,
      title: 'Quality Commitment',
      description: 'Dedication to producing safe, quality, premium brand products',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaBullseye,
      title: 'Innovation',
      description: 'Utilizing cutting-edge technology in all operations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaHeart,
      title: 'Customer Satisfaction',
      description: 'Ensuring products meet customer health needs and provide rewarding value',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaEye,
      title: 'Best Practices',
      description: 'Applying global manufacturing standards across all facilities',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const heroImages = [
    '/images/cway-reception.jpg',
    '/images/cway-headquarters.jpg',
    '/images/Headquarters1.jpg'
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActiveIdx((p) => (p + 1) % heroImages.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Slider */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Mission hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${activeIdx === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Mission, Vision & Values
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Our guiding principles and commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement (from official page) */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex p-6 bg-gray-900 rounded-none mb-8">
              <FaBullseye className="text-5xl text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
              Our Mission
            </h2>
            <div className="bg-gray-50 rounded-none p-12 border border-gray-200">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
                Goal to enrich the lives of our consumers with safe value added top quality premium brand products.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-6 bg-gray-900 rounded-none mb-6">
              <FaEye className="text-5xl text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
              Our Vision
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 'To become the most influential Food and Beverage Manufacturing group of companies in Africa and in the World.' ].map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mb-4">
                  <FaCircleCheck className="text-2xl text-white" />
                </div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">{vision}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <div className="inline-flex p-6 bg-gray-900 rounded-none mb-6">
              <FaHeart className="text-5xl text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: FaCircleCheck, title: 'Integrity', description: 'We uphold the highest ethical standards.' },
              { icon: FaCircleCheck, title: 'Teamwork', description: 'We collaborate to deliver excellence.' },
              { icon: FaCircleCheck, title: 'Customer First', description: 'We prioritize our customers in every decision.' },
              { icon: FaCircleCheck, title: 'Innovation', description: 'We continuously improve with cutting-edge solutions.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center border border-gray-200 rounded-none"
              >
                <div className="w-20 h-20 bg-gray-900 flex items-center justify-center mx-auto mb-6">
                  <FaCircleCheck className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Commitment */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Company Commitment – Strives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Quality Assurance</h3>
              <p className="text-gray-700">We consistently ensure safe, quality, premium brand products using cutting-edge technology and global manufacturing best practices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service Relations</h3>
              <p className="text-gray-700">We commit to excellent customer experience and sustained trade benefits.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Commitment to Our Customers</h3>
            <p className="text-gray-700">CWAY business partnerships will be sustained with trade benefits and quality premium products for all categories of consumers yearly.</p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
              Our Commitment to You
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8">
              We are committed to maintaining the highest standards of quality, innovation, and 
              customer satisfaction. Our values drive us to continuously improve and deliver 
              products that make a positive difference in people's lives.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary-400 mb-2">24+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary-400 mb-2">19</div>
                <div className="text-gray-300">Global Factories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">Product Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MissionVisionValues

