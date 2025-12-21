"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 2, suffix: "+", label: "Partners" },
  { value: 120, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Millions Equity" },
  { value: 980, suffix: "+", label: "Professionals" },
];

const CountSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base mt-2 text-black dark:text-gray-300 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountSection;
