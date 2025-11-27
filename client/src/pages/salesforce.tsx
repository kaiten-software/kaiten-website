import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Salesforce() {
  const benefits = [
    "Maximize Salesforce ROI with custom configurations",
    "Streamline sales processes and workflows",
    "Integrate with existing business systems",
    "Advanced automation and reporting capabilities",
    "Improved team productivity and collaboration",
    "Data migration and system optimization"
  ];

  const services = [
    {
      title: "Salesforce Implementation",
      description: "Complete setup and configuration tailored to your business processes"
    },
    {
      title: "Custom Development",
      description: "Apex development, Lightning components, and custom integrations"
    },
    {
      title: "Data Migration",
      description: "Secure transfer of existing customer and business data"
    },
    {
      title: "Process Automation",
      description: "Workflow automation, approval processes, and business rules"
    },
    {
      title: "Integration Services",
      description: "Connect Salesforce with ERP, marketing, and other business systems"
    },
    {
      title: "Training & Support",
      description: "User training, documentation, and ongoing technical support"
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
                <span className="gradient-text-primary">Salesforce</span> Optimization Services
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Maximize your Salesforce investment with expert implementation,
                customization, and optimization services. Transform your sales
                and customer management processes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="cta-button">
                  <Link href="/contact">Get Salesforce Assessment</Link>
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Salesforce CRM dashboard interface"
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
            <h2 className="text-4xl font-bold text-slate-900">Maximize Your Salesforce ROI</h2>
            <p className="mt-4 text-xl text-slate-600">
              Expert Salesforce services that transform your sales and customer management
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Salesforce analytics and reporting dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Salesforce Services</h2>
            <p className="mt-4 text-xl text-slate-600">
              Comprehensive Salesforce solutions from implementation to optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="gradient-text-primary">Salesforce Implementation</span> Process</h2>
            <p className="mt-4 text-xl text-slate-600">
              Proven methodology for successful <span className="gradient-text-primary">Salesforce deployments</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Requirements Analysis</h3>
              <p className="text-slate-600">Understand your sales processes and business requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuration</h3>
              <p className="text-slate-600">Custom Salesforce setup aligned with your workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Testing & Training</h3>
              <p className="text-slate-600">Comprehensive testing and user training programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Go-Live & Support</h3>
              <p className="text-slate-600">Launch support and ongoing optimization services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Optimize Salesforce?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get expert help to maximize your Salesforce investment and
                transform your sales processes for better results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free Salesforce assessment</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Custom optimization recommendations</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
