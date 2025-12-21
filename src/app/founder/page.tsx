"use client";
import Head from "next/head";
import { GraduationCap, Trophy, Award, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Image from "next/image";
import Link from "next/link";
const Founder = () => {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>Founder of Pruthvi Enterprise | Leadership & Vision</title>
        <meta
          name="description"
          content="Meet the founder of Pruthvi Enterprise. Learn about the leadership, vision, values, and commitment behind our trusted manpower and business services."
        />
        <meta
          name="keywords"
          content="Pruthvi Enterprise founder, Dipesh Chaudhury, business leadership, manpower company founder, Gujarat business services"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.pruthvienterprise.com/founder"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Founder of Pruthvi Enterprise" />
        <meta
          property="og:description"
          content="Leadership and vision behind Pruthvi Enterprise, built on trust, quality, and long-term partnerships."
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.com/puruthvienterprise/dipesh.jpg"
        />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.com/founder"
        />
        <meta property="og:type" content="profile" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Founder of Pruthvi Enterprise" />
        <meta
          name="twitter:description"
          content="Discover the leadership and vision that drives Pruthvi Enterprise forward."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.com/puruthvienterprise/dipesh.jpg"
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
                <p className="text-lg text-muted-foreground mb-8 md:pr-12">
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
                <Link href="/businesses">
                  <Button className="rounded-full bg-primary hover:bg-primary-700 text-white px-8 py-6 h-auto text-lg">
                    Learn More
                  </Button>
                </Link>
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
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
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
