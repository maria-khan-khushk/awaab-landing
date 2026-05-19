import { motion } from 'framer-motion'
import { MapPin, Bell, BookOpen, Compass, Wifi, Moon, Volume2, BookMarked, Globe, Cloud, Calendar, VolumeX, Navigation, Hash } from 'lucide-react'

const features = [
  {
    icon: <MapPin className="w-6 h-6 text-sage-400" />,
    title: "Location-Based Prayer Timing",
    desc: "Automatically detects your location and fetches accurate prayer timings with seasonal adjustments for any city in the world."
  },
  {
    icon: <Bell className="w-6 h-6 text-sage-400" />,
    title: "Automated Azan Alerts",
    desc: "Triggers authentic Azan audio notifications precisely at each prayer time, so you never miss Fajr, Dhuhr, Asr, Maghrib, or Isha."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-sage-400" />,
    title: "Namaz Guidance Module",
    desc: "Step-by-step guidance for all prayers — including Rakats, posture, and method — for both beginners and daily reference."
  },
  {
    icon: <Compass className="w-6 h-6 text-sage-400" />,
    title: "Qibla Direction",
    desc: "Real-time Qibla compass powered by GPS and device sensors. Accurate wherever you are in the world."
  },
  {
    icon: <Wifi className="w-6 h-6 text-sage-400" />,
    title: "Offline Functionality",
    desc: "Prayer times and preferences stored locally so you stay on schedule even without an internet connection."
  },
  {
    icon: <Moon className="w-6 h-6 text-sage-400" />,
    title: "Dark Mode Support",
    desc: "Theme switching for comfortable use in low-light conditions, matching your system preference automatically."
  },
  {
    icon: <Volume2 className="w-6 h-6 text-sage-400" />,
    title: "Azan Sound Customization",
    desc: "Choose from a curated set of authentic Azan voices — set different reciters for different prayer times."
  },
  {
    icon: <BookMarked className="w-6 h-6 text-sage-400" />,
    title: "Daily Hadith Notifications",
    desc: "Receive one Hadith every day with full translation (Tarjuma) and a brief explanation to enrich your knowledge."
  },
  {
    icon: <Globe className="w-6 h-6 text-sage-400" />,
    title: "Multi-Language Support",
    desc: "Full English and Urdu support — switch language through Settings to make the app accessible for everyone."
  },
  {
    icon: <Cloud className="w-6 h-6 text-sage-400" />,
    title: "Cloud Integration",
    desc: "Microsoft Azure backend syncs your Hadith data and preferences across sessions for a seamless experience."
  },
  {
    icon: <Calendar className="w-6 h-6 text-sage-400" />,
    title: "Prayer Consistency Tracker",
    desc: "Track your daily, weekly, and monthly prayer habits. Streak system and calendar visualization keep you motivated."
  },
  {
    icon: <VolumeX className="w-6 h-6 text-sage-400" />,
    title: "Smart Silent Mode Detection",
    desc: "Overrides silent mode for Azan alerts with optional vibration fallback, ensuring you never miss a notification."
  },
  {
    icon: <Navigation className="w-6 h-6 text-sage-400" />,
    title: "Mosque Finder Nearby",
    desc: "Uses GPS to locate nearby mosques with distance, directions, and map integration — perfect for travellers."
  },
  {
    icon: <Hash className="w-6 h-6 text-sage-400" />,
    title: "Tasbeeh Counter",
    desc: "A built-in digital dhikr counter with tap-based counting, session tracking, and daily Zikr goal presets."
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
}

export default function Features() {
  return (
    <section id="features" className="pt-32 pb-16 px-6 relative z-10 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-bold text-sage-500 tracking-[0.2em] uppercase mb-4 block">Features</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6">
            Everything you need.<br />
            <span className="text-sage-400">All in one place.</span>
          </h2>
          <p className="text-fg-muted max-w-lg text-lg leading-relaxed">
            Awaab combines accurate prayer timings, spiritual guidance, and smart reminders into one beautifully designed app.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 bg-bg-card/40 rounded-2xl border border-border/60 hover:border-sage-500/20 hover:bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage-500/5 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center shrink-0 group-hover:bg-sage-500/20 transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-fg group-hover:text-sage-400 transition-colors duration-300 pt-1">
                  {feat.title}
                </h3>
              </div>
              <p className="text-fg-muted leading-relaxed text-sm mt-auto">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
