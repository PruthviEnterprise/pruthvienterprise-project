import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container relative z-10 mx-auto">
        <div className="bg-gradient-to-br from-primary/[0.07] to-purple-500/[0.07] rounded-3xl p-8 md:p-12 lg:p-16 border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in delay-100">
              Join thousands of businesses that have already experienced the
              benefits of our strategic solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-200">
              <Button
                size="lg"
                className="px-8 py-6 rounded-xl text-base w-full sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-xl text-base border-2 w-full sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
