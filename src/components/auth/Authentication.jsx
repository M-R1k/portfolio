import React, { useState } from "react";
import { motion } from "framer-motion";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div id="authentication" className="flex items-center justify-center min-h-screen dark:bg-gradient-to-br dark:from-blue-900 dark:via-black dark:to-purple-900 opacity-80">
      <div className="bg-gray-200 dark:bg-black dark:bg-opacity-70 p-8 rounded-lg shadow-2xl w-full max-w-md">   
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-500 dark:text-gray-200 text-center tracking-wider pb-6 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sign In
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-4 py-2 text-sm sm:text-base bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-2 text-sm sm:text-base bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              className="w-full py-3 px-4 text-sm sm:text-base lg:text-lg bg-green-500 dark:bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-cyan-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a
              href="#signup"
              className="font-semibold text-cyan-500 dark:text-cyan-400 hover:underline"
            >
              Sign Up
            </a>
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Forgot your password?{" "}
            <a
              href="#reset"
              className="font-semibold text-cyan-500 dark:text-cyan-400 hover:underline"
            >
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};