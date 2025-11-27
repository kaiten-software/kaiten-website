import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Contact() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    if (isCalendlyOpen) {
      // Load Calendly widget script when modal opens
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isCalendlyOpen]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919001449944", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
              Let's Have <span className="gradient-text-primary">Coffee</span> ☕
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your business with <span className="gradient-text-primary">AI automation</span> and <span className="gradient-text-secondary">cutting-edge technology</span>?
              Schedule a consultation to explore how we can drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            {/* Contact Info */}
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                We respond to all inquiries within 2 business hours. Let's discuss
                your technology challenges and explore solutions together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 font-headers">Call Us</div>
                    <div className="text-slate-600">{COMPANY_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 font-headers">Email Us</div>
                    <div className="text-slate-600">{COMPANY_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 font-headers">Visit Us</div>
                    <div className="text-slate-600">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}, {COMPANY_INFO.address.zip}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 font-headers">Response Time</div>
                    <div className="text-slate-600">Within 2 business hours</div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 p-6 bg-slate-50 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span className="text-slate-600">Initial consultation within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span className="text-slate-600">Custom solution recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span className="text-slate-600">Project timeline and cost estimates</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3" />
                    <span className="text-slate-600">ROI projections and success metrics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Before You Reach Out</h2>
            <p className="mt-4 text-xl text-slate-600">
              Quick answers to common questions about our consultation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Is the initial consultation free?
              </h3>
              <p className="text-slate-600">
                Yes, our initial consultation is completely free. We'll assess your needs,
                discuss potential solutions, and provide recommendations with no obligation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What information should I prepare?
              </h3>
              <p className="text-slate-600">
                Come prepared to discuss your current challenges, business goals, 
                existing systems, and rough budget range. Don't worry if you don't
                have all the details - we'll help you figure it out.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Do you work with small businesses?
              </h3>
              <p className="text-slate-600">
                Absolutely! We specialize in helping SMBs and startups access
                enterprise-level technology solutions. We have packages designed
                specifically for smaller budgets and growing companies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How quickly can you start a project?
              </h3>
              <p className="text-slate-600">
                Depending on project scope, we can typically start within 1-2 weeks
                of contract signing. Rush projects can be accommodated with proper
                planning and resource allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Other Ways to Connect</h2>
            <p className="mt-4 text-xl text-slate-600">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-linkedin-in text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">LinkedIn</h3>
              <p className="text-slate-600 mb-4">
                Connect with us on LinkedIn for business updates and industry insights.
              </p>
              <a
                href="https://www.linkedin.com/company/82083600"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Follow Us →
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Live Chat</h3>
              <p className="text-slate-600 mb-4">
                Quick questions? Use our WhatsApp for immediate responses during business hours.
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Start Chat →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Schedule Direct</h3>
              <p className="text-slate-600 mb-4">
                Book a time slot that works for you using our online calendar.
              </p>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Schedule Your Coffee Chat ☕</DialogTitle>
          </DialogHeader>
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url="https://calendly.com/kaiten/koristu"
            style={{ minWidth: "320px", height: "100%" }}
          ></div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
