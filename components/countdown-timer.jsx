"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ variant = "mobile" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-12-10T16:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null;
  }

  if (variant === "desktop") {
    return (
      <div>
        <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest font-space-grotesk">
          Time Until Event
        </p>
        <div className="flex gap-8">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Mins" },
            { value: timeLeft.seconds, label: "Secs" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl font-bold text-accent-red mb-2 font-space-grotesk font-mono">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs font-semibold text-muted-foreground font-space-grotesk">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mobile variant
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <p className="text-xs text-white/70 font-semibold mb-4 text-center uppercase tracking-widest font-space-grotesk">
        Time Until Event
      </p>
      <div className="grid grid-cols-4 gap-2">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Mins" },
          { value: timeLeft.seconds, label: "Secs" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-2xl font-bold text-accent-gold mb-1 font-space-grotesk font-mono">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs font-semibold text-white/70 font-space-grotesk">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
