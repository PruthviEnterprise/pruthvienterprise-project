"use client";

import { useEffect } from "react";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import TeamSection from "@/_components/TeamSection";
import TestimonialsSection from "@/_components/TestimonialsSection";
import Image from "next/image";
import {
  ChartLine,
  FileText,
  Wrench,
  Users,
  RotateCw,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Features from "@/_components/Features";
import LogoSection from "@/_components/LogoSection";
import CTASection from "@/_components/CTASection";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    icon: <ChartLine size={32} className="text-sky-500 mb-2" />,
    title: "Strategic Planning Services",
    desc: "Developing strategies for long-term business growth, including market entry and expansion plans.",
  },
  {
    icon: <FileText size={32} className="text-sky-500 mb-2" />,
    title: "Market Research & Analysis",
    desc: "In-depth research into industry trends, customer needs, and competitor activity.",
  },
  {
    icon: <FileText size={32} className="text-sky-500 mb-2" />,
    title: "Financial Consulting",
    desc: "Analysis and guidance on financial performance, budgeting, and investment strategies.",
  },
  {
    icon: <Wrench size={32} className="text-sky-500 mb-2" />,
    title: "Operations Improvement",
    desc: "Process reengineering and workflow optimization to boost business efficiency and productivity.",
  },
  {
    icon: <Users size={32} className="text-sky-500 mb-2" />,
    title: "Organizational Development",
    desc: "Enhancing company culture, leadership development, and talent management.",
  },
  {
    icon: <RotateCw size={32} className="text-sky-500 mb-2" />,
    title: "Change Management",
    desc: "Guiding organizations through periods of transformation and handling resistance to change.",
  },
];

const features = [
  "Strategic expertise",
  "Industry overview",
  "Actionable analytics",
  "Continuous partnership",
  "Measurable results",
  "Solution-oriented approach",
  "Holistic growth strategies",
  "Market leader alignment",
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>
          Our Businesses | Pruthvi Enterprise – Complete Business Solutions
        </title>

        <meta
          name="description"
          content="Explore all business services by Pruthvi Enterprise including manpower services, fire safety, health supplies, event management, media marketing, furniture, printing, and more."
        />

        <meta
          name="keywords"
          content="Pruthvi Enterprise services, manpower services, fire safety, health supplies, event management, media marketing, printing, office supplies, business solutions India"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Businesses – Pruthvi Enterprise"
        />
        <meta
          property="og:description"
          content="Discover Pruthvi Enterprise’s complete range of professional business services designed to help companies grow, operate efficiently, and succeed."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/our-businesses"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Businesses – Pruthvi Enterprise"
        />
        <meta
          name="twitter:description"
          content="Multiple business services under one trusted company – manpower, safety, marketing, supplies, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.pruthvienterprise.in/our-businesses"
        />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pruthvi Enterprise",
              url: "https://www.pruthvienterprise.in",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Business Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Manpower & Placement Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Event Management",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fire Safety Solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Health Supplies",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Furniture Materials",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Electric Gadgets",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Stationery Materials",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Media Marketing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Video Production",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Design & Printing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Outdoor Advertising",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-background">
        <Header />

        {/* Hero */}
        <section className="relative w-full h-[320px] bg-[#15999F] overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/puruthvienterprise/bus-bg.jpg')] bg-cover bg-center opacity-20"
            style={{ backgroundBlendMode: "overlay" }}
          ></div>
          <div className="container relative z-10 h-full flex flex-col justify-center items-center mx-auto">
            <h1 className="text-5xl font-bold text-white mb-2">
              Our Businesses
            </h1>
            <p className="text-lg text-white/80">
              <span className="border-r border-white/50 pr-3 mr-3">Home</span>
              <span>Our Businesses</span>
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <Features />

        {/* We Can Help Section */}
        <section className="bg-sky-50 dark:bg-sky-950/10 py-16 md:py-24">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-medium mb-3">
                  Why Choose Us
                </div>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-5">
                  We Can Help You To{" "}
                  <span className="text-primary">Grow Your Business</span>
                </h2>
                <p className="mb-6 text-muted-foreground text-base">
                  Unlock your company's full potential with our expert business
                  strategies, actionable insights, and a partnership built on
                  trust.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mb-8">
                  {[
                    "Strategic expertise",
                    "Industry overview",
                    "Actionable analytics",
                    "Continuous partnership",
                    "Measurable results",
                    "Solution-oriented approach",
                    "Holistic growth strategies",
                    "Market leader alignment",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-6 w-6 text-[#15999F] flex-shrink-0" />
                      <p className="font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="px-6 py-2 bg-primary hover:bg-primary-400 text-white rounded-md font-semibold">
                    CONTACT US
                  </Button>
                </Link>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="relative">
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg z-0"></div>
                    <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/puruthvienterprise/about.jpg"
                        alt="Business consultant"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LogoSection />
        <CTASection />

        <Footer />
      </div>
    </>
  );
}
