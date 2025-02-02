import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#031b38] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
            alt="Any Technology Logo"
            width={200}
            height={32}
            priority
          />
        </div>

        {/* Solutions Links */}
        <nav className="flex items-center space-x-6 text-[#12cdea] mt-4 md:mt-0">
          <Link href="#" className="hover:underline font-medium">
            Our Solutions
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="#" className="hover:underline">
            AnyCaaS
          </Link>
          <Link href="#" className="hover:underline">
            AnyBaaS
          </Link>
          <Link href="#" className="hover:underline">
            AnyPaaS
          </Link>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-3 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div>
            <span className="font-semibold text-white">
              ©2023 All rights reserved.
            </span>{" "}
            Any Technology Pte Ltd.
          </div>
          <Link href="#" className="text-[#1976d2] hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
