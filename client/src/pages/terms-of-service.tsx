import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight font-headers">
                Terms of <span className="gradient-text-primary">Service</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our AI automation and technology services.
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Acceptance of Terms</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      By accessing or using Kaiten Software's services, you agree to be bound by these Terms of Service 
                      and all applicable laws and regulations. If you do not agree with any part of these terms, 
                      you may not use our services.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Our Services</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>Kaiten Software provides comprehensive technology solutions including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>AI Automation and machine learning implementations</li>
                      <li>ERP system design and integration</li>
                      <li>Blockchain development and smart contracts</li>
                      <li>Salesforce optimization and customization</li>
                      <li>IoT device design and prototyping</li>
                      <li>MVP development and AR/VR solutions</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Client Responsibilities</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>When engaging our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information about your business needs</li>
                      <li>Respond promptly to requests for information or feedback</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Respect intellectual property rights</li>
                      <li>Make timely payments according to agreed terms</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Intellectual Property</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      The intellectual property rights of custom solutions developed for your business will be 
                      defined in individual project agreements. Generally:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You retain ownership of your business data and content</li>
                      <li>Custom solutions developed specifically for your business become your property upon full payment</li>
                      <li>We retain rights to general methodologies, frameworks, and non-specific technologies</li>
                      <li>Open-source components remain subject to their respective licenses</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Service Warranties</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>We warrant that our services will be:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Performed with professional skill and care</li>
                      <li>Delivered according to agreed specifications and timelines</li>
                      <li>Compliant with industry best practices</li>
                      <li>Supported with documentation and training as specified</li>
                    </ul>
                    <p>
                      However, technology solutions may require ongoing maintenance and updates, which may be subject to additional agreements.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Limitation of Liability</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      To the fullest extent permitted by law, Kaiten Software shall not be liable for any indirect, 
                      incidental, special, consequential, or punitive damages, including but not limited to loss of 
                      profits, data, or business opportunities.
                    </p>
                    <p>
                      Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Termination</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      Either party may terminate ongoing services with appropriate notice as specified in individual 
                      project agreements. Upon termination:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payment for completed work remains due</li>
                      <li>Deliverables completed to date will be provided</li>
                      <li>Confidential information must be returned or destroyed</li>
                      <li>All parties' rights and obligations under these terms survive termination</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headers">Contact Information</h2>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      For questions about these Terms of Service, please contact us:
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