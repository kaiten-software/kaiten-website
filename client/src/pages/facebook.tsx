import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ExternalLink, Users, MessageCircle, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Facebook() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Connect on <span className="gradient-text-primary">Facebook</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Join our Facebook community for the latest updates on AI automation, 
                business technology insights, and success stories from our clients.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="cta-button">
                  <a href="https://facebook.com/kaitensoftware" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Follow Us on Facebook
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#content" className="scroll-smooth">
                    View Recent Posts
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Find Section */}
        <section id="content" className="py-20 section-bg-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">What You'll Find on Our Facebook</h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Stay connected with our latest content, industry insights, and community discussions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Industry Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Latest trends in AI automation, ERP systems, blockchain technology, and digital transformation
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Client Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real case studies and testimonials from businesses we've helped transform with technology
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Tech Tips & Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Practical advice on implementing AI, optimizing operations, and leveraging technology for growth
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Events & Webinars</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Announcements for upcoming workshops, webinars, and technology events we're hosting or attending
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Posts Preview */}
        <section className="py-20 section-bg-2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">Recent Facebook Posts</h2>
              <p className="mt-4 text-xl text-slate-600">
                Get a preview of our latest Facebook content
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">KS</span>
                    </div>
                    <div>
                      <CardTitle className="font-headers">Kaiten Software</CardTitle>
                      <p className="text-sm text-slate-500">2 days ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    🚀 Just completed another successful AI automation implementation! Our client reduced their 
                    manual processing time by 75% and increased accuracy to 99.2%. 
                  </p>
                  <p className="text-slate-700 mb-4">
                    The power of intelligent automation continues to amaze us. Every business, regardless of size, 
                    can benefit from these technologies.
                  </p>
                  <p className="text-primary font-semibold">
                    #AIAutomation #BusinessTransformation #TechSuccess #SmartBusiness
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">KS</span>
                    </div>
                    <div>
                      <CardTitle className="font-headers">Kaiten Software</CardTitle>
                      <p className="text-sm text-slate-500">5 days ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    📊 New blog post is live! "How Small Businesses Can Compete with Enterprise-Level ERP Systems"
                  </p>
                  <p className="text-slate-700 mb-4">
                    We break down the essential features SMBs need and how to implement them cost-effectively. 
                    Link in our bio!
                  </p>
                  <p className="text-primary font-semibold">
                    #ERP #SmallBusiness #TechSolutions #BusinessGrowth
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">KS</span>
                    </div>
                    <div>
                      <CardTitle className="font-headers">Kaiten Software</CardTitle>
                      <p className="text-sm text-slate-500">1 week ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    🎯 Free webinar next Thursday: "AI Automation Strategies for Growing Businesses"
                  </p>
                  <p className="text-slate-700 mb-4">
                    Join us as we discuss practical implementation strategies, ROI calculation, and common 
                    pitfalls to avoid. Register now - limited seats available!
                  </p>
                  <p className="text-primary font-semibold">
                    #Webinar #AIAutomation #BusinessStrategy #FreeEvent
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-bg-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-headers">
              Join Our <span className="gradient-text-primary">Facebook Community</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Don't miss out on valuable insights, industry updates, and exclusive content. 
              Follow us on Facebook and be part of our growing tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button">
                <a href="https://facebook.com/kaitensoftware" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Follow on Facebook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}