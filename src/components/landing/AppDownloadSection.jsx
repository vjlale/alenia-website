import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const AppDownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-6">
            Descarga ALENIA GESTIÓN
          </h2>
          <p className="text-xl text-alenia-light/80 mb-8 max-w-3xl mx-auto">
            Nuestra aplicación gratuita de gestión empresarial
          </p>
          
          <motion.a
            href="/GUIA_USUARIO_COMPLETA.HTML"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-alenia-primary to-alenia-secondary text-alenia-dark px-8 py-4 rounded-lg font-bold"
          >
            <Download className="w-5 h-5" />
            <span>Ver Guía de Usuario</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default AppDownloadSection