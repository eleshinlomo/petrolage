
import { motion } from 'framer-motion'
import { FaBriefcase, FaGlobeAfrica, FaStore, FaPlane } from 'react-icons/fa'

const AboutUs = () => {

    

  return (
    
    <section className="w-full py-8 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">Journey</span>
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <div className="p-2 sm:p-3 rounded-full bg-green-100 text-green-600 mr-3 sm:mr-4">
                <FaBriefcase className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Humble Beginnings</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Founded in 2015 as a boutique staffing agency in Lagos, Nigeria, Petrolage began with a simple vision: 
              to connect exceptional talent with forward-thinking companies. What started as a small team with big dreams 
              has blossomed into one of Africa&apos;s leading staffing solutions providers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600 mr-3 sm:mr-4">
                <FaGlobeAfrica className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Continental Expansion</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Through strategic partnerships and an unwavering commitment to excellence, we&apos;ve expanded our footprint 
              across Africa. Our deep understanding of local markets combined with international best practices allows 
              us to deliver tailored staffing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <div className="p-2 sm:p-3 rounded-full bg-purple-100 text-purple-600 mr-3 sm:mr-4">
                <FaStore className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Petrolage Store</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Launching in 2025, Petrolage Store represents our exciting foray into e-commerce. Leveraging our extensive 
              network and market knowledge, we&apos;ll curate premium products that meet the evolving needs of African consumers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <div className="p-2 sm:p-3 rounded-full bg-indigo-100 text-indigo-600 mr-3 sm:mr-4">
                <FaPlane className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Petrolage Travel</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Also launching in 2025, Petrolage Travel will revolutionize business travel in Africa. Combining our 
              staffing expertise with premium travel services, we&apos;ll offer seamless corporate travel solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Petrolage, we&apos;re more than a business - we&apos;re a catalyst for growth, opportunity, and transformation. 
            Our journey reflects our commitment to innovation, quality, and the belief that African businesses deserve 
            world-class services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs