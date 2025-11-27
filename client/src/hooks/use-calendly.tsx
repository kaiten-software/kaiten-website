import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function useCalendly() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script when modal opens
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  const CalendlyModal = () => (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Schedule Your Coffee Chat ☕</DialogTitle>
        </DialogHeader>
        <div 
          className="calendly-inline-widget w-full flex-1" 
          data-url="https://calendly.com/kaiten/koristu"
          style={{ minWidth: "320px", height: "calc(100% - 60px)" }}
        ></div>
      </DialogContent>
    </Dialog>
  );

  return { openCalendly, closeCalendly, CalendlyModal };
}
