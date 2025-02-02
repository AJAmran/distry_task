"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function AnimatedStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center"
    >
      <h5 className="text-blue-600 font-semibold uppercase tracking-wide mb-6">
        Trusted by the Best
      </h5>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-blue-600">
            <span className="text-4xl">&gt;</span>
            {inView && <CountUp end={20} duration={3} />}
          </h2>
          <p className="text-gray-600 mt-2 text-base font-semibold">
            Years of Experience
          </p>
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-blue-600">
            {inView && <CountUp end={40} duration={3} />}+
          </h2>
          <p className="text-gray-600 mt-2 text-base font-semibold">
            Financial Institutions
          </p>
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-blue-600">
            <span className="text-4xl">&gt;</span>
            {inView && <CountUp end={200} duration={3} />}m
          </h2>
          <p className="text-gray-600 mt-2 text-base font-semibold">
            Customers Each
          </p>
        </div>
      </motion.div>
    </div>
  );
}
