import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Cookie <span className="gradient-text-primary">Policy</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Learn how we use cookies to improve your experience on our website.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 section-bg-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-500 mb-8">
                <strong>Last Updated:</strong> January 2025
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">What Are Cookies</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better experience by remembering your preferences and 
                      analyzing how you use our site.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Types of Cookies We Use</h2>
                  <div className="space-y-6 text-slate-600">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 font-headers">Essential Cookies</h3>
                      <p>
                        These cookies are necessary for the website to function properly. They enable basic features 
                        like page navigation, form submissions, and access to secure areas of the website.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 font-headers">Analytics Cookies</h3>
                      <p>
                        We use analytics cookies to understand how visitors interact with our website. This helps us 
                        improve our content and user experience. These cookies collect information about pages visited, 
                        time spent on the site, and any errors encountered.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 font-headers">Functional Cookies</h3>
                      <p>
                        These cookies allow the website to remember choices you make (such as your contact preferences) 
                        and provide enhanced, more personal features.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">How We Use Cookies</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>We use cookies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ensure our website functions properly</li>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Improve our AI automation and technology services</li>
                      <li>Personalize your experience</li>
                      <li>Provide relevant content and recommendations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Third-Party Cookies</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      We may use third-party services that place cookies on your device. These may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Google Analytics for website analytics</li>
                      <li>Social media platforms for content sharing</li>
                      <li>Customer support tools for better service</li>
                    </ul>
                    <p>
                      These third parties have their own privacy policies governing their use of cookies.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Managing Your Cookie Preferences</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      You can control and manage cookies in several ways:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use your browser settings to block or delete cookies</li>
                      <li>Set your browser to notify you when cookies are being sent</li>
                      <li>Use browser extensions that manage cookies</li>
                      <li>Opt out of analytics cookies through our website settings</li>
                    </ul>
                    <p>
                      Please note that disabling certain cookies may affect the functionality of our website 
                      and your user experience.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Browser-Specific Instructions</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>For detailed instructions on managing cookies, please refer to your browser's help section:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Chrome:</strong> Settings {'->'} Privacy and Security {'->'} Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Options {'->'} Privacy & Security {'->'} Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Cookies and website data</li>
                      <li><strong>Edge:</strong> Settings {'->'} Cookies and site permissions</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Contact Us</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      If you have questions about our use of cookies, please contact us:
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p><strong>Email:</strong> hello@kaitensoftware.com</p>
                      <p><strong>Phone:</strong> +919001449944</p>
                      <p><strong>Address:</strong> B-95 Bhan Nagar, Prince Road, Vaishali Nagar, Jaipur, RJ, India, 302021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}