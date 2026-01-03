"use client";

import {
  GraduationCap,
  Trophy,
  Award,
  BadgeCheck,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Image from "next/image";
import Head from "next/head";

const Founder = () => {
  return (
    <>
      <Head>
        <title>
          Founder of Pruthvi Enterprise | Vision, Leadership & Trust
        </title>

        <meta
          name="description"
          content="Learn about the founder of Pruthvi Enterprise and the leadership values behind our success. Built on trust, integrity, and client-focused business solutions."
        />

        <meta
          name="keywords"
          content="Founder of Pruthvi Enterprise, Dipesh Chaudhury, business leadership India, company founder, Pruthvi Enterprise management, trusted business group Gujarat"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Founder of Pruthvi Enterprise – Vision & Leadership"
        />
        <meta
          property="og:description"
          content="Discover the leadership behind Pruthvi Enterprise and how strong values, trust, and commitment drive our business success."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/founder"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Founder of Pruthvi Enterprise" />
        <meta
          name="twitter:description"
          content="Leadership and vision that shape Pruthvi Enterprise into a trusted business services provider."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.pruthvienterprise.in/founder" />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dipesh Chaudhury",
              jobTitle: "Founder – Pruthvi Enterprise",
              worksFor: {
                "@type": "Organization",
                name: "Pruthvi Enterprise",
                url: "https://www.pruthvienterprise.in",
              },
              url: "https://www.pruthvienterprise.in/founder",
              description:
                "Dipesh Chaudhury is the founder of Pruthvi Enterprise, leading the company with a strong focus on trust, quality service, and long-term business growth.",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-950/30 dark:via-background dark:to-sky-950/5 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          <div className="container mx-auto px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-6">
                  OUR STORY
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Meet Our <span className="!text-primary">Visionary</span>{" "}
                  Founders
                </h1>
                <p className="text-lg text-muted-foreground mb-4 md:pr-12">
                  Pruthvi Enterprise was founded with a clear purpose — to
                  deliver dependable services, build lasting client
                  relationships, and grow through trust and quality. Under the
                  leadership of{" "}
                  <span className="font-bold text-primary">
                    Dipesh Chaudhury
                  </span>
                  , the company continues to move forward with integrity,
                  innovation, and commitment.
                </p>
                <div className="animate-fade-in delay-400 mb-8">
                  {/* <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  Follow Us On:
                </p> */}
                  <div className="flex space-x-5">
                    <a
                      href="https://www.facebook.com/share/16iHkJTu5V/"
                      target="_blank"
                      rel="nofollow"
                      className="text-gray-500 hover:text-primary"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/dipeshkharsan/"
                      target="_blank"
                      rel="nofollow"
                      className="text-gray-500 hover:text-primary"
                      aria-label="Facebook"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
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
                    </a>
                  </div>
                </div>
                <Button className="rounded-full bg-primary hover:bg-primary-700 text-white px-8 py-6 h-auto text-lg">
                  Learn More
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/puruthvienterprise/dipesh.jpg"
                  alt="Dipesh Chaudhary"
                  className="rounded-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-12">
                <div className="group hover:scale-[1.02] transition-all p-6 rounded-2xl bg-gradient-to-br from-sky-50/50 via-white to-sky-50/50 dark:from-sky-950/30 dark:via-background/80 dark:to-sky-950/30 border border-sky-100/50 dark:border-sky-900/50 shadow-lg">
                  <div className="flex gap-6">
                    <img
                      src="/puruthvienterprise/di-sm.png"
                      alt="Dipesh Chaudhury"
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Dipesh Chaudhury
                      </h3>
                      <p className="text-primary dark:text-primary font-medium mb-3">
                        Founder – Pruthvi Enterprise
                      </p>
                      <p className="text-muted-foreground">
                        With hands-on industry experience and a strong
                        client-focused approach, Dipesh Chaudhury leads Pruthvi
                        Enterprise with clarity, responsibility, and a long-term
                        vision for sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-[1.02] transition-all p-6 rounded-2xl bg-gradient-to-br from-sky-50/50 via-white to-sky-50/50 dark:from-sky-950/30 dark:via-background/80 dark:to-sky-950/30 border border-sky-100/50 dark:border-sky-900/50 shadow-lg">
                  <div className="flex gap-6">
                    {/* <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Sarah Johnson"
                    className="w-24 h-24 rounded-xl object-cover"
                  /> */}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Message from the Founder
                      </h3>
                      <p className="text-muted-foreground">
                        “My aim is simple — to create a business that clients
                        can trust without hesitation. At Pruthvi Enterprise, we
                        focus on quality work, honest communication, and
                        long-term partnerships rather than short-term gains.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-card shadow-lg border border-gray-100 dark:border-gray-800">
                    <Trophy className="w-10 h-10 text-primary dark:text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Industry Experience
                    </h3>
                    <p className="text-muted-foreground">
                      Years of practical experience delivering reliable and
                      efficient business services across multiple sectors.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-card shadow-lg border border-gray-100 dark:border-gray-800">
                    <GraduationCap className="w-10 h-10 text-primary dark:text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Client-Centric Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Focused on understanding client needs and providing
                      customized, result-driven solutions.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-card shadow-lg border border-gray-100 dark:border-gray-800">
                    <Award className="w-10 h-10 text-primary dark:text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Quality Commitment
                    </h3>
                    <p className="text-muted-foreground">
                      Maintaining consistent service standards through hands-on
                      management and strict quality checks.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-card shadow-lg border border-gray-100 dark:border-gray-800">
                    <BadgeCheck className="w-10 h-10 text-primary dark:text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Trust & Reliability
                    </h3>
                    <p className="text-muted-foreground">
                      Built on transparency, accountability, and long-term
                      client relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-950/30 dark:via-background dark:to-sky-950/5">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-lg text-muted-foreground">
                At Pruthvi Enterprise, we believe growth should be steady,
                ethical, and sustainable. Our vision is to expand services while
                maintaining the core values that define our foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">
                  Innovation with Purpose
                </h3>
                <p className="text-muted-foreground">
                  Adopting modern methods and efficient processes to deliver
                  better outcomes for our clients.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">Client Success</h3>
                <p className="text-muted-foreground">
                  Measuring our success through client satisfaction, repeat
                  business, and long-term collaboration.
                </p>
              </div>

              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">
                  Sustainable Growth
                </h3>
                <p className="text-muted-foreground">
                  Building a strong, dependable organization that grows
                  responsibly and creates value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Founder;
