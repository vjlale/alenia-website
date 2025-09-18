import { motion } from 'framer-motion'

const ServicesSection = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-alenia-light/80 max-w-3xl mx-auto">
            Soluciones integrales de IA y automatización para empresas modernas
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection