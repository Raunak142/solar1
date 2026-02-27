"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle2,
  MapPinned,
  AlertCircle,
} from "lucide-react";

// Validation Regex Patterns (Must match backend)
const PATTERNS = {
  name: /^[a-zA-Z\s]{2,}$/, // Letters and spaces only
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Standard email
  phone: /^\+?[0-9]{10,15}$/, // Digits only, 10-15 chars
};

const ContactForm = () => {
  const router = useRouter(); // Initialize router;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    website: "", // Honeypot field - must be empty
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (!PATTERNS.name.test(value))
          error = "Please enter a valid name (letters only)";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!PATTERNS.email.test(value))
          error = "Please enter a valid email address";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!PATTERNS.phone.test(value.replace(/\s/g, "")))
          error = "Please enter a valid phone number (digits only)";
        break;
      case "city":
        if (!value.trim()) error = "City is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;
    }
    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      city: validateField("city", formData.city),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      return; // Stop if errors exist
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
        website: "",
      });

      // Optional: Redirect to Calendly after 2 seconds
      setTimeout(() => {
        // router.push("https://calendly.com/YOUR_LINK"); // Uncomment and add your link
        // For now, we just reset the form view after 5s as per previous logic,
        // but let's keep the user's prompt requirement structure in mind.
        // If the user provides a link, we would swap the logic below.

        setIsSubmitted(false); // Reset view to form
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Support",
      value: "connect@kartiksolar.in",
      subtext: "For quotes & subsidy inquiries",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Speak to an Expert",
      value: "+91 98970 12345",
      subtext: "Mon-Sat from 9am to 7pm",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Visit Our Office",
      value: "25/4, Rajpur Road",
      subtext: "Dehradun, Uttarakhand 248001",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Working Hours",
      value: "Mon - Sat: 9am - 7pm",
      subtext: "Sunday: Closed",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 font-medium rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Let&apos;s Start Your Solar Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Share your requirements with us, and our solar experts will provide
            a personalized solution tailored to your home, budget, and energy
            needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Talk to Our Team</h3>
              <p className="text-green-100 mb-8">
                Get expert advice on solar installation, subsidies, and savings.
              </p>

              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-green-100 text-sm">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                        <p className="text-green-200 text-sm">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <p className="text-3xl font-bold text-green-500">500+</p>
                <p className="text-slate-600 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <p className="text-3xl font-bold text-green-500">98%</p>
                <p className="text-slate-600 text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="John Doe"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                          } focus:ring-2 outline-none transition-all bg-slate-50 hover:bg-white`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="john@example.com"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                          } focus:ring-2 outline-none transition-all bg-slate-50 hover:bg-white`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Input */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                          } focus:ring-2 outline-none transition-all bg-slate-50 hover:bg-white`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* City Input (Replaces Subject) */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        City *
                      </label>
                      <div className="relative">
                        <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="New York"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                            errors.city
                              ? "border-red-500 focus:ring-red-500/20"
                              : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                          } focus:ring-2 outline-none transition-all bg-slate-50 hover:bg-white`}
                        />
                      </div>
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        placeholder="Tell us about your project or ask us a question..."
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-green-500 focus:ring-green-500/20"
                        } focus:ring-2 outline-none transition-all bg-slate-50 hover:bg-white resize-none`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 ml-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot Field (Hidden) */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute opacity-0 -z-10 w-0 h-0"
                    aria-hidden="true"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-green-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
