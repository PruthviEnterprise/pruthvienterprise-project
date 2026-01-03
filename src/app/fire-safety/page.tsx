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
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
} from "lucide-react";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Link from "next/link";
import Testimonials from "@/_components/Testimonials";
import LogoSection from "@/_components/LogoSection";
import Head from "next/head";
const FireSafety = () => {
  const services = [
    {
      icon: Users,
      title: "Fire Safety Manpower",
      description:
        "Trained and certified fire professionals for on-site safety management.",
      features: [
        "Fire Watchers",
        "Fire Technicians",
        "Safety Supervisors",
        "Emergency Response Crew",
      ],
    },
    {
      icon: Briefcase,
      title: "Fire System Installation & AMC",
      description:
        "Professional installation and annual maintenance of fire and emergency systems.",
      features: [
        "Fire alarm and detection systems",
        "Hydrant and sprinkler systems",
        "Fire extinguishers and suppression units",
        "Routine inspection and AMC support",
      ],
    },
    {
      icon: Clock,
      title: "Safety Compliance & Documentation",
      description:
        "Helping industries stay compliant with national and international safety regulations.",
      features: [
        "Statutory audit support",
        "Fire NOC documentation",
        "Legal compliance reports",
        "Safety certification assistance",
      ],
    },
    {
      icon: Shield,
      title: "Training & Emergency Response",
      description:
        "Empowering employees with knowledge and practical safety preparedness.",
      features: [
        "Fire drill and evacuation training",
        "First-aid & CPR training",
        "Hazard and risk awareness program",
        "Emergency response planning",
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
    { number: "200+", label: "Safety Audits Completed" },
    { number: "300+", label: "Certified Safety Personnel Deployed" },
    { number: "50+", label: "Industries Covered" },
    { number: "100%", label: "Compliance Assistance" },
  ];

  return (
    <>
      <Head>
        <title>Fire Safety Services | Pruthvi Enterprise</title>

        <meta
          name="description"
          content="Pruthvi Enterprise offers complete fire safety services including audits, manpower, system installation, training, and compliance support for industrial and commercial workplaces."
        />

        <meta
          name="keywords"
          content="fire safety services, fire audit, fire safety manpower, fire system installation, fire NOC, safety compliance India, industrial fire safety"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Fire Safety Services – Pruthvi Enterprise"
        />
        <meta
          property="og:description"
          content="End-to-end fire safety solutions to help industries stay protected, compliant, and prepared for emergencies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/fire-safety"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fire Safety Services" />
        <meta
          name="twitter:description"
          content="Professional fire audits, manpower, installation, and compliance services by Pruthvi Enterprise."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/hero-img2.jpg"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.pruthvienterprise.in/fire-safety"
        />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Fire Safety Services",
              provider: {
                "@type": "Organization",
                name: "Pruthvi Enterprise",
                url: "https://www.pruthvienterprise.in",
              },
              areaServed: "IN",
              description:
                "Complete fire safety solutions including fire audits, trained manpower, fire system installation, compliance documentation, and emergency response training.",
              serviceType: [
                "Fire Safety Manpower",
                "Fire System Installation",
                "Fire Audits",
                "Compliance & Documentation",
                "Safety Training & Emergency Response",
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
                  Professional Fire Safety Services
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-primary">fire </span> safety
                </h1>
                {/* <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                 Protecting people, property, and workplaces with world-class fire safety services and compliance management.
                </p> */}
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Pruthvi Enterprise provides end-to-end fire safety services
                  including fire audits, manpower deployment, system
                  installation, training, and compliance support — tailored for
                  industrial, corporate, and commercial environments.
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
                    src={"/puruthvienterprise/fire-safety-1.jpg"}
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
                  src={"/puruthvienterprise/fire-safety-2.jpg"}
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
                  How We Ensure Safety
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  A systematic approach to assessing risk, improving safety
                  measures, and supporting long-term compliance.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Site Assessment & Risk Analysis",
                      description:
                        "We inspect the workplace, identify hazards, and evaluate existing safety systems to create a detailed risk profile.",
                    },
                    {
                      step: "02",
                      title: "Compliance Planning",
                      description:
                        "Based on industry standards and government regulations, we create a customized safety and compliance roadmap.",
                    },
                    {
                      step: "03",
                      title: "System Installation & Deployment",
                      description:
                        "From fire equipment to trained personnel, we deploy all required safety solutions with certified professionals.",
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
              <h2 className="text-3xl font-bold mb-4">
                Trusted by Industries for Safe Workplaces
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our expertise and trained safety professionals have helped
                organizations create secure and compliant work environments.
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
              Dependable Fire & Safety Solutions for Every Industry
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

export default FireSafety;
