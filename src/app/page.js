'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-white text-black">
      <motion.h1
        className="text-6xl font-extrabold text-green-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Finding Finance Association
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Democratizing Finance Industry Education for Students
      </motion.p>
    </main>
  );
}