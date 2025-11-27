import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import TestimonialsSection from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq-section";
import ContactForm from "@/components/forms/contact-form";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { COMPANY_INFO, PROCESS_STEPS } from "@/lib/constants";
import type { BlogPost } from "@shared/schema";
import StatsCard from "@/components/ui/stats-card";

export default function Home() {
  const { data: blogPosts, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const featuredPosts = blogPosts?.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesOverview />

      {/* How We Work Section */}
      <section id="process" className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-headers">How We Deliver <span className="gradient-text-primary">Results</span></h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful technology implementations that drive real business outcomes.
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

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 font-headers">What Makes Us <span className="gradient-text-primary">Different</span></h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900"><span className="gradient-text-primary">End-to-End</span> Solutions</h4>
                      <p className="text-slate-600">While others focus on websites and mobile apps, we specialize in <span className="gradient-text-secondary">business technology</span> that drives <span className="gradient-text-primary">real operational improvements</span> and <span className="gradient-text-accent">measurable ROI</span>.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900"><span className="gradient-text-secondary">SMB & Startup</span> Focused</h4>
                      <p className="text-slate-600">Specialized expertise in helping smaller businesses access <span className="gradient-text-primary">enterprise-level technology</span> solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-success text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900"><span className="gradient-text-accent">Rapid Implementation</span></h4>
                      <p className="text-slate-600"><span className="gradient-text-purple">Fast prototyping</span> and implementation cycles that get you to market quickly with <span className="gradient-text-primary">validated solutions</span>.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Advanced technology dashboard showing business automation metrics"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-headers">Our <span className="gradient-text-accent">Achievements</span></h2>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatsCard
              value="150+"
              label="Projects Delivered"
              description="Successful implementations across various industries"
              icon="fas fa-rocket"
              gradient="primary"
              size="lg"
            />
            <StatsCard
              value="98%"
              label="Client Satisfaction"
              description="Consistently exceeding client expectations"
              icon="fas fa-heart"
              gradient="accent"
              size="lg"
            />
            <StatsCard
              value="24/7"
              label="Support Available"
              description="Round-the-clock assistance when you need it"
              icon="fas fa-headset"
              gradient="success"
              size="lg"
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Latest Insights */}
      <section id="blog" className="py-20 section-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-headers">Latest <span className="gradient-text-primary">Insights</span></h2>
            <p className="mt-4 text-xl text-slate-600">
              Stay ahead with our expert analysis on <span className="gradient-text-primary">AI automation</span> and <span className="gradient-text-secondary">business technology</span> trends
            </p>
          </div>

          {blogLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-slate-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-2 w-24"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-16 bg-slate-200 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-slate-200 rounded w-20"></div>
                      <div className="h-4 bg-slate-200 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts?.map((post) => (
                <article key={post.id} className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-primary text-sm font-semibold mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 font-semibold text-sm"
                      >
                        Read More <i className="fas fa-arrow-right ml-1"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild className="cta-button">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 primary-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-white mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our AI automation and technology solutions can drive your business growth. Schedule a consultation to explore possibilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-blue-100">{COMPANY_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-100">{COMPANY_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-blue-100">Within 2 business hours</div>
                  </div>
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
