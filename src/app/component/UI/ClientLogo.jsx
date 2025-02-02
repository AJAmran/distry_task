"use client"

import React from "react";
import { motion } from "framer-motion";
import { Client } from "@/utils/data";

const ClientLogo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Client.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-w-[120px] h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
