import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function MVPDevelopment() {
  const benefits = [
    "Rapid prototype development in 6-12 weeks",
    "Market validation before full investment",
    "Investor-ready demos and presentations",
    "Agile development methodology",
    "AR/VR experience development",
    "Technical feasibility assessment"
  ];

  const services = [
    {
      title: "MVP Development",
      description: "Build working prototypes that validate your core business assumptions"
    },
    {
      title: "AR/VR Experiences",
      description: "Immersive augmented and virtual reality applications for various industries"
    },
    {
      title: "Market Validation",
      description: "Test your product concept with real users before major investment"
    },
    {
      title: "Technical Architecture",
      description: "Scalable architecture design that grows with your success"
    },
    {
      title: "Investor Presentations",
      description: "Demo-ready prototypes that showcase your vision to investors"
    },
    {
      title: "Go-to-Market Strategy",
      description: "Technology roadmap and launch strategy development"
    }
  ];

  const industries = [
    { name: "FinTech", icon: "fas fa-coins" },
    { name: "HealthTech", icon: "fas fa-heartbeat" },
    { name: "EdTech", icon: "fas fa-graduation-cap" },
    { name: "E-commerce", icon: "fas fa-shopping-cart" },
    { name: "Gaming", icon: "fas fa-gamepad" },
    { name: "Enterprise SaaS", icon: "fas fa-building" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                <span className="gradient-text-purple">MVP Development</span> & <span className="gradient-text-accent">AR/VR Solutions</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Transform your <span className="gradient-text-purple">startup idea</span> into a working prototype in weeks, not months.
                From <span className="gradient-text-purple">rapid MVP development</span> to <span className="gradient-text-accent">cutting-edge AR/VR</span> experiences,
                we help startups validate concepts and secure <span className="gradient-text-primary">funding</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="cta-button">
                  <Link href="/contact">Build Your MVP</Link>
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Startup team collaborating on MVP development"
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
            <h2 className="text-4xl font-bold text-slate-900">Fast-Track Your Startup Success</h2>
            <p className="mt-4 text-xl text-slate-600">
              Rapid prototyping and validation that gets you to market quickly
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our MVP Development</h3>
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
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="MVP development process and prototyping"
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
            <h2 className="text-4xl font-bold text-slate-900">Our Startup Services</h2>
            <p className="mt-4 text-xl text-slate-600">
              Complete solution from idea to investor-ready prototype
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Industries We Serve</h2>
            <p className="mt-4 text-xl text-slate-600">
              Expert MVP development across diverse startup sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${industry.icon} text-purple-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our 90-Day <span className="gradient-text-primary">MVP Process</span></h2>
            <p className="mt-4 text-xl text-slate-600">
              From idea to investor-ready <span className="gradient-text-secondary">prototype</span> in just 90 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Concept Validation</h3>
              <p className="text-slate-600">Market research, user interviews, and concept refinement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Design & Architecture</h3>
              <p className="text-slate-600">UX design, technical architecture, and development planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Rapid Development</h3>
              <p className="text-slate-600">Agile development with weekly demos and feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Launch & Iterate</h3>
              <p className="text-slate-600">Market launch, user feedback, and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* AR/VR Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">AR/VR Development Capabilities</h2>
            <p className="mt-4 text-xl text-slate-600">
              Cutting-edge immersive experiences for next-generation startups
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">AR/VR Technologies</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-vr-cardboard text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Virtual Reality</h4>
                    <p className="text-slate-600">Immersive VR applications for training, entertainment, and visualization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-mobile-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Augmented Reality</h4>
                    <p className="text-slate-600">AR apps that overlay digital content onto the real world</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-cube text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Mixed Reality</h4>
                    <p className="text-slate-600">Hybrid experiences that combine VR and AR technologies</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AR/VR development and testing environment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your MVP?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Turn your startup idea into a working prototype that validates
                your concept and attracts investors in just 90 days.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free startup consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Concept validation workshop</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>90-day development roadmap</span>
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
