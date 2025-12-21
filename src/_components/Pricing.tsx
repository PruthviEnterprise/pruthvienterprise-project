import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic analytics",
      "Up to 5 team members",
      "10GB storage",
      "Email support",
      "Basic reporting"
    ],
    cta: "Get Started",
    popular: false,
    delay: "delay-100"
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced analytics",
      "Up to 20 team members",
      "50GB storage",
      "Priority email & chat support",
      "Advanced reporting",
      "Custom dashboards"
    ],
    cta: "Get Started",
    popular: true,
    delay: "delay-200"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    description: "For large organizations with complex needs",
    features: [
      "Enterprise analytics",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 phone, email & chat support",
      "Enterprise reporting",
      "Custom dashboards",
      "Dedicated account manager",
      "API access"
    ],
    cta: "Contact Sales",
    popular: false,
    delay: "delay-300"
  }
];

const Pricing = () => {
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
    <section id="pricing" className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border dark:via-border/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border dark:via-border/50 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-sm font-medium text-primary mb-3">PRICING PLANS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the Right Plan for Your Business
          </h3>
          <p className="text-muted-foreground">
            We offer flexible pricing options to meet the needs of businesses of all sizes.
            All plans include our core features with different levels of support and capacity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card rounded-2xl p-8 border ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
              } transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animation ${plan.delay}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 -mt-4 flex justify-center">
                  <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button 
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;