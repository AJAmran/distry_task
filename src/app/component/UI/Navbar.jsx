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
  const [navBg, setNavBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-gray-200");
  const [btnColor, setBtnColor] = useState("border-white text-black");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    solutions: false,
    language: false,
  });
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
        setBtnColor("border-blue-600 text-blue-600");
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

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
              alt="Logo"
              className="h-5"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Solutions Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("solutions")}
            onMouseLeave={() => toggleDropdown("solutions")}
          >
            <button
              className={`flex items-center gap-1 ${textColor} hover:text-blue-600`}
            >
              Solutions <ChevronDown size={16} />
            </button>
            {dropdownOpen.solutions && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                {["AnyCass", "AnyBasss", "AnyPass"].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Menu Links */}
          {["Services", "About"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className={`${textColor} hover:text-blue-600`}
            >
              {item}
            </Link>
          ))}

          {/* Language Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => toggleDropdown("language")}
            onMouseLeave={() => toggleDropdown("language")}
          >
            <button
              className={`flex items-center gap-2 ${textColor} hover:text-blue-600 rounded-full border px-4 py-1`}
            >
              <Globe size={16} />
              {
                languages.find((lang) => lang.code === selectedLanguage)?.label
              }{" "}
              <ChevronDown size={14} />
            </button>
            {dropdownOpen.language && (
              <div className="absolute right-0 mt-[1px] w-36 bg-white shadow-lg rounded-md py-2 text-left">
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
          className={`hidden md:flex items-center gap-2 ${btnColor} border text-white px-5 py-2 shadow hover:bg-blue-700 transition`}
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
    </nav>
  );
};

export default Navbar;
