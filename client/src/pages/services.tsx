import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";
import StatsCard from "@/components/ui/stats-card";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
              Our Technology <span className="gradient-text-primary">Services</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive <span className="gradient-text-secondary">technology solutions</span> designed to transform your business operations
              and accelerate growth. We specialize in <span className="gradient-text-primary">enterprise-grade solutions</span> that deliver measurable ROI.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <StatsCard
                value="150+"
                label="Projects Delivered"
                gradient="primary"
                size="sm"
              />
              <StatsCard
                value="98%"
                label="Client Satisfaction"
                gradient="success"
                size="sm"
              />
              <StatsCard
                value="40%"
                label="Avg. Cost Reduction"
                gradient="secondary"
                size="sm"
              />
              <StatsCard
                value="24/7"
                label="Support Available"
                gradient="accent"
                size="sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-headers">Complete <span className="gradient-text-primary">Technology Solutions</span></h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              From <span className="gradient-text-primary">AI automation</span> to <span className="gradient-text-secondary">enterprise systems</span>, we provide end-to-end technology solutions 
              that drive efficiency, reduce costs, and accelerate growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                color={service.color}
                path={service.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 section-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-headers">Why Partner With <span className="gradient-text-primary">Kaiten Software</span>?</h2>
            <p className="mt-4 text-xl text-slate-600">
              We don't just build technology—we architect <span className="gradient-text-secondary">business transformations</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers"><span className="gradient-text-primary">AI-First</span> Approach</h3>
              <p className="text-slate-600">Every solution leverages <span className="gradient-text-primary">AI</span> to maximize efficiency and competitive advantage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Rapid Implementation</h3>
              <p className="text-slate-600">See results in weeks, not months. Our agile methodology ensures quick wins</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Measurable ROI</h3>
              <p className="text-slate-600">Every project includes clear success metrics and ROI tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level security standards with compliance certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 section-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-headers">Industries We Serve</h2>
            <p className="mt-4 text-xl text-slate-600">
              Specialized solutions for diverse business sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-cogs text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Manufacturing</h3>
              <p className="text-slate-600">Smart factory solutions, predictive maintenance, and supply chain optimization</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-heartbeat text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Healthcare</h3>
              <p className="text-slate-600">Patient management systems, AI diagnostics, and healthcare automation</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-store text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Retail & E-commerce</h3>
              <p className="text-slate-600">Inventory management, customer analytics, and omnichannel experiences</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Financial Services</h3>
              <p className="text-slate-600">Risk management, compliance automation, and blockchain solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-indigo-200">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-shipping-fast text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Logistics & Supply Chain</h3>
              <p className="text-slate-600">Fleet management, route optimization, and real-time tracking systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 font-headers">Agriculture & Food</h3>
              <p className="text-slate-600">Precision farming, food safety tracking, and agricultural IoT solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-headers">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive efficiency, reduce costs, 
            and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-slate-100">
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
              <Link href="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
