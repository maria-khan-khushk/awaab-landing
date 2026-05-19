import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screens = [
  {
    title: "Home Screen",
    desc: "View accurate prayer times based on your real-time location.",
    filename: "screen-1.png"
  },
  {
    title: "Streak System",
    desc: "Track your prayer consistency and build daily worship habits.",
    filename: "screen-2.png"
  },
  {
    title: "Qibla & Mosque Finder",
    desc: "Find the Qibla direction instantly and locate nearby mosques.",
    filename: "screen-3.png"
  },
  {
    title: "Tasbeeh Counter",
    desc: "Use a smart digital tasbeeh counter with dhikr audio support.",
    filename: "screen-4.png"
  },
  {
    title: "99 Names of Allah",
    desc: "Swipe through the beautiful 99 Names of Allah experience.",
    filename: "screen-5.png"
  },
  {
    title: "Dhikr & Duas",
    desc: "Access essential daily dhikr and duas in one place.",
    filename: "screen-6.png"
  },
  {
    title: "Daily Hadith & Islamic Calendar",
    desc: "Stay connected with daily hadith and Islamic date updates.",
    filename: "screen-7.png"
  },
  {
    title: "Manual Reminders",
    desc: "Set custom reminders and alarms for important moments.",
    filename: "screen-8.png"
  },
  {
    title: "Settings",
    desc: "Personalize your experience with themes, language, and alert settings.",
    filename: "screen-9.png"
  },
  {
    title: "Urdu Dark Mode Screen",
    desc: "Experience Awaab in Urdu with a clean dark-mode interface.",
    filename: "screen-10.png"
  }
]

export default function AppShowcase() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  return (
    <section id="showcase" className="py-24 px-6 md:px-10 lg:px-24 bg-bg border-t border-border/50 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-sage-500 tracking-[0.2em] uppercase mb-4 block">Inside the App</span>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-fg mb-4">
              Explore Awaab<span className="text-sage-500">.</span>
            </h2>
            <p className="text-fg-muted text-lg leading-relaxed">
              A closer look at the features and experiences inside the app.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-border bg-bg-card flex items-center justify-center text-fg hover:border-sage-500/50 hover:text-sage-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-border bg-bg-card flex items-center justify-center text-fg hover:border-sage-500/50 hover:text-sage-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screens.map((screen, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="w-[240px] md:w-[260px] flex-shrink-0 snap-center group flex flex-col"
            >
              {/* Realistic Phone Mockup Frame */}
              <div className="relative w-full h-[500px] md:h-[540px] rounded-[36px] md:rounded-[40px] border-[6px] md:border-[8px] border-border bg-bg-card shadow-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-sage-500/10 group-hover:border-sage-500/30">
                
                {/* Dynamic Notch hint */}
                <div className="absolute top-0 inset-x-0 h-5 md:h-6 flex justify-center z-20">
                  <div className="w-24 md:w-32 h-full bg-border rounded-b-lg md:rounded-b-xl shadow-sm transition-colors duration-500 group-hover:bg-sage-500/30" />
                </div>
                
                {/* Inner Bezel highlight */}
                <div className="absolute inset-0 rounded-[30px] md:rounded-[32px] border border-white/5 z-10 pointer-events-none" />

                {/* Image Placeholder Context */}
                <div className="absolute inset-0 bg-sage-500/5 flex flex-col items-center justify-center p-6 text-center transition-colors duration-500 group-hover:bg-sage-500/10">
                  <span className="text-sage-500/60 font-mono text-[10px] md:text-xs mb-3 border border-sage-500/20 px-3 py-1 rounded-full bg-bg/50 backdrop-blur-sm">
                    {screen.filename}
                  </span>
                  
                  {/* Actual Image Tag */}
                  <img 
                    src={`/src/assets/screens/${screen.filename}`} 
                    alt={screen.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    onLoad={(e) => e.target.style.opacity = '1'}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-fg mb-2 group-hover:text-sage-400 transition-colors duration-300">{screen.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
