"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import RegistrationModal from "@/components/registration-modal";
import SuccessModal from "@/components/success-modal";
import PartnershipSection from "@/components/partnership-section";

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookSeat = () => {
    setShowRegistration(true);
  };

  const handleRegistrationSuccess = () => {
    setShowRegistration(false);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookSeat={handleBookSeat} />
      <HeroSection onBookSeat={handleBookSeat} />
      <PartnershipSection />

      {showRegistration && (
        <RegistrationModal
          onClose={() => setShowRegistration(false)}
          onSuccess={handleRegistrationSuccess}
        />
      )}

      {showSuccess && <SuccessModal onClose={handleCloseSuccess} />}
    </div>
  );
}
