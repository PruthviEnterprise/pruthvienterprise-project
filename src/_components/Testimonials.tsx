import { useEffect, useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Desai",
    role: "Operations Manager, Gujarat Steel Industries",
    image: "/puruthvienterprise/reviews/team-img-1-1.jpg",
    quote:
      "Pruthvi Enterprise provided outstanding manpower services that met our production timelines perfectly. Their team was well-trained, punctual, and reliable.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    role: "Facilities Head, City Hospital",
    image: "/puruthvienterprise/reviews/team-img-1-2.jpg",
    quote:
      "We sourced health supplies and fire safety equipment from Pruthvi Enterprise. The quality and service were exceptional — exactly what our hospital needed.",
    rating: 5,
  },
  {
    name: "Rajiv Mehta",
    role: "Procurement Lead, Prime Furniture Co.",
    image: "/puruthvienterprise/reviews/team-img-1-3.jpg",
    quote:
      "Thanks to Pruthvi Enterprise, our furniture materials arrived on time, with perfect specifications and installation support. Highly recommended for institutional supplies.",
    rating: 4,
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Director, Bright Media Works",
    image: "/puruthvienterprise/reviews/team-img-1-4.jpg",
    quote:
      "Their media marketing and video production services helped us reach a wider audience and build brand equity quickly. The team’s creativity was top-notch.",
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "Event Coordinator, Corporate Summit 2025",
    image: "/puruthvienterprise/reviews/team-img-1-2.jpg",
    quote:
      "For our event, Pruthvi Enterprise managed everything from printing and outdoor ads to the full event setup. It was seamless, professional, and stress-free.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

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
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-sm font-medium text-primary mb-3">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Clients Who Expect the Best
          </h3>
          <p className="text-muted-foreground">
            Real feedback from businesses who experienced our commitment to
            quality, timely delivery, and professional service.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto scroll-animation">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={120} className="text-primary" />
          </div>

          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div
              className={`transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-primary text-primary"
                        />
                      )
                    )}
                    {[...Array(5 - testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star key={i} size={16} className="text-muted" />
                      )
                    )}
                  </div>
                </div>

                <div className="md:w-3/4">
                  <blockquote className="text-lg md:text-xl italic text-foreground">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating || index === currentIndex) return;
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
