export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}
