import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaDroplet, 
  FaGlassWater, 
  FaCookie,
  FaArrowRight,
  FaIndustry,
  FaGlobe,
  FaAward,
  FaCircleCheck
} from 'react-icons/fa6'

const Home = () => {
  const stats = [
    { icon: FaIndustry, number: '19', label: 'Factories Globally' },
    { icon: FaGlobe, number: '4', label: 'Countries' },
    { icon: FaAward, number: '2000', label: 'Established Year' },
    { icon: FaDroplet, number: '17', label: 'Factories in Nigeria' }
  ]

  const features = [
    {
      icon: FaDroplet,
      title: 'CWAY Water',
      description: 'Industry leader since 2000. Providing clean, hygienic water and innovative water dispensers.',
      link: '/brands/water',
      image: '/images/cway-water-image to use1.png'
    },
    {
      icon: FaGlassWater,
      title: 'CWAY Food & Beverages',
      description: 'Since 2004, offering premium beverages including fruit milk, yogurt drinks, energy drinks, and more.',
      link: '/brands/beverages',
      image: '/images/beverages2.jpg'
    },
    {
      icon: FaCookie,
      title: 'Snacks & More',
      description: 'Diversified product portfolio including snacks under the Wellcome brand.',
      link: '/brands/snacks',
      image: '/images/snacks1.jpg'
    }
  ]

  const heroImages = [
    '/images/cway-building.jpg',
    '/images/cway-headquarters.jpg',
    '/images/Headquarters1.jpg',
    '/images/cway-team.jpg',
    '/images/truck.jpg'
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  const useInView = (ref) => {
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

  const CountUp = ({ to, duration = 1200 }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
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
    return <span ref={ref}>{value}</span>
  }

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section with Background Slider */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Images with Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {heroImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="CWAY hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
                activeIdx === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white font-display tracking-tight">
              CWAY Group
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Premium Water, Beverages & Snacks<br />
              <span className="text-xl md:text-2xl">Leading the Industry Since 2000</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/brands"
                className="bg-white text-gray-900 px-10 py-4 rounded-none font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 uppercase tracking-wide"
              >
                <span>Explore Our Products</span>
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/about-us"
                className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-none font-semibold text-base hover:bg-white/10 transition-all duration-300 uppercase tracking-wide"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section - Clean and Minimal */}
      <motion.section 
        className="py-24 bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="text-3xl text-gray-400 mb-4 mx-auto" />
                <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 font-display">
                  <CountUp to={parseInt(String(stat.number).replace(/\D/g, ''))} />{String(stat.number).match(/\D\+?$/)?.[0] || ''}
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Features Section with Real Images */}
      <motion.section 
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              Our Core Divisions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Providing quality products that meet customer health needs across water, beverages, and snacks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className={`relative h-64 overflow-hidden bg-white flex items-center justify-center ${index === 0 ? 'p-4' : ''}`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className={`${index === 0 ? 'w-full h-full object-contain' : 'w-full h-full object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                  {index !== 0 && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>}
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <feature.icon className="text-2xl text-gray-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 font-display">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:underline group-hover:translate-x-1 transition-transform uppercase text-sm tracking-wide"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Global Presence Section - Clean Layout */}
      <motion.section 
        className="py-24 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
                Global Presence
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CWAY has invested in a total of 19 factories in Nigeria, China, Egypt and India, 
                of which 17 are located across Nigeria. Our global footprint ensures quality 
                products reach consumers worldwide.
              </p>
              <div className="space-y-4 mb-8">
                {['Nigeria: 17 factories', 'China: 1 factory', 'India: 1 factory', 'Egypt: 1 factory'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCircleCheck className="text-gray-900 flex-shrink-0 text-sm" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact-us/locations"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-none font-semibold hover:bg-gray-800 transition-colors uppercase text-sm tracking-wide"
              >
                <span>View Locations</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white border border-gray-200 p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center border-r border-gray-200 pr-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2 font-display"><CountUp to={19} /></div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Total Factories</div>
                  </div>
                  <div className="text-center pl-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2 font-display"><CountUp to={4} /></div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Countries</div>
                  </div>
                  <div className="text-center border-r border-t border-gray-200 pr-8 pt-8 mt-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2 font-display"><CountUp to={24} />+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center border-t border-gray-200 pl-8 pt-8 mt-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2 font-display"><CountUp to={15} />+</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">Product Categories</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Commitment Section - Professional */}
      <motion.section 
        className="py-24 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-display tracking-tight">
              Company Commitment
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 mb-12 italic">
                "To consistently ensure the production and sales of safe, quality, premium brand products 
                through the utilization of our cutting-edge technology and global manufacturing best practices."
              </p>
              <div className="flex justify-center space-x-6 pt-8">
                <Link 
                  to="/about-us/mission-vision-values" 
                  className="bg-white text-gray-900 px-8 py-3 rounded-none font-semibold hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide"
                >
                  Our Mission
                </Link>
                <Link 
                  to="/csr" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-none font-semibold hover:bg-white/10 transition-colors uppercase text-sm tracking-wide"
                >
                  Our CSR Initiatives
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
