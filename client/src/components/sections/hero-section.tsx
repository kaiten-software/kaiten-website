import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { useCalendly } from "@/hooks/use-calendly";
import { TypingEffect } from "@/components/ui/typing-effect";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {
  const { openCalendly, CalendlyModal } = useCalendly();
  
  const typingWords = [
    "AI Automation",
    "ERP Systems",
    "Blockchain Solutions",
    "MVP Development",
    "IoT Integration",
    "Cloud Migration"
  ];

  return (
    <section className="pt-20 pb-16 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight text-balance font-headers">
              Transform Your Business with{" "}
              <span className="block mt-2">
                <TypingEffect 
                  words={typingWords}
                  className="gradient-text-primary"
                />
              </span>
            </h1>
            <motion.p 
              className="mt-6 text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We help SMBs and startups implement cutting-edge <span className="gradient-text-primary">AI automation</span>, <span className="gradient-text-secondary">ERP systems</span>,
              <span className="gradient-text-accent">blockchain solutions</span>, and rapid <span className="gradient-text-purple">MVP development</span>. End-to-end technology
              transformation, not just development.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button onClick={openCalendly} className="cta-button">
                Start Your Digital Transformation
              </Button>
              <Button asChild variant="outline" className="secondary-button">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
            <motion.div 
              className="mt-8 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {STATS.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.02}
              transitionSpeed={1000}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Technology consulting team collaborating on AI solutions"
                className="rounded-2xl shadow-2xl"
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
      
      <CalendlyModal />
    </section>
  );
}
