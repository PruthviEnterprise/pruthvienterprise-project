import { useEffect } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "15+ years of experience in business strategy and leadership",
    delay: "delay-100"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Expert in technology innovation and digital transformation",
    delay: "delay-200"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Specializes in brand development and marketing strategy",
    delay: "delay-300"
  },
  {
    name: "David Wilson",
    role: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Expert in financial planning and investment strategy",
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
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-sm font-medium text-primary mb-3">OUR TEAM</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our Expert Team
          </h3>
          <p className="text-muted-foreground">
            Our team of experienced professionals is dedicated to helping your business succeed.
            With diverse backgrounds and expertise, we bring a wealth of knowledge to every project.
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
                <p className="text-primary-foreground/80 mb-2">{member.role}</p>
                <p className="text-sm text-primary-foreground/70 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {member.bio}
                </p>
                
                <div className="flex space-x-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
