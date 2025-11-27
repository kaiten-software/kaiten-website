import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ExternalLink, Camera, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Instagram() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Follow us on <span className="gradient-text-secondary">Instagram</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Get behind-the-scenes content, visual insights into our projects, 
                and daily inspiration from the world of AI automation and business technology.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="cta-button">
                  <a href="https://instagram.com/kaitensoftware" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Follow @KaitenSoftware
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#gallery" className="scroll-smooth">
                    View Our Feed
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 section-bg-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">Visual Stories & Insights</h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Follow our Instagram for visual content that brings technology to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Project Showcases</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Visual walkthroughs of our AI automation implementations, ERP dashboards, and tech solutions in action
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Team Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Behind-the-scenes glimpses of our development process, team collaborations, and office life
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Tech Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Quick visual tips, infographics about AI trends, and bite-sized technology insights for businesses
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headers">Client Celebrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Celebrating our clients' achievements and milestones reached through our technology solutions
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram Feed Preview */}
        <section id="gallery" className="py-20 section-bg-2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 font-headers">Recent Instagram Posts</h2>
              <p className="mt-4 text-xl text-slate-600">
                A preview of our latest visual content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">AI Dashboard Demo</p>
                    <p className="text-sm text-slate-500 mt-2">Real-time analytics in action</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Check out this AI-powered dashboard we built for a logistics company. 
                    Real-time tracking and predictive analytics! 🚀 #AIAutomation #TechInnovation
                  </p>
                </CardContent>
              </Card>

              {/* Post 2 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MessageCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Team Collaboration</p>
                    <p className="text-sm text-slate-500 mt-2">Planning the next big project</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">4 days ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Our team brainstorming session for an upcoming blockchain integration project. 
                    Innovation happens when great minds collaborate! 💡 #TeamWork #Blockchain
                  </p>
                </CardContent>
              </Card>

              {/* Post 3 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-success/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Share2 className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Client Success</p>
                    <p className="text-sm text-slate-500 mt-2">Another happy client milestone</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">1 week ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Celebrating with our client who just hit 40% efficiency improvement 
                    after our ERP implementation! 🎉 #ClientSuccess #ERP #BusinessGrowth
                  </p>
                </CardContent>
              </Card>

              {/* Post 4 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="h-16 w-16 text-success mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Tech Tip Tuesday</p>
                    <p className="text-sm text-slate-500 mt-2">Weekly automation insight</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">1 week ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Tech Tip Tuesday: Start small with automation! 
                    Pick one repetitive task and automate it first. Small wins build momentum! 💪 #TechTips #Automation
                  </p>
                </CardContent>
              </Card>

              {/* Post 5 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Office Culture</p>
                    <p className="text-sm text-slate-500 mt-2">Friday team lunch</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">2 weeks ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Friday team lunch = the best ideas! Today's discussion: 
                    How IoT can revolutionize small manufacturing businesses 🏭 #TeamLunch #IoT #Innovation
                  </p>
                </CardContent>
              </Card>

              {/* Post 6 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Share2 className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Industry News</p>
                    <p className="text-sm text-slate-500 mt-2">Latest AI breakthrough</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-4">
                      <Heart className="h-5 w-5 text-red-500" />
                      <MessageCircle className="h-5 w-5 text-slate-500" />
                      <Share2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-500">2 weeks ago</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>kaitensoftware</strong> Exciting news in the AI world! New developments in natural language processing 
                    are opening doors for better business automation 🚪 #AI #TechNews #Innovation
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
              Get Visual with <span className="gradient-text-secondary">Tech Innovation</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Follow our Instagram for daily inspiration, behind-the-scenes content, 
              and visual insights into the world of AI automation and business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-button">
                <a href="https://instagram.com/kaitensoftware" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Follow @KaitenSoftware
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">
                  Start Your Project
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