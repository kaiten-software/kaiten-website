import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { PROCESS_STEPS, COMPANY_INFO } from "@/lib/constants";
import StatsCard from "@/components/ui/stats-card";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      expertise: "AI & Machine Learning",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=b6e3f4&clothesColor=2563eb"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "System Architecture & ERP",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=ddd6fe&clothesColor=7c3aed"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Development",
      expertise: "Blockchain & IoT",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=fef3c7&clothesColor=d97706"
    },
    {
      name: "Emily Davis",
      role: "Lead Consultant",
      expertise: "Business Process Optimization",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=dcfce7&clothesColor=16a34a"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Business Focus",
      description: "Every solution is designed to drive real business outcomes and ROI",
      icon: "fas fa-chart-line"
    },
    {
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor",
      icon: "fas fa-handshake"
    },
    {
      title: "Quality Commitment",
      description: "Rigorous testing and quality assurance in every project",
      icon: "fas fa-shield-alt"
    }
  ];

  const achievements = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Clients" },
    { number: "5 Years", label: "Industry Experience" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
              About <span className="gradient-text-primary">Kaiten</span> Software
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              We're a team of <span className="gradient-text-primary">technology experts</span> dedicated to transforming businesses
              through <span className="gradient-text-primary">AI automation</span>, <span className="gradient-text-secondary">ERP systems</span>, and <span className="gradient-text-accent">cutting-edge technology</span> solutions.
              Specializing in business technology that delivers measurable impact and drives real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Our <span className="gradient-text-primary">Mission</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To democratize access to <span className="gradient-text-primary">enterprise-level technology</span> solutions for small and
                medium businesses. We believe that <span className="gradient-text-secondary">cutting-edge AI</span>, <span className="gradient-text-accent">ERP</span>, and <span className="gradient-text-purple">automation</span>
                technologies shouldn't be reserved for Fortune 500 companies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="text-success mr-3 h-5 w-5" />
                  <span className="text-slate-700">Advanced business technology solutions</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-success mr-3 h-5 w-5" />
                  <span className="text-slate-700">End-to-end implementation and support</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-success mr-3 h-5 w-5" />
                  <span className="text-slate-700">Measurable ROI and business outcomes</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration on technology solutions"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 section-bg-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const getGradient = (stepNumber: number) => {
                const gradients = {
                  1: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  2: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  3: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  4: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                };
                return gradients[stepNumber as keyof typeof gradients];
              };
              
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    style={{ background: getGradient(index + 1) }}
                  >
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 section-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">How We Work</h2>
            <p className="mt-4 text-xl text-slate-600">
              Our proven methodology for successful technology implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => {
              const getGradient = (stepNumber: number) => {
                const gradients = {
                  1: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  2: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  3: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  4: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                };
                return gradients[stepNumber as keyof typeof gradients];
              };
              
              return (
                <div key={step.number} className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    style={{ background: getGradient(step.number) }}
                  >
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 font-headers">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-headers">Company <span className="gradient-text-accent">Achievements</span></h2>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              value="5"
              label="Years Experience"
              description="Deep industry expertise"
              gradient="primary"
              size="md"
            />
            <StatsCard
              value="50+"
              label="Happy Clients"
              description="Long-term partnerships"
              gradient="success"
              size="md"
            />
            <StatsCard
              value="200+"
              label="Technologies Mastered"
              description="Cutting-edge solutions"
              gradient="accent"
              size="md"
            />
            <StatsCard
              value="99.9%"
              label="Uptime Guarantee"
              description="Reliable infrastructure"
              gradient="secondary"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-bg-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-slate-600">
              Technology experts with deep industry knowledge and proven track record
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 section-bg-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Track Record</h2>
            <p className="mt-4 text-xl text-slate-600">
              Proven results across industries and project types
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-slate-800 mb-3">{achievement.number}</div>
                <div className="text-slate-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 section-bg-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">What Makes Us Different</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-cogs text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Beyond Websites & Mobile Apps</h3>
                    <p className="text-slate-600">
                      We specialize in advanced <span className="gradient-text-secondary">business technology</span> that drives operations - 
                      <span className="gradient-text-primary">AI automation</span>, <span className="gradient-text-secondary">ERP systems</span>, <span className="gradient-text-accent">blockchain integration</span>, and <span className="gradient-text-green">IoT solutions</span> that deliver measurable results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-bullseye text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">SMB & Startup Specialists</h3>
                    <p className="text-slate-600">
                      We understand the unique challenges of smaller businesses and design
                      solutions that fit your budget and growth trajectory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <i className="fas fa-chart-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Results-Driven Approach</h3>
                    <p className="text-slate-600">
                      Every project includes measurable KPIs and ROI targets. We're not
                      successful unless your business sees real improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Advanced business technology dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 primary-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our expertise can accelerate your business transformation
            and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-slate-100">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
