import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const CASE_STUDIES = [
  {
    id: 1,
    title: "LogiFlo - AI-Powered Supply Chain Optimization",
    company: "LogiFlo International",
    industry: "Logistics",
    challenge: "Manual inventory management causing 30% stock wastage and delayed deliveries",
    solution: "Custom AI automation system with predictive analytics and real-time inventory tracking",
    results: [
      "65% reduction in inventory waste",
      "40% faster delivery times", 
      "₹2.5M annual cost savings",
      "Automated 80% of manual processes"
    ],
    technologies: ["AI/ML", "Python", "TensorFlow", "AWS", "Real-time Analytics"],
    timeline: "4 months",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "MediCore - Integrated ERP for Healthcare",
    company: "MediCore Hospital Network",
    industry: "Healthcare",
    challenge: "Fragmented systems causing patient data delays and billing errors",
    solution: "Custom ERP system integrating patient management, billing, and inventory",
    results: [
      "90% reduction in data entry errors",
      "50% faster patient processing",
      "₹1.8M in operational savings",
      "Improved patient satisfaction by 35%"
    ],
    technologies: ["ERP Development", "React", "Node.js", "PostgreSQL", "HL7 FHIR"],
    timeline: "6 months",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "CryptoTrade - Blockchain Trading Platform",
    company: "CryptoTrade Exchange",
    industry: "FinTech",
    challenge: "Security concerns and manual verification processes in crypto trading",
    solution: "Blockchain-based smart contract system with automated KYC and secure transactions",
    results: [
      "99.9% transaction security",
      "70% faster user verification",
      "250% increase in trading volume",
      "Zero security breaches"
    ],
    technologies: ["Blockchain", "Solidity", "Web3", "Ethereum", "Smart Contracts"],
    timeline: "5 months",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "SmartManufacture - IoT Production Monitoring",
    company: "SmartManufacture Industries",
    industry: "Manufacturing",
    challenge: "Equipment failures causing production downtime and quality issues",
    solution: "IoT sensor network with predictive maintenance and quality control systems",
    results: [
      "85% reduction in unexpected downtime",
      "30% improvement in product quality",
      "₹3.2M in maintenance savings",
      "Real-time production visibility"
    ],
    technologies: ["IoT", "Raspberry Pi", "Python", "MQTT", "Machine Learning"],
    timeline: "3 months",
    image: "/api/placeholder/600/300"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Success <span className="gradient-text-primary">Stories</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Real businesses, real results. See how our AI automation and technology solutions 
                have transformed operations and driven measurable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 section-bg-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {CASE_STUDIES.map((study, index) => (
                <Card key={study.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'section-bg-2' : 'bg-white'}`}>
                  <div className="aspect-video bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-headers">{study.company}</h3>
                      <p className="text-slate-600">{study.industry} Industry</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <span className="text-sm text-slate-500">{study.timeline}</span>
                    </div>
                    <CardTitle className="font-headers">{study.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {study.challenge}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 font-headers">Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 font-headers">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-success text-sm mt-1 mr-3"></i>
                            <span className="text-slate-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 font-headers">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-bg-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-headers">
              Ready to Write Your <span className="gradient-text-primary">Success Story</span>?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join these successful businesses who transformed their operations with our AI automation 
              and technology solutions. Let's discuss how we can drive similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button">
                <Link href="/contact">Start Your Transformation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}