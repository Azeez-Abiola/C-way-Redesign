import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCircleQuestion, FaChevronDown } from 'react-icons/fa6'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What products does CWAY Group offer?',
      answer: 'CWAY Group offers water products (CWAY Water, CWAY Prime Water, Dispenser Machines), beverages (Nutri Milk, Nutri Yo, BOXI Energy Drink, and 14+ products), and snacks under the Wellcome brand.'
    },
    {
      question: 'Where are CWAY factories located?',
      answer: 'CWAY has 19 factories across 4 countries: 17 in Nigeria, 1 in China, 1 in India, and 1 in Egypt.'
    },
    {
      question: 'When was CWAY Group established?',
      answer: 'CWAY Water was established in 2000, and CWAY Food & Beverages was established in 2004.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support through phone (+234 (0) 123 456 7890), email (info@cwaygroup.com), or visit our customer care page.'
    }
  ]

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
              <FaCircleQuestion className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white/90">
              Common questions about CWAY Group products and services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <FaChevronDown
                    className={`text-primary-600 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQs

