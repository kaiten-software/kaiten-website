import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Coffee Chat ☕</h3>
      
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/kaiten/koristu"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}
