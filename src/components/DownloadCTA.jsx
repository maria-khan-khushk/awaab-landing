import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const DOWNLOAD_URL = '#' // Replace with actual APK URL when ready

export default function DownloadCTA() {
  return (
    <section id="download" className="py-32 px-6 relative bg-bg overflow-hidden border-t border-border">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-40 mix-blend-screen" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-sage-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-sage-500/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Arabic bismillah-style ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-sage-500/50" />
          <span className="text-sage-400 font-mono text-xs tracking-[0.3em] uppercase">The Prayer App</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-sage-500/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-5xl md:text-7xl font-bold mb-6"
        >
          Never miss<br /><span className="text-sage-400 text-glow">a prayer.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-fg-muted mb-12 max-w-xl mx-auto"
        >
          Awaab is free, built with Flutter, and powered by Microsoft Azure. Available now for Android.
        </motion.p>

        {/* Single Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            id="download-apk-btn"
            href={DOWNLOAD_URL}
            download
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-sage-500 hover:bg-sage-400 text-white font-bold rounded-xl box-glow hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Android APK
          </a>
        </motion.div>

        {/* Meta badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-full font-mono text-xs text-fg-muted"
        >
          v1.0.0 &nbsp;—&nbsp; Bahria University Karachi &nbsp;—&nbsp; BSE Semester Project 2026
        </motion.div>
      </div>
    </section>
  )
}
