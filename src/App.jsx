import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Sun, Moon } from 'lucide-react'
import Hero from './components/Hero'
import Features from './components/Features'
import StoryTimeline from './components/StoryTimeline'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => { lenis.destroy() }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <div className="bg-bg text-fg overflow-x-hidden min-h-screen transition-colors duration-400">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 lg:px-10 border-b border-border bg-bg/80 backdrop-blur-xl transition-all duration-400">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sage-500/20 border border-sage-500/30 flex items-center justify-center">
            <span className="text-sage-400 text-sm font-bold font-mono">ع</span>
          </div>
          <span className="font-mono font-bold text-lg tracking-wider text-fg">
            AWAAB<span className="text-sage-500">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Features</a>
          <a href="#how"      className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">How It Works</a>
          <a href="#download" className="text-sm font-medium text-fg-muted hover:text-sage-400 transition-colors">Download</a>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            className="w-10 h-10 rounded-xl border border-border bg-bg-card text-fg hover:border-sage-500/50 hover:text-sage-500 flex items-center justify-center transition-all duration-300 box-glow"
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun  className="w-4 h-4 text-sage-400" />
              : <Moon className="w-4 h-4 text-sage-600" />
            }
          </button>

          <a
            href="#download"
            id="nav-download-btn"
            className="px-5 py-2.5 bg-sage-500 hover:bg-sage-400 text-white font-bold rounded-lg text-sm transition-all duration-300 box-glow hover:scale-105 active:scale-95"
          >
            Download App
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <StoryTimeline />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
