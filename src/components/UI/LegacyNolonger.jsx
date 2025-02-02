"use client";

import { motion } from "framer-motion";

export default function LegacyHeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col gap-4">
          <motion.div
            animate={{ x: [0, 50, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 "
          />
        </div>
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-4xl font-bold md:text-5xl">Legacy no longer</h1>
          <p className="mt-4 text-lg md:text-xl">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <div className="mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-lg font-medium rounded-lg shadow-lg">
              Contact Us ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
