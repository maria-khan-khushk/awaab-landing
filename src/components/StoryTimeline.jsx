import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    num: "01",
    title: "Grant Location Access",
    desc: "Open Awaab and allow location permissions. The app instantly calculates accurate prayer timings for your exact position — no manual setup needed."
  },
  {
    num: "02",
    title: "Receive Azan Alerts",
    desc: "At each prayer time, Awaab plays your chosen authentic Azan sound and sends a notification — even on silent mode. Never miss Fajr again."
  },
  {
    num: "03",
    title: "Grow Your Practice",
    desc: "Use the Namaz guide, Qibla compass, Tasbeeh counter, and daily Hadith to deepen your spiritual routine and track your prayer consistency."
  }
]

export default function StoryTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="how" ref={containerRef} className="py-32 px-6 relative bg-bg border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-sage-500 tracking-[0.2em] uppercase mb-4 block">Process</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold">
            How Awaab works<span className="text-sage-500">.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-sage-500 box-glow"
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Dot */}
                <div className="absolute left-[15px] top-[6px] w-[18px] h-[18px] rounded-full bg-bg border-4 border-sage-500 box-glow" />

                {/* Big step number (ghost) */}
                <h3 className="font-mono text-5xl font-bold text-fg/5 absolute left-16 md:left-24 -top-8 select-none pointer-events-none">
                  {step.num}
                </h3>

                <div className="relative z-10 bg-bg-card p-8 rounded-2xl border border-border hover:border-sage-500/20 transition-colors">
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-fg-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
