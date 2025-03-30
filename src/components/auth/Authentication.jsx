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
      <div className="dark:bg-black dark:bg-opacity-70 p-8 rounded-lg shadow-2xl w-full max-w-md">   
        <motion.h2
          className="text-5xl font-extrabold text-green-500 dark:text-gray-200 text-center tracking-wider pb-4 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sign In
        </motion.h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-500 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-500 dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 dark:bg-gray-200 text-white dark:text-gray-800 font-semibold rounded-md shadow-md hover:bg-green-700 dark:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-gray-200"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};