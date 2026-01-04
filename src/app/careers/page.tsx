"use client";

import { CareerForm } from "@/_components/careers/CareerForm";
import { JobOpenings } from "@/_components/careers/JobOpenings";
import { motion } from "framer-motion";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Head from "next/head";
const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers at Pruthvi Enterprise | Join Our Team</title>

        <meta
          name="description"
          content="Explore career opportunities at Pruthvi Enterprise. Join our team of talented professionals and grow with a company committed to innovation, excellence, and sustainable business solutions."
        />

        <meta
          name="keywords"
          content="Pruthvi Enterprise careers, job openings, join our team, career opportunities, business jobs Gujarat, product executive, IT support, office clerk, company driver, technician"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Careers at Pruthvi Enterprise – Join Our Team"
        />
        <meta
          property="og:description"
          content="Apply for exciting career opportunities at Pruthvi Enterprise. Be part of a collaborative, innovative, and professional work environment across multiple departments."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/careers"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/careers-hero.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers at Pruthvi Enterprise | Join Our Team"
        />
        <meta
          name="twitter:description"
          content="Discover job openings at Pruthvi Enterprise. Join a dynamic team and grow your career with a trusted business group in Gujarat."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/careers-hero.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.pruthvienterprise.in/careers" />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pruthvi Enterprise",
              url: "https://www.pruthvienterprise.in",
              sameAs: [],
              logo: "https://www.pruthvienterprise.in/puruthvienterprise/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "pruthvienterprise0707@gmail.com",
                telephone: "+919925559059",
                contactType: "Human Resources / Careers",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Career Opportunities",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "JobPosting",
                      title: "Product Executive",
                      employmentType: "FULL_TIME",
                      jobLocation: {
                        "@type": "Place",
                        address: {
                          "@type": "PostalAddress",
                          streetAddress:
                            "Shop No 23, City Center, Saduji Vas, Thara",
                          addressLocality: "Banaskantha",
                          addressRegion: "Gujarat",
                          postalCode: "385555",
                          addressCountry: "IN",
                        },
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "JobPosting",
                      title: "IT Support Executive",
                      employmentType: "FULL_TIME",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "JobPosting",
                      title: "Office Clerk",
                      employmentType: "FULL_TIME",
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
        <section className="relative w-full h-[320px] bg-[#15999F] overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597_1280.jpg')] bg-cover bg-center opacity-20"
            style={{ backgroundBlendMode: "overlay" }}
          ></div>
          <div className="container relative z-10 h-full flex flex-col justify-center items-center mx-auto">
            <h1 className="text-5xl font-bold text-white mb-2">
              Join Our Team
            </h1>
            <p className="text-lg text-white/80">
              <span className="border-r border-white/50 pr-3 mr-3">Home</span>
              <span>Careers</span>
            </p>
          </div>
        </section>
        <div className="container my-20 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of something extraordinary. We're always looking for
              talented individuals who share our passion for innovation and
              excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <JobOpenings />
            <CareerForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Careers;
