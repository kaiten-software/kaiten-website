import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import logoPath from "@assets/Kaiten Software Logo Circle Original_1753292281872.png";
import { useCalendly } from "@/hooks/use-calendly";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const { openCalendly, CalendlyModal } = useCalendly();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How We Work", href: "/about" },
    { name: "Insights", href: "/blog" },
  ];

  const companyPages: { name: string; href: string; description: string }[] = [];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location === href || location.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img src={logoPath} alt="Kaiten Software Logo" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold text-primary">{COMPANY_INFO.name.split(" ")[0]}</h1>
                <span className="text-xs text-muted-foreground">{COMPANY_INFO.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${
                    location.startsWith("/services")
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors border-b border-slate-100"
                    >
                      <div className="font-semibold">All Services</div>
                      <div className="text-xs text-slate-500">View complete service overview</div>
                    </Link>
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={service.path}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-xs text-slate-500">{service.description.slice(0, 60)}...</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Button onClick={openCalendly} className="cta-button">
                Coffee with Us
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {/* Mobile Home and Insights */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="space-y-1">
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location === "/services"
                    ? "text-primary bg-primary/10"
                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                All Services
              </Link>
              <div className="pl-4 space-y-1">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.path}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location === service.path
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 hover:text-primary hover:bg-slate-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="px-3 py-2">
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  openCalendly();
                }} 
                className="w-full cta-button"
              >
                Coffee with Us
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <CalendlyModal />
    </nav>
  );
}
