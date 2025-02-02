"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Globe, ChevronRight } from "lucide-react";

const languages = [
  { code: "en", label: "EN English" },
  { code: "th", label: "🇹🇭 Thai" },
  { code: "id", label: "🇮🇩 Bahasa" },
  { code: "tw", label: "🇨🇳 Chinese" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-gray-200");
  const [btnColor, setBtnColor] = useState("border-white text-white");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage") || "en";
    setSelectedLanguage(storedLang);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-white shadow-md");
        setTextColor("text-gray-800");
        setBtnColor("border-blue-600 bg-orange-500 text-white");
      } else {
        setNavBg("bg-transparent");
        setTextColor("text-gray-200");
        setBtnColor("border-white text-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("lang", lang);
    router.push(`${pathname}?${updatedParams.toString()}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
              alt="Logo"
              className="h-5"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/services" className={`${textColor} hover:text-blue-600`}>
            Services
          </Link>
          <Link href="/about" className={`${textColor} hover:text-blue-600`}>
            About
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className={`flex items-center gap-2 ${textColor} hover:text-blue-600`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Globe size={16} />{" "}
              {languages.find((lang) => lang.code === selectedLanguage)?.label}
              <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className={`hidden md:flex items-center gap-2 ${btnColor} border px-5 py-2 shadow`}
        >
          Contact Us <ChevronRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg md:hidden"
        >
          <div className="p-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-6 mt-10">
              <Link
                href="/services"
                className="text-gray-800 text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-800 text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>

              {/* Language Selection */}
              <div>
                <p className="text-gray-800 text-lg font-medium">Language</p>
                <div className="mt-2 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 bg-gray-100 rounded-md"
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setMenuOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="mt-4 block text-center bg-blue-600 text-white py-3 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
