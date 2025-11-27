import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Blockchain() {
  const benefits = [
    "Enhanced data security and transparency",
    "Immutable transaction records",
    "Reduced fraud and counterfeiting",
    "Streamlined supply chain tracking",
    "Automated smart contract execution",
    "Decentralized data management"
  ];

  const useCases = [
    {
      title: "Supply Chain Transparency",
      description: "Track products from origin to consumer with immutable blockchain records"
    },
    {
      title: "Smart Contracts",
      description: "Automate business agreements with self-executing blockchain contracts"
    },
    {
      title: "Digital Identity",
      description: "Secure, verifiable digital identity management for customers and employees"
    },
    {
      title: "Payment Systems",
      description: "Integrate cryptocurrency payments and blockchain-based transactions"
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
                <span className="gradient-text-accent">Blockchain</span> Integration Solutions
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Enhance trust, transparency, and security in your business operations
                with <span className="gradient-text-accent">blockchain technology</span>. From <span className="gradient-text-secondary">supply chain tracking</span> to <span className="gradient-text-primary">smart contracts</span>,
                we implement <span className="gradient-text-accent">blockchain solutions</span> that deliver real value.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="cta-button">
                  <Link href="/contact">Explore Blockchain Solutions</Link>
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Blockchain network visualization"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 section-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why <span className="gradient-text-accent">Blockchain</span> for <span className="gradient-text-secondary">Business</span>?</h2>
            <p className="mt-4 text-xl text-slate-600">
              Build trust and transparency with immutable <span className="gradient-text-accent">blockchain technology</span>
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
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Blockchain technology visualization"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 section-bg-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900"><span className="gradient-text-accent">Blockchain</span> Use Cases</h2>
            <p className="mt-4 text-xl text-slate-600">
              Practical <span className="gradient-text-accent">blockchain applications</span> that solve real <span className="gradient-text-secondary">business challenges</span>
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

      {/* Implementation Process */}
      <section className="py-20 section-bg-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="gradient-text-accent">Blockchain Implementation</span> Process</h2>
            <p className="mt-4 text-xl text-slate-600">
              Strategic approach to <span className="gradient-text-accent">blockchain integration</span> for maximum <span className="gradient-text-secondary">business value</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Use Case Analysis</h3>
              <p className="text-slate-600">Identify specific blockchain applications for your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Platform Selection</h3>
              <p className="text-slate-600">Choose the right blockchain platform and architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Development</h3>
              <p className="text-slate-600">Build and test blockchain solutions with security focus</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Integration</h3>
              <p className="text-slate-600">Seamless integration with existing business systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Implement Blockchain?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Discover how blockchain technology can enhance security, transparency,
                and trust in your business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free blockchain consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Use case analysis</span>
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
