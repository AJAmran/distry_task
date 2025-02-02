"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [navBg, setNavBg] = useState("bg-transparent");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    solutions: false,
    language: false,
  });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50 ? "bg-white shadow-md" : "bg-transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div
            className="relative group"
            onMouseEnter={() =>
              setDropdownOpen({ ...dropdownOpen, solutions: true })
            }
            onMouseLeave={() =>
              setDropdownOpen({ ...dropdownOpen, solutions: false })
            }
          >
            <button className="flex items-center gap-1 text-gray-800 hover:text-blue-600">
              Solutions <ChevronDown size={16} />
            </button>
            {dropdownOpen.solutions && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                <Link
                  href="/anycass"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  AnyCass
                </Link>
                <Link
                  href="/anybasss"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  AnyBasss
                </Link>
                <Link
                  href="/anypass"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  AnyPass
                </Link>
              </div>
            )}
          </div>
          <Link href="/services" className="text-gray-800 hover:text-blue-600">
            Services
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>

          {/* Language Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() =>
              setDropdownOpen({ ...dropdownOpen, language: true })
            }
            onMouseLeave={() =>
              setDropdownOpen({ ...dropdownOpen, language: false })
            }
          >
            <button className="text-gray-800 hover:text-blue-600 rounded-md bg-slate-300 px-3 py-1">
              Language
            </button>
            {dropdownOpen.language && (
              <div className="absolute left-0 mt-2 w-24 bg-white shadow-lg rounded-md py-2">
                <Link
                  href="?lang=en"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  English
                </Link>
                <Link
                  href="?lang=th"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Thai
                </Link>
                <Link
                  href="?lang=id"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Indonesian
                </Link>
                <Link
                  href="?lang=tw"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Taiwanese
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
