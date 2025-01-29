

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { t, i18n } = useTranslation(); // Include 't' for translation
  const isRTL = i18n.language === "ar";

  const toggleNav = () => setIsNavVisible((prev) => !prev);

  const toggleLanguage = () => {
    i18n.language === "ar" ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
    document.documentElement.dir = isRTL ? "ltr" : "rtl"; // Update the 'dir' attribute
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="toxo"  width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Main Navigation">
              <ul className={`flex items-center gap-6 text-sm font-medium ${isRTL ? "flex-row-reverse" : ""}`}>
                <li>
                  <Link to="/" className="text-gray-600 transition hover:text-gray-800">
                    {t("navbar.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-600 transition hover:text-gray-800">
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 transition hover:text-gray-800">
                    {t("navbar.privacy")}
                  </Link>
                </li>
                <li>
                  <Link to="/term&Condition" className="text-gray-600 transition hover:text-gray-800">
                    {t("navbar.terms")}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 transition hover:text-gray-800">
                    {t("navbar.blogs")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div dir="ltr" className={`hidden md:flex items-center gap-4 `}>
            <button
              onClick={toggleLanguage}
              className="px-5 py-2 flex items-center text-md font-medium text-[#4D1A2D] rounded-md transition hover:bg-[#4D1A2D] hover:text-white"
            >
              <MdOutlineLanguage />
              <span className="ml-2">{t("navbar.language")}</span>
            </button>
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-medium text-[#4D1A2D] border border-[#4D1A2D] rounded-md transition hover:bg-[#4D1A2D] hover:text-white"
            >
              {t("navbar.login")}
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 text-sm font-medium text-white bg-[#4D1A2D] rounded-md shadow-md transition hover:bg-[#4D1A2D]"
            >
              {t("navbar.signup")}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              aria-expanded={isNavVisible}
              aria-controls="mobile-menu"
              className="p-2 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isNavVisible && (
          <nav
            id="mobile-menu"
            className={`absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden ${
              isRTL ? "text-right" : "text-left"
            }`}
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
              <li>
                <Link to="/" className="block text-gray-600 transition hover:text-gray-800">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="block text-gray-600 transition hover:text-gray-800">
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="block text-gray-600 transition hover:text-gray-800">
                  {t("navbar.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/term&Condition" className="block text-gray-600 transition hover:text-gray-800">
                  {t("navbar.terms")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="block text-gray-600 transition hover:text-gray-800">
                  {t("navbar.blogs")}
                </Link>
              </li>
              <li className="mt-4">
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center gap-1  w-full  text-center px-5 py-2 text-sm font-medium text-[#4D1A2D] border border-[#4D1A2D] rounded-md transition hover:bg-[#4D1A2D] hover:text-white`}
                >
                  <MdOutlineLanguage />
                  <span className="ml-2">{t("navbar.language")}</span>
                </button>
              </li>
              <li className="mt-4">
                <Link
                  to="/login"
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-[#4D1A2D] border border-[#4D1A2D] rounded-md transition hover:bg-[#4D1A2D] hover:text-white"
                >
                  {t("navbar.login")}
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block w-full text-center px-5 py-2 text-sm font-medium text-white bg-[#4D1A2D] rounded-md shadow-md transition hover:bg-[#4D1A2D]"
                >
                  {t("navbar.signup")}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
