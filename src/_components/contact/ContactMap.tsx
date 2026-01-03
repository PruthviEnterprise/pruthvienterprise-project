"use client";

import { useRef } from "react"
import { motion } from "framer-motion"

export const ContactMap = () => {
  const mapContainer = useRef<HTMLIFrameElement>(null)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[300px] rounded-lg overflow-hidden border shadow-sm"
    >
      <iframe 
        ref={mapContainer}
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3667.343665254719!2d72.61382127531897!3d23.194143079053976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDExJzM4LjkiTiA3MsKwMzYnNTkuMCJF!5e0!3m2!1sen!2sin!4v1767458947433!5m2!1sen!2sin" 
        className="w-full h-full border-0"
        title="Our Location"
        allowFullScreen
      ></iframe>
      <div className="text-xs py-1 px-2 bg-card text-center text-muted-foreground">
        © OpenStreetMap contributors
      </div>
    </motion.div>
  )
}
