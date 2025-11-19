"use client";

import { useState, useEffect } from "react";
import CountdownTimer from "@/components/countdown-timer";

export default function HeroSection({ onBookSeat }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section
        className="relative pt-16 pb-12 px-4 min-h-screen flex items-center"
        style={{
          backgroundImage: "url(/images/AWAKENING.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/40"></div>

        <div className="max-w-md mx-auto space-y-8 relative z-10">
          <div className="space-y-3 animate-slide-up">
            <p className="text-xs text-white/70 font-space-grotesk uppercase tracking-wider font-semibold">
              Featuring
            </p>
            <h1 className="text-5xl font-bold text-white font-space-grotesk tracking-tight">
              AWAKENING
            </h1>
            <p className="text-sm text-white/80 font-space-grotesk leading-relaxed">
              Israel James Live in Concert
            </p>
          </div>

          <div className="space-y-3 animate-slide-up">
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="text-xs text-white/60 font-space-grotesk uppercase tracking-wider font-semibold mb-1">
                  Date & Time
                </p>
                <p className="text-base font-bold text-white font-space-grotesk">
                  10 Dec 2025
                </p>
                <p className="text-xs text-white/70 font-space-grotesk">
                  4:00 PM
                </p>
              </div>
              <div>
                <p className="text-xs text-white/60 font-space-grotesk uppercase tracking-wider font-semibold mb-1">
                  Venue
                </p>
                <p className="text-base font-bold text-white font-space-grotesk">
                  Greenfield
                </p>
                <p className="text-xs text-white/70 font-space-grotesk">
                  University
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <CountdownTimer variant="mobile" />
          </div>

          <div className="pt-2 animate-slide-up">
            <button
              onClick={onBookSeat}
              className="w-full px-4 py-3 bg-red-600 text-white font-bold text-sm rounded transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
            >
              Secure A seat
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen pt-16 px-8 flex items-center justify-center bg-white">
      <div
        className="max-w-7xl w-full grid gap-8 items-center"
        style={{
          gridTemplateColumns: "1.2fr 1fr",
          height: "calc(100vh - 4rem)",
        }}
      >
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-1 animate-slide-in-left">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-space-grotesk">
              Featuring
            </p>
            <p className="text-base text-muted-foreground font-space-grotesk">
              Israel James
            </p>
          </div>

          <div className="space-y-2 animate-slide-in-left">
            <h1 className="text-7xl font-black text-foreground font-space-grotesk tracking-tight leading-none">
              AWAKENING
            </h1>
            <div className="w-20 h-1.5 bg-red-600 rounded-full"></div>
          </div>

          <div className="flex gap-12 items-start animate-slide-in-left">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-space-grotesk">
                Date
              </p>
              <p className="text-lg font-bold text-foreground font-space-grotesk">
                10 Dec 2025
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-space-grotesk">
                Time
              </p>
              <p className="text-lg font-bold text-foreground font-space-grotesk">
                4:00 PM
              </p>
            </div>
          </div>

          <div className="animate-slide-in-left">
            <CountdownTimer variant="desktop" />
          </div>

          <div className="pt-1 animate-slide-in-left">
            <button
              onClick={onBookSeat}
              className="w-70 px-8 py-3 bg-red-600 text-white font-bold text-base rounded transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
            >
              Secure A Seat
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-full animate-slide-in-right">
          <div
            className="relative w-full"
            style={{ maxWidth: "100%", height: "100vh", maxHeight: "90vh" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded pointer-events-none z-10"></div>
            <img
              src="/images/AWAKENING.jpg"
              alt="Awakening Concert"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
