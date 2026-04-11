export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-indigo to-brand-purple text-xs font-bold text-white">
            J&amp;E
          </span>
          <span className="font-display text-sm text-mist-200">
            Statistical Consulting
          </span>
        </div>
        <div className="font-mono text-xs text-mist-400">
          © {new Date().getFullYear()} J&amp;E Statistical Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
