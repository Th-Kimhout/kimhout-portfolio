"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Github from "./icon/Github";
import Linkedin from "./icon/LinkedIn";
import Telegram from "./icon/Telegram";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-4 sm:px-8 py-4 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="font-medium text-2xl sm:text-3xl w-fit">
          Kimhout.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="font-light flex gap-6 xl:gap-8 text-lg xl:text-xl">
            <a
              href="#home"
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="group-hover:text-sky-400 transition-colors duration-300 ease-out">
                Home
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-blue-500 transition-transform origin-left duration-300 ease-out" />
            </a>

            <a
              href="#about"
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <span className="group-hover:text-sky-400 transition-colors">
                About
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-blue-500 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#projects"
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              <span className="group-hover:text-sky-400 transition-colors">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-blue-500 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#education"
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
            >
              <span className="group-hover:text-sky-400 transition-colors">
                Education
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-blue-500 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#skills"
              className="relative group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              <span className="group-hover:text-sky-400 transition-colors">
                Skills
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-blue-500 transition-transform origin-left duration-300" />
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="font-light flex gap-4 xl:gap-6">
            <Link
              href="/"
              className="relative cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Github width={24} height={24} className="xl:w-8 xl:h-8" />
            </Link>
            <Link
              href="/resume"
              className="relative group cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Telegram width={24} height={24} className="xl:w-8 xl:h-8" />
            </Link>
            <Link
              href="/contact"
              className="relative group cursor-pointer hover:opacity-70 transition-opacity"
            >
              <Linkedin width={24} height={24} className="xl:w-8 xl:h-8" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-slate-500/30">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#home"
              className="text-gray-300 hover:text-sky-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-sky-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-sky-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-sky-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-sky-400 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
            <div className="flex gap-4 pt-2 border-t border-slate-500/30">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                <Github width={24} height={24} />
              </Link>
              <Link
                href="/resume"
                className="hover:opacity-70 transition-opacity"
              >
                <Telegram width={24} height={24} />
              </Link>
              <Link
                href="/contact"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
