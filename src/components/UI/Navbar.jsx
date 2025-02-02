"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [btnColor, setBtnColor] = useState("border-white text-white");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    solutions: false,
    language: false,
  });
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [logoSrc, setLogoSrc] = useState(
    "https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
  );

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
        setLogoSrc(
          "https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
        );
      } else {
        setNavBg("bg-transparent");
        setTextColor("text-gray-200");
        setBtnColor("border-white text-white");
        setLogoSrc(
          "https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
        );
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
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoSrc} alt="Logo" className="h-5" />
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

          {/* Other Links */}
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
          <div className="relative group">
            <button
              className={`flex items-center gap-2 ${textColor} hover:text-blue-600 rounded-full border px-4 py-1`}
              onClick={() => toggleDropdown("language")}
            >
              <Globe size={16} />
              {
                languages.find((lang) => lang.code === selectedLanguage)?.label
              }{" "}
              <ChevronDown size={14} />
            </button>
            {dropdownOpen.language && (
              <div className="absolute right-0 mt-[1px] w-36 bg-white shadow-lg rounded-md py-2">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-md flex flex-col p-6 space-y-6 md:hidden"
          >
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            {["Solutions", "Services", "About"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-gray-800 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-800"
                onClick={() => toggleDropdown("language")}
              >
                <Globe size={16} /> Language <ChevronDown size={14} />
              </button>
              {dropdownOpen.language && (
                <div className="mt-2 bg-gray-100 rounded-md py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block px-4 py-2 w-full text-left"
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
