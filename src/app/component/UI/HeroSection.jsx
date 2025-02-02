import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden -mt-20">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-600 opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 bg-cover bg-center" style={{ backgroundImage: "url(/path-to-your-overlay.png)" }}></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-6 py-24">
        {/* Text Content */}
        <div className="lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Embrace the future of finance</h1>
          <p className="text-lg mb-6">
            Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation.
          </p>
          <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all">
            Reach Out to Us ›
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&auto=format"
            width={600}
            height={400}
            alt="Businesswoman"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
