// Floating WhatsApp CTA — always visible, pulses gently
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi Spinwell! I'd love to learn more about your bikes.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
}
