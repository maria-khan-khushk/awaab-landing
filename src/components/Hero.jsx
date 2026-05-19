import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Apple, Play } from 'lucide-react'
import awaabLogo from '../assets/awaab-logo.png'

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
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />
      {/* Warm radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-60 mix-blend-screen" />
      {/* Subtle crescent arc decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-sage-500/10 pointer-events-none" />
      <div className="absolute top-32 right-24 w-40 h-40 rounded-full border border-sage-500/5 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-sage-400/8 pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        {/* Left Column: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage-500/20 blur-3xl rounded-full w-64 h-64 pointer-events-none" />
          <motion.img
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src={awaabLogo}
            alt="Awaab App Logo"
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-[0_0_50px_rgba(138,155,127,0.4)] select-none"
          />
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Your Smart<br />
            <span className="text-sage-400 text-glow">Namaz Companion</span>
            <span className="text-sage-500">.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-fg-muted max-w-xl leading-relaxed mb-10"
          >
            Never miss a prayer again. Awaab delivers accurate, location-based prayer timings,
            authentic Azan alerts, Qibla direction, and daily Hadith — beautifully integrated into a modern experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* App Store Button */}
            <a
              href="#download"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-bg-card/80 backdrop-blur-xl border border-border hover:border-sage-500/50 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 box-glow"
            >
              <Apple className="w-8 h-8 text-fg" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-semibold tracking-wider text-fg-muted uppercase leading-none">Download on the</span>
                <span className="text-lg font-bold text-fg leading-tight">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#download"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-bg-card/80 backdrop-blur-xl border border-border hover:border-sage-500/50 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 box-glow"
            >
              <Play className="w-7 h-7 text-sage-400" fill="currentColor" />
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-semibold tracking-wider text-fg-muted uppercase leading-none">Get it on</span>
                <span className="text-lg font-bold text-fg leading-tight">Google Play</span>
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
