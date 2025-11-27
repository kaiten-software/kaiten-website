import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useCalendly } from "@/hooks/use-calendly";

export default function ERPSystems() {
  const { openCalendly, CalendlyModal } = useCalendly();
  
  const benefits = [
    "Unified business operations across all departments",
    "Real-time visibility into business performance",
    "Improved efficiency and reduced operational costs",
    "Better decision making with integrated reporting",
    "Scalable solution that grows with your business",
    "Industry-specific customizations available"
  ];

  const modules = [
    {
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting capabilities"
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking, automated reordering, and demand planning"
    },
    {
      title: "Human Resources",
      description: "Employee management, payroll, benefits, and performance tracking"
    },
    {
      title: "Customer Management",
      description: "Integrated CRM with sales pipeline and customer service tools"
    },
    {
      title: "Manufacturing",
      description: "Production planning, scheduling, and quality control systems"
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics, reporting, and dashboard capabilities"
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
                <span className="gradient-text-secondary">ERP Systems</span> That Scale
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Streamline your entire business operation with integrated <span className="gradient-text-secondary">ERP solutions</span>.
                From <span className="gradient-text-primary">financial management</span> to <span className="gradient-text-accent">inventory control</span>, get real-time visibility
                across all departments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button onClick={openCalendly} className="cta-button">
                  Get ERP Consultation
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="ERP dashboard displaying business analytics"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 section-bg-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Transform Your <span className="gradient-text-secondary">Business Operations</span></h2>
            <p className="mt-4 text-xl text-slate-600">
              Integrated <span className="gradient-text-secondary">ERP solutions</span> that provide complete visibility and control
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
                alt="ERP system interface showing integrated business data"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Comprehensive ERP Modules</h2>
            <p className="mt-4 text-xl text-slate-600">
              Integrated modules that cover every aspect of your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <p className="text-slate-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="gradient-text-secondary">ERP Implementation</span> Process</h2>
            <p className="mt-4 text-xl text-slate-600">
              Proven methodology for successful <span className="gradient-text-secondary">ERP deployments</span> with minimal disruption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Business Analysis</h3>
              <p className="text-slate-600">Analyze current processes and identify improvement opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">System Design</h3>
              <p className="text-slate-600">Custom ERP configuration tailored to your business needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Migration</h3>
              <p className="text-slate-600">Secure transfer of existing data to the new system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Go-Live Support</h3>
              <p className="text-slate-600">Training, testing, and ongoing support for smooth transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Integrate Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a consultation to learn how our ERP solutions can streamline
                your operations and provide real-time business insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free business analysis</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Custom ERP recommendations</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Implementation roadmap and timeline</span>
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
