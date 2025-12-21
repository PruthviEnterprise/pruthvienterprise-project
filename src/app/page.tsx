// import Image from "next/image";
"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";
import Header from "@/_components/Header";
import React from "react";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";
import CTASection from "@/_components/CTASection";
import Testimonials from "@/_components/Testimonials";
import Pricing from "@/_components/Pricing";
import Team from "@/_components/Team";
import Stats from "@/_components/Stats";
import Features from "@/_components/Features";
import LogoSection from "@/_components/LogoSection";
import CountSection from "@/_components/CountSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= SEO + SCHEMA ================= */}
      <Head>
        <title>
          Pruthvi Enterprise | Reliable Business Solutions & Services in India
        </title>

        <meta
          name="description"
          content="Pruthvi Enterprise delivers reliable business solutions, manpower services, and operational support to help businesses grow efficiently and sustainably across India."
        />

        <meta
          name="keywords"
          content="Pruthvi Enterprise, business solutions, manpower services, enterprise services, business support India"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Pruthvi Enterprise | Trusted Business Solutions" />
        <meta
          property="og:description"
          content="Your trusted partner for professional business solutions, manpower services, and operational excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pruthvienterprise.com/" />
        <meta property="og:image" content="/puruthvienterprise/hero-img2.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pruthvi Enterprise | Reliable Business Solutions" />
        <meta
          name="twitter:description"
          content="Professional business solutions designed for efficiency, reliability, and growth."
        />
        <meta name="twitter:image" content="/puruthvienterprise/hero-img2.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.pruthvienterprise.com/" />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pruthvi Enterprise",
              "url": "https://www.pruthvienterprise.com",
              "logo": "https://www.pruthvienterprise.com/logo.png",
              "description":
                "Pruthvi Enterprise provides reliable business solutions, manpower services, and enterprise support across India.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/"
              ]
            })
          }}
        />
      </Head>
      {/* ================= SEO END ================= */}

      <div>
        <Header />

        <main>
          {/* HERO SECTION (H1 should be inside Hero component) */}
          <Hero />

          <LogoSection />

          {/* ABOUT SECTION */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#0EA5E9]/10 rounded-lg z-0"></div>
                  <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/puruthvienterprise/hero-img2.jpg"
                      alt="Professional business team collaboration"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#15999F] mb-3">
                    ABOUT US
                  </p>

                  {/* H2 */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Your Trusted Partner in{" "}
                    <span className="text-[#15999F]">
                      Reliable Business Solutions
                    </span>
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    At Pruthvi Enterprise, we provide dependable and result-oriented
                    business solutions that support smooth operations, improve
                    efficiency, and drive long-term growth.
                  </p>

                  <p className="text-muted-foreground mb-8">
                    Our commitment to quality service, timely delivery, and client
                    satisfaction ensures uninterrupted business workflows across
                    industries.
                  </p>

                  <Link href="/about">
                    <Button className="bg-[#15999F] hover:bg-[#15999F]/90 px-8 py-6 rounded-md">
                      Explore Our Journey
                    </Button>
                  </Link>

                  {/* STATS (H3) */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-foreground">500+</h3>
                      <p className="text-sm text-muted-foreground">
                        Businesses Supported
                      </p>
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-foreground">10+</h3>
                      <p className="text-sm text-muted-foreground">
                        Years of Trusted Service
                      </p>
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-foreground">40+</h3>
                      <p className="text-sm text-muted-foreground">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Features />
          {/* <Stats /> */}
          <CountSection />
          <Team />
          {/* <Pricing /> */}
          <Testimonials />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}
