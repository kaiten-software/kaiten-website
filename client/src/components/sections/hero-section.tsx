import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { useCalendly } from "@/hooks/use-calendly";

export default function HeroSection() {
  const { openCalendly, CalendlyModal } = useCalendly();
  
  return (
    <section className="pt-20 pb-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight text-balance font-headers">
              Transform Your Business with{" "}
              <span className="gradient-text-primary">AI Automation</span> &{" "}
              <span className="gradient-text-accent">Smart Technology</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              We help SMBs and startups implement cutting-edge <span className="gradient-text-primary">AI automation</span>, <span className="gradient-text-secondary">ERP systems</span>,
              <span className="gradient-text-accent">blockchain solutions</span>, and rapid <span className="gradient-text-purple">MVP development</span>. End-to-end technology
              transformation, not just development.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button onClick={openCalendly} className="cta-button">
                Start Your Digital Transformation
              </Button>
              <Button asChild variant="outline" className="secondary-button">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Technology consulting team collaborating on AI solutions"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <CalendlyModal />
    </section>
  );
}
