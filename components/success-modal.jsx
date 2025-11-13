"use client";

import { useState } from "react";

export default function SuccessModal({ onClose }) {
  const [isJoiningWhatsApp, setIsJoiningWhatsApp] = useState(false);

  const handleJoinWhatsApp = () => {
    setIsJoiningWhatsApp(true);

    // Open WhatsApp with proper link
    const whatsappLink =
      "https://wa.me/2348113080699?text=Hi%20Israel%20James%20Team%2C%20I%20just%20registered%20for%20the%20Awakening%20concert%20on%20December%2010th.%20Please%20add%20me%20to%20the%20concert%20updates%20WhatsApp%20channel.";

    // Open link in new tab (avoids popup blocker issues)
    window.open(whatsappLink, "_blank");

    // Close modal after a short delay
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-md w-full p-8 text-center animate-slide-up">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-12 h-12 bg-accent-gold/30 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-accent-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-muted-foreground mb-6">
          Thank you for booking a seat for the Awakening concert. Your
          reservation is confirmed.
        </p>

        {/* WhatsApp Section */}
        <div className="bg-accent-green/10 rounded-lg p-4 mb-6 border border-accent-green/30">
          <p className="text-sm font-semibold text-foreground mb-2">
            Stay Updated on WhatsApp
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Get real-time updates, reminders, and concert details directly on
            WhatsApp
          </p>
          <button
            onClick={handleJoinWhatsApp}
            disabled={isJoiningWhatsApp}
            className="w-full py-2 bg-accent-green text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
          >
            {isJoiningWhatsApp
              ? "Opening WhatsApp..."
              : "Join WhatsApp Channel"}
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-xs text-muted-foreground mb-6 space-y-1">
          <p>📧 Check your email for confirmation details</p>
          <p>📱 We'll send you reminders as the date approaches</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 border-2 border-accent-red text-accent-red font-semibold rounded-lg hover:bg-accent-red/5 transition-colors"
        >
          Close
        </button>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border text-left">
          <p className="text-xs font-semibold text-muted-foreground mb-2">
            CONCERT DETAILS
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>📅 December 10, 2025</p>
            <p>🕐 4:00 PM</p>
            <p>📍 Greenfield University</p>
            <p>👔 Dress Code: All White</p>
          </div>
        </div>
      </div>
    </div>
  );
}
