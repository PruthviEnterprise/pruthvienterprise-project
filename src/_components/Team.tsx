import { useEffect } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Manpower services",
    role: "CEO & Founder",
    image: "/puruthvienterprise/manpower-1.jpg",
    bio: "Providing skilled and reliable workforce staffing solutions for businesses of all sizes.",
    delay: "delay-100"
  },
  {
    name: "Event Management",
    role: "CTO",
    image: "/puruthvienterprise/event-management-1.jpg",
    bio: "Professional management for corporate events, exhibitions, launches, and celebrations.",
    delay: "delay-200"
  },
  {
    name: "Fire Safety",
    role: "Head of Marketing",
    image: "/puruthvienterprise/fire-safety-2.jpg",
    bio: "Installation, inspection, and supply of reliable fire safety equipment and systems.",
    delay: "delay-300"
  },
  {
    name: "Health Supplies",
    role: "Financial Advisor",
    image: "/puruthvienterprise/health-supplies-1.jpg",
    bio: "Supplying essential healthcare materials, PPE kits, medical tools, and hygiene products.",
    delay: "delay-400"
  }
];

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden bg-gray-100 dark:bg-gray-800/40">
      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-sm font-medium text-primary mb-3">OUR Businesses</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Explore Our Diverse Business Verticals
          </h3>
          <p className="text-muted-foreground">
          We operate across multiple business domains, delivering reliable solutions and services tailored to different industry needs. Each business vertical is managed with expertise, commitment, and a focus on quality outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl scroll-animation ${member.delay}`}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-6">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                {/* <p className="text-primary-foreground/80 mb-2">{member.role}</p> */}
                <p className="text-sm text-primary-foreground/70 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {member.bio}
                </p>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
