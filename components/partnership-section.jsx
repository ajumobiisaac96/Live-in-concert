"use client";

export default function PartnershipSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-foreground text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Partner With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Primary Partners */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Become a Partner</h3>
            <p className="text-sm text-white/80 mb-4">
              Join us in bringing this transformative experience
            </p>
            <div className="bg-white/5 rounded p-3 text-xs">
              <p className="font-semibold mb-2">Partnership Details:</p>
              <p className="text-white/70">
                Contact our sponsorship team for custom partnership packages
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-accent-red/10 backdrop-blur-sm rounded-lg p-6 border border-accent-red/30">
            <div className="w-12 h-12 bg-accent-red/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">📞</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <div className="text-sm space-y-2">
              <p className="text-white/80">📞 +234 811 308 0699</p>
              <p className="text-white/80">📱 +234 902 960 6925</p>
              <p className="text-xs text-white/60 mt-3">
                Available for sponsorship inquiries
              </p>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="bg-accent-gold/10 backdrop-blur-sm rounded-lg p-6 border border-accent-gold/30">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl">💳</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Send Support</h3>
            <div className="text-sm space-y-1">
              <p className="font-semibold text-accent-gold">Account Name</p>
              <p className="text-white/80 mb-3">Israel James</p>

              <p className="font-semibold text-accent-gold">Bank</p>
              <p className="text-white/80 mb-3">Opay</p>

              <p className="font-semibold text-accent-gold">Account Number</p>
              <p className="text-white/80 font-mono">8113080699</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs text-white/60">
          <p>
            Every support helps us bring quality worship experience to the
            community
          </p>
        </div>
      </div>
    </section>
  );
}
