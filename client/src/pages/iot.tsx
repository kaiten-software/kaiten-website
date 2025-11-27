import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function IoT() {
  const benefits = [
    "Real-time monitoring and data collection",
    "Predictive maintenance capabilities",
    "Improved operational efficiency",
    "Remote device management and control",
    "Advanced analytics and insights",
    "Scalable IoT infrastructure"
  ];

  const solutions = [
    {
      title: "Industrial IoT",
      description: "Smart manufacturing, equipment monitoring, and predictive maintenance systems"
    },
    {
      title: "Smart Building Systems",
      description: "Automated HVAC, lighting, security, and energy management solutions"
    },
    {
      title: "Asset Tracking",
      description: "Real-time location and condition monitoring for valuable assets"
    },
    {
      title: "Environmental Monitoring",
      description: "Air quality, temperature, humidity, and environmental condition sensors"
    },
    {
      title: "Fleet Management",
      description: "Vehicle tracking, fuel monitoring, and driver behavior analytics"
    },
    {
      title: "Supply Chain IoT",
      description: "Cold chain monitoring, inventory tracking, and logistics optimization"
    }
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
                <span className="gradient-text-green">IoT Development</span> & Device Prototyping
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Design and deploy <span className="gradient-text-green">smart IoT devices</span> that connect your business operations
                to the digital world. From <span className="gradient-text-primary">sensor integration</span> to <span className="gradient-text-secondary">cloud connectivity</span>,
                we create <span className="gradient-text-green">intelligent systems</span> that drive efficiency and innovation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="cta-button">
                  <Link href="/contact">Start IoT Project</Link>
                </Button>
                <Button asChild variant="outline" className="secondary-button">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="IoT devices and sensors in modern office environment"
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
            <h2 className="text-4xl font-bold text-slate-900">Transform Your Operations with IoT</h2>
            <p className="mt-4 text-xl text-slate-600">
              Connect, monitor, and optimize your business with intelligent IoT solutions
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="IoT sensor network and data visualization dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IoT Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">IoT Solutions We Deliver</h2>
            <p className="mt-4 text-xl text-slate-600">
              Custom IoT implementations across industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our <span className="gradient-text-primary">IoT Development</span> Process</h2>
            <p className="mt-4 text-xl text-slate-600">
              From concept to deployment, we handle every aspect of <span className="gradient-text-primary">IoT development</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Requirements & Design</h3>
              <p className="text-slate-600">Define IoT requirements and design the system architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Hardware Prototyping</h3>
              <p className="text-slate-600">Develop and test IoT device prototypes with sensors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Software Development</h3>
              <p className="text-slate-600">Build cloud platforms and mobile applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Deployment & Support</h3>
              <p className="text-slate-600">Deploy devices and provide ongoing monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">IoT Technology Stack</h2>
            <p className="mt-4 text-xl text-slate-600">
              We work with industry-leading IoT platforms and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-microchip text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Hardware</h3>
              <p className="text-sm text-slate-600">Arduino, Raspberry Pi, ESP32, Custom PCBs</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-wifi text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Connectivity</h3>
              <p className="text-sm text-slate-600">WiFi, Bluetooth, LoRaWAN, Cellular</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cloud text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Cloud Platforms</h3>
              <p className="text-sm text-slate-600">AWS IoT, Azure IoT, Google Cloud IoT</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Analytics</h3>
              <p className="text-sm text-slate-600">Real-time data processing and ML</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Smart IoT Solutions?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Transform your business operations with intelligent IoT devices
                and systems that deliver real-time insights and automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Free IoT consultation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Proof of concept development</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-white mr-3 h-5 w-5" />
                  <span>Custom IoT solution design</span>
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
