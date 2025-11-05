import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaCircleCheck } from 'react-icons/fa6'

const MissionVisionValues = () => {
  const useInViewHook = (ref) => {
    const [inView, setInView] = useState(false)
    useEffect(() => {
      if (!ref.current) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true)
        })
      }, { threshold: 0.4 })
      obs.observe(ref.current)
      return () => obs.disconnect()
    }, [])
    return inView
  }

  const CountUp = ({ to, duration = 1200, suffix = '' }) => {
    const ref = useRef(null)
    const inView = useInViewHook(ref)
    const [value, setValue] = useState(0)
    useEffect(() => {
      if (!inView) return
      let start = 0
      let startTs
      const animate = (ts) => {
        if (!startTs) startTs = ts
        const progress = Math.min((ts - startTs) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(start + (to - start) * eased)
        setValue(current)
        if (progress < 1) requestAnimationFrame(animate)
      }
      const id = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(id)
    }, [inView, to, duration])
    return <span ref={ref}>{value}{suffix}</span>
  }

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
      <motion.section 
        className="relative text-white py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Mission, Vision & Values
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Our guiding principles and commitment to excellence
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement (from official page) */}
      <motion.section 
        className="section-padding bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-flex p-6 bg-gray-900 rounded-none mb-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaBullseye className="text-5xl text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
              Our Mission
            </h2>
            <motion.div 
              className="bg-gray-50 rounded-none p-12 border border-gray-200"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
                Goal to enrich the lives of our consumers with safe value added top quality premium brand products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision */}
      <motion.section 
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex p-6 bg-gray-900 rounded-none mb-6"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <FaEye className="text-5xl text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
              Our Vision
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[ 'To become the most influential Food and Beverage Manufacturing group of companies in Africa and in the World.' ].map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaCircleCheck className="text-2xl text-white" />
                </motion.div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{vision}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="section-padding bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex p-6 bg-gray-900 rounded-none mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaHeart className="text-5xl text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
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
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center border border-gray-200 rounded-none group cursor-pointer"
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gray-900 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-3xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase group-hover:text-gray-800 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Company Commitment */}
      <motion.section 
        className="section-padding bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-6 font-display"
          >
            Company Commitment – Strives
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 p-6 bg-white group hover:border-gray-900 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">Brand Quality Assurance</h3>
              <p className="text-gray-700 group-hover:text-gray-800">We consistently ensure safe, quality, premium brand products using cutting-edge technology and global manufacturing best practices.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 p-6 bg-white group hover:border-gray-900 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">Customer Service Relations</h3>
              <p className="text-gray-700 group-hover:text-gray-800">We commit to excellent customer experience and sustained trade benefits.</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 border border-gray-200 p-6 bg-white group hover:border-gray-900 transition-colors"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">Commitment to Our Customers</h3>
            <p className="text-gray-700 group-hover:text-gray-800">CWAY business partnerships will be sustained with trade benefits and quality premium products for all categories of consumers yearly.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Commitment Section */}
      <motion.section 
        className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px] cursor-pointer"
              >
                <div className="text-4xl font-bold text-white mb-2"><CountUp to={24} suffix="+" /></div>
                <div className="text-gray-300">Years of Excellence</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px] cursor-pointer"
              >
                <div className="text-4xl font-bold text-white mb-2"><CountUp to={19} /></div>
                <div className="text-gray-300">Global Factories</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px] cursor-pointer"
              >
                <div className="text-4xl font-bold text-white mb-2"><CountUp to={15} suffix="+" /></div>
                <div className="text-gray-300">Product Categories</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default MissionVisionValues

