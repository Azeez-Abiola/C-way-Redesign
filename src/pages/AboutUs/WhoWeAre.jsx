import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaDroplet, 
  FaIndustry, 
  FaGlobe, 
  FaAward,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa6'

const WhoWeAre = () => {
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

  const milestones = [
    {
      year: '2000',
      title: 'CWAY Water Established',
      description: 'Flagship division launched, focusing on clean, hygienic water and innovative dispensers'
    },
    {
      year: '2004',
      title: 'CWAY Food & Beverages Founded',
      description: 'Expanded into beverages with initial brand: Peach Fruit Drink'
    },
    {
      year: '2007',
      title: 'Transformation Drive',
      description: 'Major R&D and production transformation, launching innovative beverage categories'
    },
    {
      year: 'Today',
      title: 'Global Presence',
      description: '19 factories across 4 countries, leading industry with diverse product portfolio'
    }
  ]

  const coreAreas = [
    {
      icon: FaDroplet,
      title: 'Water Production',
      description: 'Industry-leading water purification and distribution',
      color: ''
    },
    {
      icon: FaIndustry,
      title: 'Beverage Manufacturing',
      description: 'Innovative beverages meeting customer health needs',
      color: ''
    },
    {
      icon: FaLightbulb,
      title: 'Innovation & Technology',
      description: 'Cutting-edge technology in all operations',
      color: ''
    },
    {
      icon: FaGlobe,
      title: 'Global Operations',
      description: 'Worldwide manufacturing and distribution network',
      color: ''
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative text-white py-32 overflow-hidden">
        <img src="/images/cway-reception.jpg" alt="CWAY Reception" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Who We Are</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              A multinational company specializing in premium water, beverages, and snacks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Operational Footprint */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="border border-gray-200 overflow-hidden">
                <img src="/images/cway-industry.jpg" alt="Industrial Operations" className="w-full h-[420px] object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Operational Footprint</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">We operate a broad network of facilities and distribution channels, enabling consistent quality across regions and categories.</p>
                <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <li className="border border-gray-200 px-4 py-3">19 factories across 4 countries</li>
                  <li className="border border-gray-200 px-4 py-3">Largest 18.9L refill water operations in Nigeria</li>
                  <li className="border border-gray-200 px-4 py-3">Advanced yogurt and beverage production lines</li>
                  <li className="border border-gray-200 px-4 py-3">Customer service and hygiene programs (DCDE)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Profile with Imagery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Company's Profile</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">CWAY as a company was founded by Mr. Onest Che in Nigeria in 1999. The founder, whom at the initial period of his investment in Nigeria had no prior experience of Nigeria or much of Africa, was driven by a passion to bring about improved social welfare schemes and people empowerment via technology towards improving lifestyles in developing countries.</p>
                <p className="text-lg text-gray-700 mb-0 leading-relaxed">Therefore, for these reasons he sacrificed his comfort and time and ventured to Nigeria where he committed his limited resources alongside his strong ambition, hard work and human resource management skills to start up a small commercial business model which fortunately, over time, successfully grew into a multinational investment today.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 overflow-hidden">
                <img src="/images/about1.jpg" alt="About CWAY 1" className="w-full h-[360px] object-cover" />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 border border-gray-200 overflow-hidden">
                <img src="/images/about2.jpg" alt="About CWAY 2" className="w-full h-[360px] object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Who we are</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">The human resource of CWAY is recognized as a vital asset in attaining the set objectives of the company and therefore attracts talents all over the world. CWAY’s staff orientation culture emphasizes global manufacturing best practices, progressive remunerations to career growth along indices of performance, innovations, skill acquisitions and above all, staff safety is considered First Priority in all company’s work spaces.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Infrastructural investments</h3>
                <p className="text-lg text-gray-700 leading-relaxed">Company’s global investments now totaling 19 factories. Egypt and India; of which 17 are located across Nigeria with top quality brand offerings to consumers essentially supported with manufacturing best practices and excellent customer service delivery networks spanning three brand categories (Drinking Water and Beverages, Snacks, & Animal Husbandry).</p>
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Milestones – Commitment strives</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">Company’s major commitment is focused on ensuring the manufacturing of safe and premium quality products, through consistent innovations and acquisition of modern hi‑tech infrastructural facilities. In 2014, CWAY acquired (via purchase rights) an industrial park in Isolo, Lagos State, Nigeria; a former property of Siemens Nigeria. In 2015, Sagamu, Ogun State industrial park was procured and construction commenced with required approvals. In April 2021, CWAY Foods and Beverages modern hi‑tech Yogurt Production Plant was completed and commissioned in line with international food safety policy and global manufacturing best practices.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Company Compliance</h3>
                <p className="text-lg text-gray-700 leading-relaxed">Our desire is becoming a global premium brand; global regulatory standards are key reference guides in our productions, consistent innovations and craftsmanship skills—adopting cutting‑edge technologies, high‑quality food‑grade stainless production equipment, stringent supply chain standards on premium imports and promoting total quality management across affiliates now certified ISO 22000 – Food Safety Management System.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 overflow-hidden">
                <img src="/images/about3.jpg" alt="About CWAY 3" className="w-full h-[360px] object-cover" />
              </motion.div>
            </div>

            {/* Row 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 border border-gray-200 overflow-hidden">
                <img src="/images/about4.jpg" alt="About CWAY 4" className="w-full h-[360px] object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Drinking Water & Beverages</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">Includes premium products such as water dispensers, dispenser refill water, table water, fruit flavored milk, fermented yogurt, plant protein drinks, carbonated soft drinks and other functional beverages.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">CWAY Homes Residence Scheme</h3>
                <p className="text-lg text-gray-700 leading-relaxed">CWAY residency scheme strives to provide comprehensive benefits to all international staff within company residence facilities (“CWAY HOMES”, flagged off in 2014). Benefits include board and lodging, statutory holidays, annual paid leave, gymnasium and entertainment facilities—driving safe home convenience and general wellbeing.</p>
              </motion.div>
            </div>

            {/* Row 5 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">CSR, Work Culture & Products</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">CWAY’s CSR tends to vulnerable groups and communities through donations, educational support, and environmental awareness programs. Our work culture emphasizes best practices, performance-based growth, and safety first.</p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">CWAY Water is rated as Nigeria’s No.1 brand for 18.9L dispenser refilling water and dispenser machines. CWAY Beverages brands such as Nutri Milk and Nutri Yo continue to expand market share across Nigeria and neighboring countries.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary-600 mb-2">19</div>
                    <div className="text-gray-700 font-medium">Factories</div>
                  </div>
                  <div className="bg-secondary-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">4</div>
                    <div className="text-gray-700 font-medium">Countries</div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-gray-200 overflow-hidden">
                <img src="/images/cway-headquarters.jpg" alt="Headquarters" className="w-full h-[360px] object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 font-display">Image Gallery</h3>
            <p className="text-gray-600 mt-2">A visual snapshot of our people, facilities and operations.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/images/cway-reception.jpg',
              '/images/cway-industry.jpg',
              '/images/cway-building.jpg',
              '/images/cway-headquarters.jpg',
              '/images/Headquarters1.jpg',
              '/images/cway-team.jpg'
            ].map((src) => (
              <motion.div 
                key={src} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.3 }}
                className="aspect-[4/3] overflow-hidden border border-gray-200 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={src} 
                  alt="CWAY" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story Blocks */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/images/cway-building.jpg" alt="Corporate Building" className="w-full h-[420px] object-cover border border-gray-200" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Global Infrastructure</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Our investments span modern facilities with advanced manufacturing lines across multiple countries, enabling consistent quality and scale.</p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/cway-headquarters.jpg" alt="Headquarters" className="w-full h-40 object-cover border border-gray-200" />
                <img src="/images/Headquarters1.jpg" alt="HQ Exterior" className="w-full h-40 object-cover border border-gray-200" />
              </div>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* People & Culture */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">People and Culture</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Our talent-first culture emphasizes best practices, growth, and safety. We invest in people, processes, and technology to deliver excellence.</p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 }}
                  className="border border-gray-200 p-6 hover:border-gray-900 transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900"><CountUp to={24} suffix="+" /></div>
                  <div className="text-gray-600">Years in Operation</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.3 }}
                  className="border border-gray-200 p-6 hover:border-gray-900 transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900"><CountUp to={15} suffix="+" /></div>
                  <div className="text-gray-600">Product Categories</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/images/cway-team.jpg" alt="CWAY Team" className="w-full h-[420px] object-cover border border-gray-200" />
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Core Business Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our operations span multiple sectors, ensuring comprehensive product offerings
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center border border-gray-200 rounded-none group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gray-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className="text-3xl text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{area.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre

