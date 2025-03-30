import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneInput } from "./PhoneInput";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setStatus("Please accept the privacy policy.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Your message was sent successfully, thank you!");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setAgreed(false);
      } else {
        setStatus("Error when sending message.");
      }
    } catch (error) {
      setStatus("Server Error.");
    }
  };

  return (
    <motion.footer
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 px-6 sm:px-12 lg:px-24 transition-colors duration-500 
                 bg-gradient-to-br from-white via-[#F2F5F9] to-[#E4E7EB] 
                 dark:bg-gradient-to-br dark:from-purple-900 dark:via-black dark:to-blue-900 opacity-90"
    >
      <div id="contact" className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-500 dark:text-gray-200 font-mono tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch!
        </motion.h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
          Feel free to reach out by filling out the form below. I’ll get back to you as soon as possible!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-3xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputField id="firstName" label="First Name" type="text" value={formData.firstName} onChange={handleChange} />
          <InputField id="lastName" label="Last Name" type="text" value={formData.lastName} onChange={handleChange} />
          <InputField id="company" label="Organization/Company" type="text" value={formData.company} onChange={handleChange} />
          <PhoneInput
            id="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          <MessageField id="message" label="Your Message" value={formData.message} onChange={handleChange} />
          
          <div className="flex items-center gap-x-4 sm:col-span-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 rounded bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500 focus:ring-cyan-500"
            />
            <label className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
              By checking this box, you agree to our{" "}
              <a href="#" className="font-semibold text-cyan-500 dark:text-cyan-400">privacy policies.</a>
            </label>
          </div>
        </div>

        <div className="mt-10">
          <motion.button
            type="submit"
            className="w-full rounded-md bg-yellow-400 px-4 py-3 text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-white shadow-md hover:bg-yellow-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </div>

        {status && (
          <div
            className={`mt-6 text-center px-4 py-3 rounded-md text-sm sm:text-base lg:text-lg ${
              status.includes("success")
                ? "bg-green-100 text-green-800 border border-green-400 dark:bg-green-700 dark:text-green-100"
                : "bg-red-100 text-red-800 border border-red-400 dark:bg-red-700 dark:text-red-100"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </motion.footer>
  );
};

const InputField = ({ id, label, type, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  </div>
);

const MessageField = ({ id, label, value, onChange }) => (
  <div className="sm:col-span-2">
    <label htmlFor={id} className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
      {label}
    </label>
    <div className="mt-2">
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-cyan-500"
      ></textarea>
    </div>
  </div>
);