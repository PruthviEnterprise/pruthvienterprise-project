"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme as "light" | "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsScrollingUp(window.scrollY < lastScrollY || window.scrollY < 10);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="flex items-center text-lg font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="/puruthvienterprise/logo.png"
              alt="Zenith Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>

        <div className="flex">
          {/* Mobile: Dark Mode Toggle */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-transform transform hover:scale-130 hover:bg-transparent"
            >
              {!mounted ? null : theme === "light" ? (
                <MoonIcon className="h-6 w-6 text-gray-700 dark:text-white rounded-full" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-500 rounded-full" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 bg-white dark:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    <img
                      src="/puruthvienterprise/logo.png"
                      alt="Zenith Logo"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>

                <div className="mt-6 space-y-4">
                  <a
                    href="/"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors !border-b-2 !border-gray-400 py-2 ps-1.5 hover:!bg-[#15999F]"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors !border-b-2 !border-gray-400 py-2 ps-1.5 hover:!bg-[#15999F]"
                  >
                    About Us
                  </a>
                  <a
                    href="/founder"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors !border-b-2 !border-gray-400 py-2 ps-1.5 hover:!bg-[#15999F]"
                  >
                    Founder
                  </a>
                  <div className="space-y-1">
                    {/* Parent Item */}
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex justify-between w-full text-left text-lg font-medium text-gray-700 dark:text-gray-300 py-2 ps-1.5 hover:bg-[#15999F] transition-colors !border-b-2 !border-gray-400"
                    >
                      Our Businesses
                      {open ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>

                    {/* Submenu */}
                    {open && (
                      <div className="ms-3 flex flex-col space-y-1 animate-fadeIn">
                        <a
                          href="/manpower-services"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Manpower Services
                        </a>
                        <a
                          href="/event-management"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Event Management
                        </a>
                        <a
                          href="/fire-safety"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Fire Safety
                        </a>
                        <a
                          href="/health-supplies"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Health Supplies
                        </a>
                        <a
                          href="/furniture-materials"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Furniture Materials
                        </a>
                        <a
                          href="/electric-gadgets"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Electric Gadgets
                        </a>
                        <a
                          href="/stationery-materials"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Stationery Materials
                        </a>
                        <a
                          href="/media-marketing"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Media Marketing
                        </a>
                        <a
                          href="/video-production"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Video Production
                        </a>
                        <a
                          href="/design-printing"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Design Printing
                        </a>
                        <a
                          href="/outdoor-ads"
                          className="block text-base font-normal text-gray-600 dark:text-gray-400 py-2 hover:bg-[#15999F] transition-colors rounded-md"
                        >
                          {" "}
                          └ Outdoor Ads
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="/careers"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors !border-b-2 !border-gray-400 py-2 ps-1.5 hover:!bg-[#15999F]"
                  >
                    Careers
                  </a>
                  <a
                    href="/contact"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors !border-b-2 !border-gray-400 py-2 ps-1.5 hover:!bg-[#15999F]"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6">
                  <Link href="/contact">
                    <Button className="bg-[#15999F] hover:bg-[#15989f] dark:text-white transform hover:scale-105 transition-all cursor-pointer">
                      CONTACT US
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            href="/"
            className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/founder"
            className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors"
          >
            Founder
          </Link>

          {/* Our Businesses Dropdown */}
          <div className="relative group">
            <button className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors">
              Our Businesses
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-md mt-0 rounded-md min-w-[200px] z-50">
              <Link
                href="/businesses"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                All Businesses
              </Link>
              <Link
                href="/manpower-services"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Manpower Services
              </Link>
              <Link
                href="/event-management"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Event Management
              </Link>
              <Link
                href="/fire-safety"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Fire Safety
              </Link>
              <Link
                href="/health-supplies"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Health Supplies
              </Link>
              <Link
                href="/furniture-materials"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Furniture Materials
              </Link>
              <Link
                href="/electric-gadgets"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Electric Gadgets
              </Link>
              <Link
                href="/stationery-materials"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Stationery Materials
              </Link>
              <Link
                href="/media-marketing"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Media Marketing
              </Link>
              <Link
                href="/video-production"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Video Production
              </Link>
              <Link
                href="/design-printing"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Design Printing
              </Link>
              <Link
                href="/outdoor-ads"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Outdoor Ads
              </Link>
            </div>
          </div>

          <Link
            href="/careers"
            className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="block text-[18px] font-normal text-black dark:text-gray-300 hover:text-[#15999F] dark:hover:text-[#15999F] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Contact + Theme Toggle */}
        <div className="hidden lg:flex justify-around gap-7 ms-7">
          <Link href="/contact">
            <Button className="bg-[#15999F] hover:bg-[#15989f] dark:text-white transform hover:scale-105 transition-all cursor-pointer">
              CONTACT US
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="transform hover:scale-110 hover:bg-transparent rounded-full bg-gray-100 shadow-xl transition-all dark:bg-gray-800 cursor-pointer"
          >
            {!mounted ? null : theme === "light" ? (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-white rounded-full" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-500 rounded-full" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
