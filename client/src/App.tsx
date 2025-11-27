import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import AIAutomation from "@/pages/ai-automation";
import ERPSystems from "@/pages/erp-systems";
import Blockchain from "@/pages/blockchain";
import Salesforce from "@/pages/salesforce";
import IoT from "@/pages/iot";
import MVPDevelopment from "@/pages/mvp-development";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import CaseStudies from "@/pages/case-studies";
import Facebook from "@/pages/facebook";
import Instagram from "@/pages/instagram";
import YouTube from "@/pages/youtube";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/ai-automation" component={AIAutomation} />
      <Route path="/services/erp-systems" component={ERPSystems} />
      <Route path="/services/blockchain" component={Blockchain} />
      <Route path="/services/salesforce" component={Salesforce} />
      <Route path="/services/iot" component={IoT} />
      <Route path="/services/mvp-development" component={MVPDevelopment} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/facebook" component={Facebook} />
      <Route path="/instagram" component={Instagram} />
      <Route path="/youtube" component={YouTube} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
