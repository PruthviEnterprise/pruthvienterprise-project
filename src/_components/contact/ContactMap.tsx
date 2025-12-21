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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5601643872483!2d72.61144317576482!3d23.1862478101995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c290021c30f7d%3A0xf757d9932ca44323!2sNamo%20Narayan%20Apartment%2C%20EWS%20II%20TP%207%20FP%20186%2C%20Guda%20Residency%2C%20Sargasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1746977401803!5m2!1sen!2sin" 
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
