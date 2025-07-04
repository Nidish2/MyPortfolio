"use client";

import type React from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Initialize EmailJS with your public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key not found in environment variables");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fixed handleSubmit function
  // Modified handleSubmit function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setSubmitError("");

    // Declare templateParams in the outer scope so it's accessible in catch

    let templateParams:
      | {
          from_name: string;

          from_email: string;

          to_name: string;

          subject: string;

          message: string;

          reply_to: string;

          timestamp: string;
        }
      | undefined = undefined;

    try {
      // Validate form data

      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email.trim())) {
        throw new Error("Please enter a valid email address");
      }

      // Check environment variables

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email service configuration is missing. Please contact the developer."
        );
      }

      // Clean and prepare template parameters

      templateParams = {
        from_name: formData.name.trim(),

        from_email: formData.email.trim(),

        to_name: "Nidish",

        subject: formData.subject?.trim() || "Contact Form Submission",

        message: formData.message.trim(),

        reply_to: formData.email.trim(),

        timestamp: new Date().toISOString(),
      };

      console.log("Sending email with EmailJS...");

      // Send email with proper error handling

      const response = await emailjs.send(
        serviceId,

        templateId,

        templateParams,

        {
          publicKey: publicKey,

          limitRate: {
            throttle: 10000, // 10 seconds between requests
          },
        }
      );

      console.log("Email sent successfully:", response.status, response.text);

      // Success state

      setFormSubmitted(true);

      setFormData({
        name: "",

        email: "",

        subject: "",

        message: "",
      });

      // Reset success message after 5 seconds

      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error: any) {
      console.error("Email submission error:", error);

      let errorMessage =
        "Failed to send message. Please try again or contact me directly.";

      // Handle EmailJS specific errors

      if (error && typeof error === "object") {
        const errorStr = error.toString().toLowerCase();

        const errorText = error.text?.toLowerCase() || "";

        const errorStatus = error.status;

        // Gmail API authentication error (main issue from your screenshots)

        if (
          errorStr.includes("authentication") ||
          errorStr.includes("scopes") ||
          errorText.includes("authentication") ||
          errorText.includes("insufficient")
        ) {
          errorMessage =
            "Email service authentication error. Please contact me directly at nidish2207@gmail.com";
        }

        // Rate limiting
        else if (
          errorStatus === 429 ||
          errorStr.includes("rate limit") ||
          errorStr.includes("too many")
        ) {
          errorMessage =
            "Too many requests. Please wait a moment and try again.";
        }

        // Network errors
        else if (
          errorStr.includes("network") ||
          errorStr.includes("fetch") ||
          !navigator.onLine
        ) {
          errorMessage =
            "Network error. Please check your internet connection and try again.";
        }

        // Service unavailable
        else if (errorStatus === 500 || errorStatus === 503) {
          errorMessage =
            "Email service temporarily unavailable. Please try again later.";
        }

        // Bad request
        else if (errorStatus === 400) {
          errorMessage =
            "Invalid request data. Please check your input and try again.";
        }

        // Forbidden
        else if (errorStatus === 403) {
          errorMessage =
            "Email service access denied. Please contact me directly at nidish2207@gmail.com";
        }

        // Custom validation errors
        else if (error.message && typeof error.message === "string") {
          errorMessage = error.message;
        }
      }

      // Handle string errors
      else if (typeof error === "string") {
        errorMessage = error;
      }

      setSubmitError(errorMessage);

      // Optional: Send fallback notification or log to external service

      console.error("Full error details:", {
        error: error,

        timestamp: new Date().toISOString(),

        formData: templateParams,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nidish2207@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8904316325" },
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Nidish2" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Get In Touch
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={itemVariants}>
            <motion.div
              className="p-8 h-full portfolio-card portfolio-card-light dark:portfolio-card-dark transition-all duration-500 relative overflow-hidden"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

              <motion.h3
                className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                whileHover={{
                  x: 5,
                  color: "#5e1fff",
                  transition: { duration: 0.2 },
                }}
              >
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-[rgba(30,30,60,0.4)] border border-gray-200 dark:border-white/10 transition-all duration-300"
                      whileHover={{
                        boxShadow: "0 8px 16px rgba(94, 31, 255, 0.2)",
                      }}
                    >
                      <motion.div
                        className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <item.icon size={20} />
                      </motion.div>
                      <div>
                        <motion.p
                          className="font-bold text-gray-900 dark:text-white"
                          whileHover={{ color: "#5e1fff" }}
                        >
                          {item.label}
                        </motion.p>
                        <motion.p
                          className="text-gray-700 dark:text-gray-100"
                          whileHover={{ color: "#2ee5ff" }}
                        >
                          {item.value}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <motion.h4
                  className="text-xl font-bold mb-4 text-gray-900 dark:text-white"
                  whileHover={{
                    x: 5,
                    color: "#5e1fff",
                    transition: { duration: 0.2 },
                  }}
                >
                  Connect With Me
                </motion.h4>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -8,
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white inline-block transition-all duration-300"
                        whileHover={{
                          boxShadow: "0 15px 30px rgba(94, 31, 255, 0.6)",
                        }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark transition-all duration-500 relative overflow-hidden"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(46, 229, 255, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

              <motion.h3
                className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
                whileHover={{
                  x: 5,
                  color: "#2ee5ff",
                  transition: { duration: 0.2 },
                }}
              >
                Send Me a Message
              </motion.h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/50 text-center"
                >
                  <motion.h4
                    className="text-xl font-bold mb-2 text-cyan-600 dark:text-cyan-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    Message Sent Successfully! 🎉
                  </motion.h4>
                  <motion.p
                    className="text-gray-700 dark:text-gray-100"
                    whileHover={{ color: "#5e1fff" }}
                  >
                    Thanks for reaching out! I'll get back to you within 24
                    hours.
                  </motion.p>
                </motion.div>
              ) : isMounted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {submitError}
                        </div>
                      </motion.div>
                    )}

                    {[
                      { name: "name", label: "Name", type: "text" },
                      { name: "email", label: "Email", type: "email" },
                      { name: "subject", label: "Subject", type: "text" },
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <motion.label
                          htmlFor={field.name}
                          className="block mb-2 font-medium text-gray-900 dark:text-white"
                          whileHover={{
                            x: 5,
                            color: "#5e1fff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {field.label}{" "}
                          {field.name !== "subject" && (
                            <span className="text-red-500">*</span>
                          )}
                        </motion.label>
                        <motion.input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.name !== "subject"}
                          className="w-full p-3 rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[rgba(30,30,60,0.4)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(94, 31, 255, 0.1)",
                          }}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.label
                        htmlFor="message"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                        whileHover={{
                          x: 5,
                          color: "#5e1fff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        Message <span className="text-red-500">*</span>
                      </motion.label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[rgba(30,30,60,0.4)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 3px rgba(94, 31, 255, 0.1)",
                        }}
                      ></motion.textarea>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-md flex items-center justify-center transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{
                          boxShadow: "0 15px 30px rgba(94, 31, 255, 0.6)",
                          y: -2,
                        }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <motion.svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </motion.svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Send size={18} className="mr-2" />
                            </motion.div>
                            Send Message
                          </span>
                        )}
                      </motion.button>
                    </motion.div>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-lg border border-gray-200 text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block"
                  >
                    <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full"></div>
                  </motion.div>
                  <p className="text-gray-600 mt-2">Loading form...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
