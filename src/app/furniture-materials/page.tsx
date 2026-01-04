"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Link from "next/link";
import Testimonials from "@/_components/Testimonials";
import LogoSection from "@/_components/LogoSection";
import Head from "next/head";
const FurnitureMaterials = () => {
  const services = [
    {
      icon: Users,
      title: "Bulk Material Supply",
      description:
        "Ideal for large-scale projects, interior fit-outs, furniture manufacturing units, and urgent procurement needs.",
      features: [
        "Fast material dispatch",
        "Wide range of wood, laminates, veneers, hardware & fittings",
        "Cost-effective bulk pricing",
        "Short-term or recurring supply options",
      ],
    },
    {
      icon: Briefcase,
      title: "Customized Material Sourcing",
      description:
        "Tailored sourcing solutions to meet unique design requirements, specifications, and project standards.",
      features: [
        "Verified and quality-tested materials",
        "Technical and aesthetic guidance",
        "Access to premium and specialized materials",
        "Guaranteed match to project needs",
      ],
    },
    {
      icon: Clock,
      title: "Contract-Based Material Provision",
      description:
        "Flexible supply agreements without long-term procurement commitments.",
      features: [
        "Defined delivery schedules",
        "Pre-approved material quality and grades",
        "On-site or warehouse delivery",
        "Ideal for ongoing or project-based material demands",
      ],
    },
    {
      icon: Shield,
      title: "Inventory & Logistics Management",
      description:
        "Seamless handling of your furniture material logistics so you can focus on production and execution.",
      features: [
        "Stock planning and inventory management",
        "Safe and timely transportation",
        "Damage-free handling and packaging",
        "Monthly usage and supply reports",
      ],
    },
  ];

  const industries = [
    "Information Technology",
    "Healthcare",
    "Manufacturing",
    "Finance & Banking",
    "Retail & E-commerce",
    "Construction",
    "Hospitality",
    "Education",
  ];

  const stats = [
    { number: "300+", label: "Interior Completion Projects" },
    { number: "600+", label: "Corporate & Institutional Supply" },
    { number: "1,000+", label: "Units Manufactured and Supplied" },
    { number: "98%", label: "Customer Retention" },
  ];

  return (
    <>
      <Head>
        <title>
          Furniture Materials & Interior Supplies | Pruthvi Enterprise
        </title>

        <meta
          name="description"
          content="Pruthvi Enterprise supplies premium furniture materials, laminates, veneers, hardware, and interior materials for commercial, residential, and industrial projects."
        />

        <meta
          name="keywords"
          content="furniture materials supplier, laminates, veneers, plywood, interior material supplier, furniture hardware, modular furniture material"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Furniture Materials – Pruthvi Enterprise"
        />
        <meta
          property="og:description"
          content="Reliable supplier of high-quality furniture materials, fittings, laminates, and interior supplies for projects of all sizes."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/furniture-materials"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Furniture Materials & Interior Supplies"
        />
        <meta
          name="twitter:description"
          content="Premium furniture and interior materials supplied by Pruthvi Enterprise."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.pruthvienterprise.in/furniture-materials"
        />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Furniture Materials Supply",
              provider: {
                "@type": "Organization",
                name: "Pruthvi Enterprise",
                url: "https://www.pruthvienterprise.in",
              },
              areaServed: "IN",
              description:
                "Supply of premium furniture materials including laminates, veneers, wood panels, hardware, and interior solutions for residential, commercial, and industrial projects.",
              serviceType: [
                "Bulk Furniture Materials",
                "Customized Material Sourcing",
                "Contract-Based Supply",
                "Inventory & Logistics Management",
              ],
            }),
          }}
        />
      </Head>

      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={"/puruthvienterprise/bus-bg-img.jpg"}
              alt="Professional team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
          </div>

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <Badge variant="secondary" className="mb-6 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Furniture Materials
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight">
                  Premium Furniture &{" "}
                  <span className="text-primary">
                    Interior Material Supply Services
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Delivering durable, stylish and functional material solutions
                  for residential, commercial, and industrial interior needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/careers">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 px-8"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="px-8">
                      <Star className="mr-2 h-4 w-4" />
                      CONTACT US
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                  <img
                    src={"/puruthvienterprise/furniture-materials-1.jpg"}
                    alt="Team collaboration"
                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="py-20 px-4 relative">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                <img
                  src={"/puruthvienterprise/furniture-materials-2.jpg"}
                  alt="Modern office building"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4">
                  Our Methodology
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Our Process
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  A structured approach ensuring quality, customization, and
                  timely delivery.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Requirement Consultation",
                      description:
                        "We understand space layout, purpose, quality expectations, and design preferences before suggesting materials.",
                    },
                    {
                      step: "02",
                      title: "Material Selection & Samples",
                      description:
                        "Multiple material options including finish, texture, grade, and durability levels are presented for approval.",
                    },
                    {
                      step: "03",
                      title: "Customization & Fabrication",
                      description:
                        "Based on requirements, modular furniture and material specifications are processed for accurate production.",
                    },
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex gap-6 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl font-bold text-primary">
                            {process.step}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {process.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800/40">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Track Record</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With years of experience in supplying high-quality furniture
                materials, we have established a strong presence across diverse
                segments of the furniture and interior solutions industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center group"
                >
                  <div className="relative p-8 rounded-2xl bg-card/60 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        <section className="py-20 px-4">
          <Container>
            <h2 className="text-3xl font-bold mb-9 text-center">
              Flexible & Scalable Material Supply Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur group hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        <LogoSection />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default FurnitureMaterials;
