"use client";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/_components/contact/ContactForm";
import { ContactMap } from "@/_components/contact/ContactMap";
// ... rest of the code remains the same ...
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Pruthvi Enterprise | Get in Touch</title>

        <meta
          name="description"
          content="Get in touch with Pruthvi Enterprise for inquiries, business services, and support. Reach us via phone, email, or visit our office in Banaskantha, Gujarat."
        />

        <meta
          name="keywords"
          content="contact Pruthvi Enterprise, business inquiries, customer support, Banaskantha Gujarat, email, phone, office address"
        />

        <meta name="author" content="Pruthvi Enterprise" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Pruthvi Enterprise – Get in Touch"
        />
        <meta
          property="og:description"
          content="Reach out to Pruthvi Enterprise for inquiries, support, or business collaboration. Contact us via phone, email, or visit our office in Banaskantha, Gujarat."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.pruthvienterprise.in/contact"
        />
        <meta
          property="og:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/contact-hero.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Pruthvi Enterprise | Get in Touch"
        />
        <meta
          name="twitter:description"
          content="Contact Pruthvi Enterprise for inquiries, services, and support. Call, email, or visit our Banaskantha office for assistance."
        />
        <meta
          name="twitter:image"
          content="https://www.pruthvienterprise.in/puruthvienterprise/contact-hero.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.pruthvienterprise.in/contact" />

        {/* JSON-LD SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pruthvi Enterprise",
              url: "https://www.pruthvienterprise.in",
              logo: "https://www.pruthvienterprise.in/puruthvienterprise/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "pruthvienterprise0707@gmail.com",
                telephone: "+919925559059",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No 23, City Center, Saduji Vas, Thara",
                addressLocality: "Banaskantha",
                addressRegion: "Gujarat",
                postalCode: "385555",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </Head>

      <Header />
      <section className="relative w-full h-[320px] bg-[#15999F] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597_1280.jpg')] bg-cover bg-center opacity-20"
          style={{ backgroundBlendMode: "overlay" }}
        ></div>
        <div className="container relative z-10 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-5xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-lg text-white/80">
            <span className="border-r border-white/50 pr-3 mr-3">Home</span>
            <span>Contact</span>
          </p>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <ContactMap />
              <div className="grid sm:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+15550000000"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (555) 000-0000
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:hello@company.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@company.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Business Ave, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-lg bg-card border shadow-sm"
              >
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday</div>
                  <div className="text-right">9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div className="text-right">10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div className="text-right">Closed</div>
                </div>
              </motion.div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
