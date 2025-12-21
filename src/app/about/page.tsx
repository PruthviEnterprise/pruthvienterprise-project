"use client";

import Head from "next/head";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import { BarChart3, LineChart, Users, CheckCircle } from "lucide-react";
import LogoSection from "@/_components/LogoSection";
import Testimonials from "@/_components/Testimonials";
import Link from "next/link";
const About = () => {
  return (
    <>
    {/* ================= SEO + SCHEMA ================= */}
    <Head>
        <title>
          About Pruthvi Enterprise | Trusted Business & Workforce Solutions
        </title>

        <meta
          name="description"
          content="Learn about Pruthvi Enterprise – a trusted partner delivering reliable business support, manpower solutions, and operational services to help organizations grow efficiently across India."
        />

        <meta
          name="keywords"
          content="About Pruthvi Enterprise, business consultancy India, manpower solutions company, workforce services India"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Pruthvi Enterprise" />
        <meta
          property="og:description"
          content="Pruthvi Enterprise empowers businesses with smart solutions, manpower services, and long-term operational support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pruthvienterprise.com/about" />
        <meta property="og:image" content="/puruthvienterprise/about.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Pruthvi Enterprise" />
        <meta
          name="twitter:description"
          content="Reliable business consultancy and workforce solutions for sustainable growth."
        />
        <meta name="twitter:image" content="/puruthvienterprise/about.jpg" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.pruthvienterprise.com/about"
        />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Pruthvi Enterprise",
              "url": "https://www.pruthvienterprise.com/about",
              "description":
                "Pruthvi Enterprise provides dependable manpower services, business consultancy, and operational support across India.",
              "publisher": {
                "@type": "Organization",
                "name": "Pruthvi Enterprise",
                "url": "https://www.pruthvienterprise.com"
              }
            })
          }}
        />
      </Head>
      {/* ================= SEO END ================= */}
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full h-[320px] bg-[#15999F] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/puruthvienterprise/bus-bg.jpg')] bg-cover bg-center opacity-20"
          style={{ backgroundBlendMode: "overlay" }}
        ></div>
        <div className="container relative z-10 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-5xl font-bold text-white mb-2">About Us</h1>
          <p className="text-lg text-white/80">
            <span className="border-r border-white/50 pr-3 mr-3">Home</span>
            <span>About Us</span>
          </p>
        </div>
      </section>

      {/* Trusted Advisors Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#0EA5E9]/10 rounded-lg z-0"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/puruthvienterprise/hero-img2.jpg"
                  alt="Team collaborating"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-[#15999F] mb-3">
                ABOUT US
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Reliable Partner in Business &{" "}
                <span className="text-[#15999F]">Workforce Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                At Pruthvi Enterprise, we help businesses grow stronger by
                providing dependable manpower solutions and essential business
                services. In today’s fast-moving and competitive environment,
                organizations need partners they can trust — and that’s where we
                come in.
              </p>
              <p className="text-muted-foreground mb-8">
                Built on strong values of commitment, transparency, and
                performance, Pruthvi Enterprise works closely with clients to
                understand their requirements and deliver solutions that create
                real, measurable impact. Our focus is not just to supply
                services, but to support long-term business success.
              </p>
              <Link href="/businesses">
                <Button className="bg-[#15999F] hover:bg-[#15999F]/90 px-8 py-6 rounded-md">
                  READ MORE
                </Button>
              </Link>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground">500+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground">10+</h3>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground">40+</h3>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-23 bg-gray-100 dark:bg-gray-800/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-start mb-2">
                <p className="text-sm font-medium text-[#15999F]">
                  WORK WITH US
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empowering Businesses Through{" "}
                <span className="text-[#15999F]">Smart Solutions</span>
              </h2>
              <p className="mb-6 text-muted-foreground text-base">
                Partner with Pruthvi Enterprise to strengthen your operations,
                optimize resources, and achieve sustainable growth. We combine
                practical expertise with a result-driven approach to help your
                business stay competitive and efficient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mb-8">
                {[
                  "Proven strategic expertise",
                  "Deep understanding of industry needs",
                  "Practical and implementable solutions",
                  "Long-term client partnerships",
                  "Focus on measurable outcomes",
                  "Problem-solving mindset",
                  "End-to-end service support",
                  "Alignment with your business goals",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-6 w-6 text-[#15999F] flex-shrink-0" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

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
      </section>

      {/* Market Insights Section */}
      <section className="py-16 bg-white dark:bg-gray-800/40">
        <div className="container mx-auto">
          <div className="max-w mb-12 text-center">
            <h2 className="text-3xl font-bold mb-3">
              Business Support & Consultancy
            </h2>
            <p className="text-muted-foreground">
              We support businesses by offering clear insights, operational
              guidance, and manpower solutions that improve productivity and
              performance. Our team works as an extension of your organization,
              helping you overcome challenges and seize opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-[#0EA5E9]/10 p-3 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-[#15999F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Strategic Planning Solutions
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We assist organizations in planning and executing effective
                    strategies that align with their objectives, workforce
                    requirements, and market conditions — ensuring stability and
                    future growth.
                  </p>
                  <Button
                    variant="link"
                    className="text-[#15999F] p-0 h-auto font-medium"
                  >
                    VIEW ALL
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="bg-[#0EA5E9]/10 p-3 rounded-lg">
                  <LineChart className="h-8 w-8 text-[#15999F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Market Research & Industry Understanding
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Gain valuable insights into market trends, workforce
                    availability, operational efficiencies, and business
                    opportunities through our research-driven approach and
                    industry experience.
                  </p>
                  <Button
                    variant="link"
                    className="text-[#15999F] p-0 h-auto font-medium"
                  >
                    VIEW ALL
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <LogoSection />

      {/* We Can Help Section */}

      <Testimonials />
      <Footer />
    </div>
    </>
  );
};

export default About;
