import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Bell, Compass } from 'lucide-react'
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
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage-500/20 bg-sage-500/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sage-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-xs font-semibold tracking-widest text-sage-400 uppercase">Bahria University Karachi — Available Now</span>
        </motion.div>

        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-sage-500/10 blur-3xl rounded-full scale-150 pointer-events-none" />
          <img
            src={awaabLogo}
            alt="Awaab App Logo"
            className="relative w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_40px_rgba(138,155,127,0.3)] select-none"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6"
        >
          Your Smart<br />
          <span className="text-sage-400 text-glow">Prayer Companion</span>
          <span className="text-sage-500">.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Never miss a prayer again. Awaab delivers accurate, location-based prayer timings,
          authentic Azan alerts, Qibla direction, and daily Hadith — all in one app.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            id="hero-download-btn"
            href="#download"
            className="group relative px-8 py-4 bg-sage-500 hover:bg-sage-400 text-white font-bold rounded-xl overflow-hidden box-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download for Android
            </span>
          </a>
          <a
            href="#features"
            id="hero-features-btn"
            className="px-8 py-4 bg-bg-card border border-border text-fg font-bold rounded-xl hover:border-sage-500/50 hover:text-sage-400 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Floating feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: <MapPin className="w-3.5 h-3.5" />, text: "Location-Based Timings" },
            { icon: <Bell  className="w-3.5 h-3.5" />, text: "Azan Alerts" },
            { icon: <Compass className="w-3.5 h-3.5" />, text: "Qibla Direction" },
          ].map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border text-xs font-medium text-fg-muted"
            >
              <span className="text-sage-400">{pill.icon}</span>
              {pill.text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
