import React from "react";

const InnovationSection = () => {
  return (
    <section className="bg-gray-50 max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h2 className="font-semibold text-base md:text-lg text-center text-blue-500 mb-2">OUR PHILOSOPHY</h2>
      <p className="font-bold text-xl md:text-2xl lg:text-5xl text-center mb-10">Human-centred innovation</p>
      <div className="flex justify-center">
        <img
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
          alt="Innovation Process"
          className="w-full"
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-[#f8fcff] p-6 rounded-2xl shadow-md">
          <div className="flex justify-start mb-4">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format"
              alt="Full-suite solutions"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-lg font-semibold">Full-suite solutions</h3>
          <p className="text-gray-600 mt-2">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>

        <div className="bg-[#f8fcff] p-6 rounded-2xl shadow-md ">
          <div className="flex justify-staert mb-4">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format"
              alt="Simplify the complex"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-lg font-semibold">Simplify the complex</h3>
          <p className="text-gray-600 mt-2">
            Simplify complex processes and optimize your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>

        <div className="bg-[#f8fcff] p-6 rounded-2xl shadow-md">
          <div className="flex justify-start mb-4">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format"
              alt="Cutting-edge tech"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-lg font-semibold">Cutting-edge tech</h3>
          <p className="text-gray-600 mt-2">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
