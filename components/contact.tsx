"use client";

import type React from "react";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // At the beginning of your Contact component, add this state:
  const [isMounted, setIsMounted] = useState(false);

  // Add this useEffect hook after your state declarations:
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fixed handleSubmit function
  // Modified handleSubmit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a new FormData object
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append(
      "subject",
      formData.subject || "Contact Form Submission"
    );
    formDataObj.append("message", formData.message);

    // Add these hidden fields for FormSubmit.co configuration
    formDataObj.append("_captcha", "false"); // Disable captcha if you don't need it
    formDataObj.append("_template", "table"); // Use table template for better email formatting
    formDataObj.append("_replyto", formData.email); // Set reply-to as the submitter's email

    // Form submission to the formsubmit.co service using FormData instead of JSON
    fetch("https://formsubmit.co/nidish2207@gmail.com", {
      method: "POST",
      body: formDataObj, // Send as FormData
      // Don't set Content-Type header - let the browser set it with the boundary parameter
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          return Promise.resolve();
        }
        console.error("Form submission error, status:", response.status);
        return Promise.reject("Form submission failed");
      })
      .then(() => {
        // Handle success
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // You could add error state handling here
        alert(
          "There was an error sending your message. Please try again later."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nidish2207@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8904316325" },
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/Nidish2" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nidish-26929524b/",
    },
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
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold">{item.label}</p>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-bold mb-4">Connect With Me</h4>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white inline-block transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        <social.icon size={20} />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 rounded-lg border border-cyan-500/50 text-center"
                >
                  <h4 className="text-xl font-bold mb-2 text-cyan-300">
                    Message Sent!
                  </h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : isMounted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 font-medium"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      ></textarea>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full"
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 p-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-md flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
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
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send size={18} className="mr-2" />
                            Send Message
                          </span>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-lg border border-white/20 text-center">
                  <p>Loading form...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
