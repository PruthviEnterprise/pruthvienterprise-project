import { useEffect } from "react";
import {
  Users,
  FireExtinguisher,
  HeartPulse,
  Sofa,
  Plug,
  PenTool,
  Video,
  Printer,
  Megaphone,
  CalendarCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Manpower & placement services",
    description:
      "Providing skilled and reliable workforce staffing solutions for businesses of all sizes.",
    icon: (
      <Users className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-100",
    link: "/manpower-services",
  },
  {
    title: "Event Management",
    description:
      "Professional management for corporate events, exhibitions, launches, and celebrations.",
    icon: (
      <CalendarCheck className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-200",
    link: "/event-management",
  },
  {
    title: "Fire Safety",
    description:
      "Installation, inspection, and supply of reliable fire safety equipment and systems.",
    icon: (
      <FireExtinguisher className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-200",
    link: "/fire-safety",
  },
  {
    title: "Health Supplies",
    description:
      "Supplying essential healthcare materials, PPE kits, medical tools, and hygiene products.",
    icon: (
      <HeartPulse className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-300",
    link: "/health-supplies",
  },
  {
    title: "Furniture Materials",
    description:
      "Modern, durable, and cost-effective office and commercial furniture solutions.",
    icon: (
      <Sofa className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-100",
    link: "/furniture-materials",
  },
  {
    title: "Electric Gadgets",
    description:
      "Providing home and office electric appliances, energy-efficient gadgets, and accessories.",
    icon: (
      <Plug className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-200",
    link: "/electric-gadgets",
  },
  {
    title: "Stationery Materials",
    description:
      "Complete office supplies including papers, folders, printing items, and writing tools.",
    icon: (
      <PenTool className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-300",
    link: "/stationery-materials",
  },
  {
    title: "Media Marketing",
    description:
      "Boost your brand visibility with professional digital and offline marketing solutions.",
    icon: (
      <Megaphone className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-100",
    link: "/media-marketing",
  },
  {
    title: "Video Production",
    description:
      "Professional filming, editing, and corporate video creation to showcase your brand.",
    icon: (
      <Video className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-200",
    link: "/video-production",
  },
  {
    title: "Design & Printing",
    description:
      "High-quality customized graphic design, printing, branding, and promotional materials.",
    icon: (
      <Printer className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-300",
    link: "/design-printing",
  },
  {
    title: "Outdoor Ads",
    description:
      "Billboards, hoardings, flex banners, and outdoor visibility marketing solutions.",
    icon: (
      <Megaphone className="h-12 w-12 p-2 bg-primary/10 text-primary rounded-xl" />
    ),
    delay: "delay-100",
    link: "/outdoor-ads",
  },
 
];

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animation");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/10 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-sm font-medium text-primary mb-3">
            WHAT WE OFFER
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Reliable Services Designed for Growth
          </h3>
          <p className="text-muted-foreground">
            Our wide range of solutions is built to support businesses of every
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Card = (
              <div
                className={`bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 scroll-animation ${feature.delay}`}
              >
                <div className="mb-6">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium hover:underline">
                  Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            );

            return feature.link ? (
              <Link key={feature.title} href={feature.link} className="block">
                {Card}
              </Link>
            ) : (
              <div key={feature.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
