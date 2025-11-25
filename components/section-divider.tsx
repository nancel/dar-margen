export function SectionDivider() {
  return (
    <div className="flex justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary/40">
          <path d="M4 8h4M4 12h4M12 8h4M12 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30"></div>
      </div>
    </div>
  )
}
