'use client'

import { Container } from "@/components/ui/container"
import { CareerForm } from "@/_components/careers/CareerForm"
import { JobOpenings } from "@/_components/careers/JobOpenings"
import { motion } from "framer-motion"
import Header from "@/_components/Header"
import Footer from "@/_components/Footer"

const Careers = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <Header />
      <section className="relative w-full h-[320px] bg-[#15999F] overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597_1280.jpg')] bg-cover bg-center opacity-20"
          style={{ backgroundBlendMode: 'overlay' }}
        ></div>
        <div className="container relative z-10 h-full flex flex-col justify-center items-center mx-auto">
          <h1 className="text-5xl font-bold text-white mb-2">Join Our Team</h1>
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
            Be part of something extraordinary. We're always looking for talented
            individuals who share our passion for innovation and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <JobOpenings />
          <CareerForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers