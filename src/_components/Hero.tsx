import { Button } from "@/components/ui/button";
import {
  Facebook,
  Star,
  Instagram,
} from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="py-32 lg:py-30 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-md bg-sky-100 text-sky-800 text-sm font-medium mb-6 animate-fade-in">
              Strategize & Succeed
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-3 animate-fade-in delay-100">
              Welcome to{" "}
              <span className="text-primary">Pruthvi Enterprise</span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in delay-100">
              Your Requirement, Our Responsibility.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in delay-200">
              We deliver high-quality services, streamlined support, and
              reliable resources designed to strengthen your business operations
              and elevate your professional performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in delay-300">
              <Link href="/contact" className="cursor-pointer">
                <Button className="px-8 py-6 rounded-md text-base font-medium bg-primary hover:bg-primary/90 text-white">
                  CONTACT US
                </Button>
              </Link>

              <Link href="/businesses" className="cursor-pointer">
              <Button
                variant="outline"
                className="px-8 py-6 rounded-md text-base font-medium text-primary border-primary border"
              >
                Explore Our Services
              </Button>
              </Link>
            </div>

            {/* Social Media */}
            <div className="animate-fade-in delay-400">
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                Follow Us On:
              </p>
              <div className="flex space-x-5">
                <Link
                  href="https://www.facebook.com/share/16iHkJTu5V/"
                  target="_blank"
                  rel="nofollow"
                  className="text-gray-500 hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/pruthvi.enterprise?igsh=MTk1djQ5cGtxY2g="
                  target="_blank"
                  rel="nofollow"
                  className="text-gray-500 hover:text-primary"
                  aria-label="Facebook"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.threads.com/@pruthvi.enterprise"
                  target="_blank"
                  rel="nofollow"
                  aria-label="Threads"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 192"
                    fill="currentColor"
                    className="w-5 h-5"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            {/* Main image with frame */}
            <div className="relative bg-sky-100 p-6 rounded-3xl animate-fade-in-right">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/puruthvienterprise/hero-img.jpg"
                  alt="Business team meeting"
                  className="w-full h-auto object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Rating card */}
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-64 animate-fade-in delay-200">
                <div className="flex space-x-1 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">4/5</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  From over 1500 reviews
                </p>
              </div>

              {/* Satisfied customers card */}
              <div className="absolute -bottom-10 -left-5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md animate-fade-in delay-300">
                <p className="font-medium mb-3">Satisfied Customers</p>
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                    alt="Customer"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                    alt="Customer"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/26.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                    alt="Customer"
                  />
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-[#0EA5E9] text-white text-xs font-medium">
                    50+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
