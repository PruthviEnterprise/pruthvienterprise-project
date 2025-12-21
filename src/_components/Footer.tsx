import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-secondary/20 pt-16 pb-8 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="mb-4">
              <a href="#" className="text-xl font-bold text-primary">
                <img
                  src="/puruthvienterprise/logo.png"
                  alt="Zenith Logo"
                  className="h-20 w-auto"
                />
              </a>
            </div>
            <p className="text-muted-foreground mb-6">
            We help businesses streamline their operations and achieve sustainable growth through reliable, innovative, and result-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16iHkJTu5V/"
                target="_blank"
                rel="nofollow"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/dipeshkharsan/"
                target="_blank"
                rel="nofollow"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.threads.com/@pruthvi.enterprise"
                target="_blank"
                rel="nofollow"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  aria-label="Threads"
                  className="h-4"
                  fill="var(--icon-primary)"
                  role="img"
                  viewBox="0 0 192 192"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#15999F]">
              Company
            </h4>
            <ul className="space-y-2">
            <li>
                {" "}
                <Link
                  href="/"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/about"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/founder"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Founder
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/businesses"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Businesses
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/careers"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="contact"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#15999F]">
              Our Businesses
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/manpower-services"
                 className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Manpower Services
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  href="/fire-safety"
                 className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fire Safety
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/health-supplies"
               className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Health Supplies
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/furniture-materials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Furniture Materials
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/electric-gadgets"
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Electric Gadgets
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/stationery-materials"
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Stationery Materials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#15999F]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a
                  href="mailto:pruthvienterprise0707@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  pruthvienterprise0707@gmail.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a
                  href="tel:9925559059"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  9925559059
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a
                  href="tel:9925559059"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  7990305552
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <address className="text-muted-foreground not-italic">
                  Shop No 23, City Center, Saduji Vas, Thara, Banaskantha,
                  Gujarat-385555.
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pruthvi Enterprise. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
