import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import screen1 from '../assets/screens/screen-1.png'
import screen2 from '../assets/screens/screen-2.png'
import screen3 from '../assets/screens/screen-3.png'
import screen4 from '../assets/screens/screen-4.png'
import screen5 from '../assets/screens/screen-5.png'
import screen6 from '../assets/screens/screen-6.png'
import screen7 from '../assets/screens/screen-7.png'
import screen8 from '../assets/screens/screen-8.png'
import screen9 from '../assets/screens/screen-9.png'
import screen10 from '../assets/screens/screen-10.png'

const screenImages = {
  'screen-1.png': screen1,
  'screen-2.png': screen2,
  'screen-3.png': screen3,
  'screen-4.png': screen4,
  'screen-5.png': screen5,
  'screen-6.png': screen6,
  'screen-7.png': screen7,
  'screen-8.png': screen8,
  'screen-9.png': screen9,
  'screen-10.png': screen10,
}

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
    title: "Urdu Mode Screen",
    desc: "Experience Awaab in Urdu with a clean interface.",
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
    <section id="showcase" className="pt-12 md:pt-16 pb-4 md:pb-8 px-6 md:px-10 lg:px-24 bg-bg border-t border-border/50 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-sage-500 tracking-[0.2em] uppercase mb-2 block">Inside the App</span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-fg mb-3">
              Explore Awaab<span className="text-sage-500">.</span>
            </h2>
            <p className="text-fg-muted text-sm md:text-base leading-relaxed max-w-md">
              A closer look at the features and experiences inside the app.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-border bg-bg-card flex items-center justify-center text-fg hover:border-sage-500/50 hover:text-sage-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-border bg-bg-card flex items-center justify-center text-fg hover:border-sage-500/50 hover:text-sage-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screens.map((screen, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="w-[180px] md:w-[200px] flex-shrink-0 snap-center group flex flex-col"
            >
              {/* Realistic Phone Mockup Frame */}
              <div className="relative w-full h-[360px] md:h-[400px] rounded-[28px] md:rounded-[32px] border-[6px] border-border bg-bg-card shadow-lg overflow-hidden mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-sage-500/10 group-hover:border-sage-500/30">
                
                {/* Dynamic Notch hint */}
                <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-20">
                  <div className="w-16 md:w-20 h-full bg-border rounded-b-lg shadow-sm transition-colors duration-500 group-hover:bg-sage-500/30" />
                </div>
                
                {/* Inner Bezel highlight */}
                <div className="absolute inset-0 rounded-[22px] md:rounded-[26px] border border-white/5 z-10 pointer-events-none" />

                {/* Image Placeholder Context */}
                <div className="absolute inset-0 bg-sage-500/5 flex flex-col items-center justify-center p-4 text-center transition-colors duration-500 group-hover:bg-sage-500/10">
                  <span className="text-sage-500/60 font-mono text-[9px] md:text-[10px] mb-2 border border-sage-500/20 px-2 py-1 rounded-full bg-bg/50 backdrop-blur-sm">
                    {screen.filename}
                  </span>
                  
                  {/* Actual Image Tag */}
                  <img 
                    src={screenImages[screen.filename]}
                    alt={screen.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    onLoad={(e) => e.target.style.opacity = '1'}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-1">
                <h3 className="text-base font-bold text-fg mb-1 group-hover:text-sage-400 transition-colors duration-300">{screen.title}</h3>
                <p className="text-fg-muted text-[13px] leading-relaxed line-clamp-3">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
