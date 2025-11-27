import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { useCalendly } from "@/hooks/use-calendly";

export default function AIAutomation() {
  const { openCalendly, CalendlyModal } = useCalendly();
  
  const benefits = [
    "Reduce manual tasks by up to 80%",
    "Eliminate human errors in data processing",
    "24/7 automated operations",
    "Predictive analytics for better decision making",
    "Scalable solutions that grow with your business",
    "Integration with existing systems"
  ];

  const useCases = [
    {
      title: "Document Processing",
      description: "Automatically extract, validate, and process documents with 99.9% accuracy"
    },
    {
      title: "Customer Service Automation",
      description: "Intelligent chatbots and automated response systems that handle routine inquiries"
    },
    {
      title: "Inventory Management",
      description: "Predictive inventory management with automated reordering and demand forecasting"
    },
    {
      title: "Quality Control",
      description: "AI-powered visual inspection and quality assurance systems"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                <span className="gradient-text-primary">AI Automation</span> Solutions
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Transform your business operations with <span className="gradient-text-primary">intelligent automation</span> that reduces costs,
                eliminates errors, and scales with your growth. Our <span className="gradient-text-primary">AI solutions</span> deliver measurable ROI within months.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button onClick={openCalendly} className="cta-button">
                  Get Your AI Assessment
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI automation technology dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose <span className="gradient-text-primary">AI Automation</span>?</h2>
            <p className="mt-4 text-xl text-slate-600">
              Transform your operations with <span className="gradient-text-primary">intelligent automation</span> that delivers real results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-success mr-3 h-5 w-5" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI automation dashboard interface"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900"><span className="gradient-text-primary">AI Automation</span> Use Cases</h2>
            <p className="mt-4 text-xl text-slate-600">
              Real-world applications that deliver immediate value to your <span className="gradient-text-secondary">business</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                <p className="text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="gradient-text-primary">AI Implementation</span> Process</h2>
            <p className="mt-4 text-xl text-slate-600">
              Proven methodology for successful <span className="gradient-text-primary">AI automation</span> deployments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Process Audit</h3>
              <p className="text-slate-600">Analyze current workflows to identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Strategy</h3>
              <p className="text-slate-600">Design custom AI solutions aligned with your business goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Implementation</h3>
              <p className="text-slate-600">Deploy and integrate AI systems with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Optimization</h3>
              <p className="text-slate-600">Continuous monitoring and improvement for maximum ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a free consultation to discover how AI automation can transform your operations
                and deliver measurable ROI within months.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Custom automation assessment</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>ROI projections and timeline</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CalendlyModal />
      <Footer />
    </div>
  );
}
