"use client";

import { useState } from "react";
import { saveRegistration } from "@/lib/appwrite";

export default function RegistrationModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await saveRegistration(formData);
      console.log("Registration saved to Appwrite:", response);
      onSuccess();
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({
        submit: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 animate-slide-up max-h-[90vh] overflow-y-auto hide-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Secure Your Ticket
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Awakening Concert - Dec 10, 2025
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-all ${
                errors.fullName ? "border-red-500" : "border-border"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red transition-all ${
                errors.phone ? "border-red-500" : "border-border"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errors.submit}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-red-dark transition-colors duration-200 disabled:opacity-50"
            style={{ backgroundColor: "#dc143c" }}
            onMouseEnter={(e) =>
              !isSubmitting && (e.target.style.backgroundColor = "#b01030")
            }
            onMouseLeave={(e) =>
              !isSubmitting && (e.target.style.backgroundColor = "#dc143c")
            }
          >
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </button>
        </form>

        {/* Partnership Info */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
            Partnership Enquiries
          </p>
          <div className="bg-accent-gold/10 rounded-lg p-4 border border-accent-gold/30 text-sm">
            <p className="font-semibold text-foreground mb-2">
              Support This Event
            </p>
            <p className="text-muted-foreground text-xs mb-3">
              To partner with us or sponsor this concert:
            </p>
            <div className="space-y-1 text-xs text-foreground">
              <p>
                <span className="font-semibold">Account Name:</span> Israel
                James
              </p>
              <p>
                <span className="font-semibold">Bank:</span> Opay
              </p>
              <p>
                <span className="font-semibold">Account No:</span> 8113080699
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
