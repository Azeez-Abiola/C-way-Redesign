import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGlassWater } from 'react-icons/fa6'

const Beverages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const beverageImages = useMemo(() => ([
    '/images/beverage1.jpg',
    '/images/beverage2.jpg',
    '/images/beverage3.jpg',
    '/images/beverage4.jpg',
    '/images/beverage5.jpg',
    '/images/beverages2.jpg',
    '/images/yoghurt.jpg',
    '/images/energy-drink.jpg'
  ]), [])

  const [activeIdx, setActiveIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActiveIdx(p => (p + 1) % beverageImages.length), 4000)
    return () => clearInterval(id)
  }, [beverageImages])

  const beverages = [
    {
      name: 'Nutri Milk',
      category: 'milk',
      description: 'Fruit milk drink available in multiple flavors',
      icon: '🥛',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Nutri-milk Superkids',
      category: 'milk',
      description: 'Specially formulated for children with DHA for growth',
      icon: '👶',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Nutri Yo',
      category: 'yogurt',
      description: 'Yogurt-based beverage with probiotic benefits',
      icon: '🥛',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Nutri Soya',
      category: 'plant',
      description: 'Plant protein drink made from soy',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Nutri Choco',
      category: 'milk',
      description: 'Chocolate-flavored milk drink',
      icon: '🍫',
      color: 'from-amber-700 to-amber-900'
    },
    {
      name: 'Maca Plus',
      category: 'energy',
      description: 'Energy-boosting functional beverage',
      icon: '⚡',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Fruit Drink',
      category: 'fruit',
      description: 'Range of fruit-flavored beverages',
      icon: '🍹',
      color: 'from-orange-500 to-pink-500'
    },
    {
      name: 'C Fresh',
      category: 'fruit',
      description: 'Refreshing fruit drink',
      icon: '🍋',
      color: 'from-green-400 to-cyan-500'
    },
    {
      name: 'BOXI Energy Drink',
      category: 'energy',
      description: 'Energy drink for active lifestyles',
      icon: '⚡',
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Darjeeling Ice Tea',
      category: 'tea',
      description: 'Iced tea variant featuring Darjeeling tea',
      icon: '🍵',
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'Assam Milk Tea Drink',
      category: 'tea',
      description: 'Milk tea beverage with Assam tea',
      icon: '🧋',
      color: 'from-amber-600 to-orange-600'
    },
    {
      name: 'Café Coffee Milk Drink',
      category: 'coffee',
      description: 'Coffee-flavored milk drink',
      icon: '☕',
      color: 'from-brown-600 to-amber-700'
    },
    {
      name: 'Fuji Probiotic Drink',
      category: 'health',
      description: 'Probiotic beverage promoting digestive health',
      icon: '🦠',
      color: 'from-blue-600 to-cyan-600'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'milk', name: 'Milk Drinks' },
    { id: 'yogurt', name: 'Yogurt' },
    { id: 'plant', name: 'Plant Protein' },
    { id: 'energy', name: 'Energy Drinks' },
    { id: 'fruit', name: 'Fruit Drinks' },
    { id: 'tea', name: 'Tea' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'health', name: 'Health Drinks' }
  ]

  const filteredBeverages = selectedCategory === 'all'
    ? beverages
    : beverages.filter(b => b.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Slider */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {beverageImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Beverage hero"
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
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-none mb-8">
              <FaGlassWater className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Beverages</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Diverse beverage portfolio meeting customer health needs since 2004
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Large Sliding Showcase */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Showcase</h2>
          <div className="overflow-hidden border border-gray-200">
            <motion.div
              className="flex gap-4 p-4"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            >
              {[...beverageImages, ...beverageImages].map((src, i) => (
                <div key={i} className="min-w-[420px] h-[280px] overflow-hidden image-flip-container">
                  <img src={src} alt="Beverage" className="w-full h-full object-cover image-flip" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products (text cards, no repeated images) */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div key={selectedCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBeverages.map((beverage, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-gray-200 p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{beverage.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{beverage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Beverages

