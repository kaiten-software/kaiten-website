import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ExternalLink, Play, Users, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function YouTube() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Watch & Learn on <span className="gradient-text-accent">YouTube</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Dive deep into AI automation, business technology, and digital transformation 
                with our comprehensive video tutorials, case studies, and expert insights.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="cta-button">
                  <a href="https://youtube.com/@kaitensoftware" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Subscribe to Our Channel
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#videos" className="scroll-smooth">
                    Browse Videos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-20 section-bg-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">What You'll Learn</h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive video content covering all aspects of business technology and automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Tutorials & How-Tos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Step-by-step guides on implementing AI automation, setting up ERP systems, and optimizing business processes
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Case Study Walkthroughs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Detailed analysis of real client projects, showing before/after results and implementation strategies
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Industry Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Expert commentary on technology trends, market analysis, and future predictions for business automation
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Live Q&A Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regular live streams where we answer your questions about technology implementation and business automation
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section id="videos" className="py-20 section-bg-2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">Featured Videos</h2>
              <p className="mt-4 text-xl text-slate-600">
                Our most popular and helpful content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    15:32
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">AI Automation for Small Businesses: Complete Guide</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Learn how to implement AI automation in your small business without breaking the bank. 
                    We cover tool selection, implementation strategies, and ROI calculation.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>45K views</span>
                    <span>2 weeks ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Video 2 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    22:45
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">ERP System Implementation: Real Client Case Study</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Watch how we transformed a manufacturing company's operations with a custom ERP solution. 
                    From chaos to streamlined efficiency in 90 days.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>38K views</span>
                    <span>3 weeks ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Video 3 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    12:18
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">Blockchain for Business: Beyond Cryptocurrency</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Discover practical blockchain applications for supply chain, contracts, and data security. 
                    Real-world examples from our client implementations.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>29K views</span>
                    <span>1 month ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Video 4 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    LIVE
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">Live Q&A: Your Technology Questions Answered</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Join our monthly live session where we answer your questions about AI, automation, 
                    and business technology implementation.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Live Now</span>
                    <span>Monthly Event</span>
                  </div>
                </CardContent>
              </Card>

              {/* Video 5 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    18:27
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">IoT for Manufacturing: Smart Factory Tour</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Take a virtual tour of a smart factory we helped design. See IoT sensors, 
                    real-time monitoring, and predictive maintenance in action.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>52K views</span>
                    <span>1 month ago</span>
                  </div>
                </CardContent>
              </Card>

              {/* Video 6 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    25:14
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 font-headers">MVP to Market: Startup Success Story</CardTitle>
                  <CardDescription className="text-sm text-slate-600 mb-4">
                    Follow a startup's journey from initial idea to funded company. 
                    See how we built their MVP and scaled it for market success.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>67K views</span>
                    <span>2 months ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Playlist Section */}
        <section className="py-20 section-bg-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">Popular Playlists</h2>
              <p className="mt-4 text-xl text-slate-600">
                Organized content for structured learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-headers">AI Automation Mastery</CardTitle>
                      <CardDescription>12 videos • 3.2K subscribers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Everything you need to know about implementing AI automation in your business. 
                    From basic concepts to advanced implementations.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Playlist
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-headers">ERP Implementation Guide</CardTitle>
                      <CardDescription>8 videos • 2.8K subscribers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Complete guide to selecting, implementing, and optimizing ERP systems 
                    for small and medium businesses.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Playlist
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-headers">Startup Tech Stack</CardTitle>
                      <CardDescription>15 videos • 4.1K subscribers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Building MVPs, selecting the right technology stack, and scaling 
                    your startup with the right tools and processes.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Playlist
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-success rounded-lg flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-headers">Client Success Stories</CardTitle>
                      <CardDescription>20 videos • 5.7K subscribers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Real client transformations, case studies, and interviews 
                    showcasing the impact of our technology solutions.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Playlist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 section-bg-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-headers">
              Subscribe for <span className="gradient-text-accent">Expert Insights</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Don't miss out on new tutorials, case studies, and industry insights. 
              Subscribe to our YouTube channel and turn on notifications for the latest content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button">
                <a href="https://youtube.com/@kaitensoftware" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Subscribe Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  Discuss Your Project
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