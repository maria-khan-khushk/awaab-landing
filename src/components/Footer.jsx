export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-bg-card/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-sage-500/20 border border-sage-500/30 flex items-center justify-center">
            <span className="text-sage-400 text-xs font-bold">ع</span>
          </div>
          <span className="font-mono font-bold text-sm tracking-wider">
            AWAAB<span className="text-sage-500">.</span>
          </span>
        </div>

        <div className="text-xs text-fg-muted">
          Built at Bahria University Karachi — BSE Semester Project 2026
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            id="footer-github-link"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-fg-muted hover:text-sage-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
