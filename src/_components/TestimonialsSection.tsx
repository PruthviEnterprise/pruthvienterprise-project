'use client'

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Allen",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    text: "We saw a measurable improvement in both efficiency and morale after consulting this team. Highly recommended!",
    company: "Acme Solutions",
  },
  {
    name: "Mary C.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
    text: "The data-driven insights were a game changer for our go-to-market strategy.",
    company: "MarketPro",
  },
  {
    name: "Simon Wu",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    rating: 4,
    text: "Excellent guidance, especially through our post-merger transition.",
    company: "FinTrust",
  },
];

const metrics = [
  { value: "500+", label: "Happy Clients" },
  { value: "4.99", label: "Avg. Rating" },
];

export default function TestimonialsSection() {
  return (
    <section className="container max-w-7xl py-12 mx-auto">
      <h5 className="text-sky-700 font-semibold mb-2 uppercase text-xs tracking-wide text-center">TESTIMONIALS</h5>
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 text-center">
        What our customers are saying about us?
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-black dark:text-white">{metric.value}</span>
            <span className="text-xs text-muted-foreground">{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white dark:bg-card shadow-md p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover border-2 border-sky-100"
                />
              </div>
              <div>
                <h6 className="font-semibold text-black dark:text-white">{t.name}</h6>
                <span className="text-xs text-muted-foreground">{t.company}</span>
              </div>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} className="text-yellow-400 fill-yellow-400 h-4 w-4" />
              ))}
              {[...Array(5-t.rating)].map((_, idx) => (
                <Star key={`empty-${idx}`} className="text-gray-300 h-4 w-4" />
              ))}
            </div>
            <p className="italic text-muted-foreground text-sm">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}