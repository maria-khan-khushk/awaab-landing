import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />
      
      {/* Subtle crescent arc decoration - kept for elegant branding, but toned down */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-sage-500/5 pointer-events-none" />
      <div className="absolute top-32 right-24 w-40 h-40 rounded-full border border-sage-500/5 pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Your Smart<br />
            <span className="text-sage-400">Namaz Companion</span>
            <span className="text-sage-500">.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-fg-muted max-w-xl leading-relaxed mb-10"
          >
            Never miss a prayer again. Awaab delivers accurate, location-based prayer timings,
            authentic Azan alerts, Qibla direction, and daily Hadith — beautifully integrated into a minimal experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Download APK Button */}
            <a
              href="#download"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-sage-500 text-white hover:bg-sage-600 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-sage-500/10"
            >
              <Download className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-semibold tracking-wider text-white/70 uppercase leading-none">Android Only</span>
                <span className="text-lg font-bold leading-tight tracking-wide">Download APK</span>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
