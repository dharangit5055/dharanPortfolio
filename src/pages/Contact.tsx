import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import emailjs from "emailjs-com";
import {
  EmailIcon,
  GitHubIcon,
  InstaIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  ThunderIcon,
  TwitterIcon,
} from "../assets/icons/icons";
import { SOCIAL_LINKS } from "../constants/constants";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS service to send the form data to your email
      // You'll need to sign up at emailjs.com, create a service and template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Replace these with your actual EmailJS credentials
      const serviceID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
      const templateID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
      const userID = "YOUR_USER_ID"; // Get from EmailJS dashboard

      // This requires adding the EmailJS library to your project:
      // npm install emailjs-com
      // Also import at the top of your file: import emailjs from 'emailjs-com';

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );

      if (response.status === 200) {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Email error:", error);
      setFormStatus({
        type: "error",
        message:
          "An error occurred. Please try again or contact directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch for collaborations or opportunities"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {formStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl ${
                  formStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="dharaneeshna@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="job">Job Opportunity</option>
                  <option value="project">Project Collaboration</option>
                  <option value="question">Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <EmailIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:dharaneeshna@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      dharaneeshna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <a
                      href="tel:+919655439439"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +91 96554 39439
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <LocationIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Coimbatore, Tamilnadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="flex space-x-6">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>

                <a
                  href={SOCIAL_LINKS.twitterX}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <InstaIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl shadow-md p-8 text-white">
              <div className="flex items-center mb-4">
                <ThunderIcon className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Quick Response</h3>
              </div>
              <p className="text-blue-100">
                I typically respond to all messages within 24 hours. Feel free
                to reach out anytime!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
