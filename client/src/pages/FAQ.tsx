// Juicy Playground — FAQ Page
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionReveal from "@/components/SectionReveal";
import { FAQS, whatsappLink } from "@/lib/data";

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <SectionReveal delay={index * 60}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 text-left"
          aria-expanded={open}
        >
          <span className="font-display font-semibold text-[#231436] pr-4">{faq.question}</span>
          <ChevronDown className={`w-5 h-5 text-spinwell-red shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 }}
        >
          <div className="px-6 pb-6 text-[#231436]/60 text-sm leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function FAQ() {
  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#231436]">
        <div className="container text-center">
          <span className="inline-block bg-spinwell-yellow/20 text-spinwell-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="font-display font-bold text-white mb-4 text-[clamp(2.5rem,5vw,4rem)]">
            Got Questions?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about Spinwell bikes, hiring, leasing, and buying.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 bg-spinwell-cream">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-spinwell-red text-white text-center">
        <div className="container">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Still Have Questions?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Drop us a message on WhatsApp and we'll get back to you in no time.
            </p>
            <a
              href={whatsappLink("Hi Spinwell! I have a question about your bikes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-spinwell-red px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
            >
              Ask on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
