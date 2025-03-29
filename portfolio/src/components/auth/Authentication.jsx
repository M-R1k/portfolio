import React, { useState } from "react";
import { motion } from "framer-motion";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div id="authentication" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80">
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <motion.h2
          className="text-5xl font-extrabold text-gray-100 text-center tracking-wider pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Se connecter
        </motion.h2>        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cyan-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-cyan-400">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};