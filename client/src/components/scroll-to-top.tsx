import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Only scroll to top if it's not a hash link (section link)
    if (!location.includes("#")) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
