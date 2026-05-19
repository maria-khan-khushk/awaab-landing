import { useRef } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: "1",
    title: "Grant Location Access",
    desc: "Open Awaab and allow location permissions. The app instantly calculates accurate prayer timings for your exact position — no manual setup needed."
  },
  {
    num: "2",
    title: "Receive Azan Alerts",
    desc: "At each prayer time, Awaab plays your chosen authentic Azan sound and sends a notification — even on silent mode. Never miss Fajr again."
  },
  {
    num: "3",
    title: "Grow Your Practice",
    desc: "Use the Namaz guide, Qibla compass, Tasbeeh counter, and daily Hadith to deepen your spiritual routine and track your prayer consistency."
  }
]

export default function StoryTimeline() {
  const containerRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="how" ref={containerRef} className="pt-16 pb-16 px-6 relative bg-bg border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16 md:mb-20">
          <span className="text-xs font-bold text-sage-500 tracking-[0.2em] uppercase mb-4 block">Process</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold">
            How Awaab works<span className="text-sage-500">.</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10"
        >
          {/* Subtle connecting line for desktop behind the numbers */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-sage-500/0 via-border to-sage-500/0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex flex-col group"
            >
              {/* Number Badge */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-bg border border-border flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:border-sage-500/40 group-hover:bg-sage-500/5 transition-all duration-300">
                <span className="font-mono text-lg font-bold text-fg group-hover:text-sage-400 transition-colors">
                  {step.num}
                </span>
              </div>

              {/* Card */}
              <div className="bg-bg-card/40 rounded-2xl border border-border/60 p-8 text-center h-full hover:border-sage-500/20 hover:bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage-500/5">
                <h4 className="text-xl font-bold mb-4 text-fg group-hover:text-sage-400 transition-colors duration-300">{step.title}</h4>
                <p className="text-fg-muted leading-relaxed text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
