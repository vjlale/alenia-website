import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">Alen.iA</span>
            <br />
            <span className="text-alenia-light">Resultados con Inteligencia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-alenia-light/80 mb-8 max-w-3xl mx-auto">
            Transformamos tu negocio con soluciones de IA, automatización y desarrollo web
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-alenia-primary to-alenia-secondary text-alenia-dark px-8 py-4 rounded-lg font-bold flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Comenzar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection