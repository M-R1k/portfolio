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
      setStatus("Veuillez accepter la politique de confidentialité.");
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
        setStatus("Your message was sent successfully, thank you !");
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-12 bg-gradient-to-r from-gray-900 to-black text-white"
    >
      <div id="contact" className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 dark:text-gray-200 font-mono tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact me !        
        </motion.h2>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputField id="firstName" label="Firstname" type="text" value={formData.firstName} onChange={handleChange} />
          <InputField id="lastName" label="Lastname" type="text" value={formData.lastName} onChange={handleChange} />
          <InputField id="company" label="Organization/Company" type="text" value={formData.company} onChange={handleChange} />
          {/* <InputField id="phoneNumber" label="Phone Number" type="tel" value={formData.phoneNumber} onChange={handleChange} /> */}
          <PhoneInput
            id="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          <MessageField id="message" label="Your message" value={formData.message} onChange={handleChange} />
          
          {/* <div className="flex items-center gap-x-4 sm:col-span-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 rounded bg-gray-700 border-gray-500 focus:ring-blue-500"
            />
            <label className="text-sm textgray-800 dark:text-gray-200">
              En cochant cette case, vous acceptez nos{" "}
              <a href="#" className="font-semibold text-blue-400">politiques de confidentialité.</a>
            </label>
            </div> */}
            </div>

        <div className="mt-10">
          <motion.button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons ensemble
          </motion.button>
        </div>

        {status && (
          <div
            className={`mt-4 text-center px-4 py-2 rounded-md ${
              status.includes("succès") || status.includes("success")
                ? "bg-red-700 text-red-100 border border-red-400"
                : "bg-green-700 text-green-100 border border-green-400"
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
    <label htmlFor={id} className="block text-sm font-semibold textgray-800 dark:text-gray-200">
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

const MessageField = ({ id, label, value, onChange }) => (
  <div className="sm:col-span-2">
    <label htmlFor={id} className="block text-sm font-semibold textgray-800 dark:text-gray-200">
      {label}
    </label>
    <div className="mt-2">
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-gray-800 text-white px-3 py-2 focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  </div>
);
