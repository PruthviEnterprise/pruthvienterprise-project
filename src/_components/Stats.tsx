'use client'
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: 98, symbol: "%", label: "Customer Satisfaction" },
  { value: 5000, symbol: "+", label: "Clients Worldwide" },
  { value: 15, symbol: "+", label: "Years Experience" },
  { value: 24, symbol: "/7", label: "Support Available" },
];

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border dark:via-border/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border dark:via-border/50 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card dark:bg-card/80 rounded-2xl p-6 md:p-8 border border-border shadow-sm scroll-animation"
                >
                  <div className="flex items-baseline">
                    <span className={`text-4xl md:text-5xl font-bold ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                      {isInView ? stat.value : "0"}
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-primary ml-1">{stat.symbol}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 scroll-animation">
            <h2 className="text-sm font-medium text-primary mb-3">ABOUT US</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              We're Changing The Way Businesses Operate
            </h3>
            <p className="text-muted-foreground mb-6">
              For over 15 years, we've been helping businesses transform their operations
              and achieve sustainable growth through innovative strategies and cutting-edge
              technologies.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of experts works closely with each client to understand their
              unique challenges and develop customized solutions that drive real results.
            </p>
            <Link
              href="#" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn more about our approach <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
