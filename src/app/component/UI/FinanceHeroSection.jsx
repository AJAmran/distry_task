import Image from "next/image";

export default function FinanceHeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Left Side Content */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-blue-600 font-bold uppercase tracking-widest text-base">
          Powering the Future of Finance
        </p>
        <h1 className="text-3xl md:text-5xl text-gray-900 mt-4 leading-tight font-extrabold ">
          Uncovering New <br className="hidden md:block" />Ways  to Delight
          Customers
        </h1>
        <p className="text-gray-700 font-medium mt-6 leading-relaxed text-base">
          <strong>AnyTech</strong> is revolutionizing financial technology by
          introducing innovative real-time transaction processing capabilities
          for retail financial services.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Our modern approach surpasses traditional banking systems, empowering
          you with the latest technology for lasting success.
        </p>
      </div>

      {/* Right Side - Main Image with Floating Elements */}
      <div className="relative w-full max-w-lg">
        {/* Main Image */}
        <div className="relative rounded-xl shadow-xl overflow-hidden">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
            alt="Businesswoman using tablet"
            width={500}
            height={500}
            className="rounded-xl w-full h-auto"
            priority
          />
        </div>

        {/* Floating Images (Replaced Icons) */}
        <div className="absolute -top-6 -left-6 md:top-20 md:-left-10 animate-pulse">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
            alt="Floating Icon 1"
            width={80}
            height={80}
            className="drop-shadow-lg"
          />
        </div>

        <div className="absolute bottom-8 left-6 md:bottom-48 md:left-20 animate-bounce">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
            alt="Floating Icon 2"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </div>

        <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 animate-spin-slow">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
            alt="Floating Icon 3"
            width={120}
            height={120}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
