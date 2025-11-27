import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Privacy <span className="gradient-text-primary">Policy</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Information We Collect</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact us through our website forms</li>
                      <li>Subscribe to our newsletter or blog updates</li>
                      <li>Request a consultation or coffee meeting</li>
                      <li>Engage with our AI automation and technology services</li>
                    </ul>
                    <p>
                      The types of information we may collect include your name, email address, phone number, 
                      company information, and any other information you choose to provide.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">How We Use Your Information</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our AI automation and technology services</li>
                      <li>Respond to your inquiries and fulfill your requests</li>
                      <li>Send you technical updates, security alerts, and support messages</li>
                      <li>Communicate with you about services, offers, and events</li>
                      <li>Analyze usage patterns to enhance user experience</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Information Sharing</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                      except as described in this policy. We may share information in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and property</li>
                      <li>With trusted service providers who assist in our operations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Data Security</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                      over the internet is 100% secure.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Your Rights</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access, update, or delete your personal information</li>
                      <li>Opt out of receiving promotional communications</li>
                      <li>Request a copy of your data</li>
                      <li>Lodge a complaint with relevant authorities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Contact Us</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at:
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