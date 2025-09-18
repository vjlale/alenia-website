import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-alenia-light/80 mb-8 max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo la IA puede revolucionar tu empresa
          </p>
          
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-alenia-primary to-alenia-secondary text-alenia-dark px-8 py-4 rounded-lg font-bold"
          >
            <span>Contactar Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection