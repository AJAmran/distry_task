"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "Customer focused",
    key: "customer",
    content: "Purpose-built financial services",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  {
    label: "Agile and adaptable for growth",
    key: "agile",
    content: "Adaptive financial solutions",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimize your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format",
  },
  {
    label: "Compliance ready",
    key: "compliance",
    content: "Regulatory-compliant services",
    description1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format",
  },
  {
    label: "Secure and safe",
    key: "secure",
    content: "Financial data security",
    description1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    description2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&auto=format",
  },
];

export default function FinanceSlider() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % tabs.length);
      setActiveTab(tabs[(index + 1) % tabs.length].key);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-12 py-12 mx-auto">
      <h5 className="text-center text-blue-500 font-medium uppercase tracking-wide text-lg md:text-xl">
        Technology Built For You
      </h5>
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 my-4">
        The Future of Finance
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveTab(tab.key);
              setIndex(tabs.findIndex((t) => t.key === tab.key));
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-10 p-6 md:p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1 text-center md:text-left">
          <h6 className="text-blue-500 text-sm font-bold uppercase tracking-wide">
            {tabs.find((tab) => tab.key === activeTab).label}
          </h6>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
            {tabs.find((tab) => tab.key === activeTab).content}
          </h3>
          <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
            {tabs.find((tab) => tab.key === activeTab).description1}
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
            {tabs.find((tab) => tab.key === activeTab).description2}
          </p>
        </div>
        <img
          src={tabs.find((tab) => tab.key === activeTab).image}
          alt="Finance"
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
      </motion.div>
    </div>
  );
}
