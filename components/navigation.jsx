"use client";

export default function Navigation({ onBookSeat }) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Awakening Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <p className="text-sm font-bold text-foreground font-space-grotesk">
              JESUS CITY
            </p>
            <p className="text-xs text-muted-foreground font-space-grotesk">
              Music
            </p>
          </div>
        </div>

        <button
          onClick={onBookSeat}
          className="px-6 py-2.5 bg-accent-red text-white font-semibold rounded text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-space-grotesk"
          style={{ backgroundColor: "#dc143c" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b01030")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc143c")}
        >
          secure your ticket
        </button>
      </div>
    </nav>
  );
}
