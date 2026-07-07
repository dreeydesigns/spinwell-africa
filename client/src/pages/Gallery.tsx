// Gallery — Immersive animations
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, whatsappLink } from "@/lib/data";
import { WordReveal, ScrollReveal, StaggerChildren, MagneticButton } from "@/components/AnimationKit";

const GALLERY_IMAGES = [
  { src: ASSETS.girlRiding, alt: "Woman riding a Spinwell smoothie bike", caption: "Pedal-powered smoothie making", color: "#EC2F5D" },
  { src: ASSETS.orangeBikeEvent, alt: "Orange bike at a sports event", caption: "Smoothie bikes at a sporting event", color: "#F5871F" },
  { src: ASSETS.blueBikeBanner, alt: "Blue Spinwell bike with banner", caption: "Move. Mix. Repeat.", color: "#2FA8E0" },
  { src: ASSETS.familyAction, alt: "Family enjoying a smoothie bike", caption: "Fun for the whole family", color: "#3FA34D" },
  { src: ASSETS.bikeLineup, alt: "Lineup of colourful smoothie bikes", caption: "Our colourful fleet", color: "#EC2F5D" },
  { src: ASSETS.whiteBike, alt: "White smoothie bike with watermelon wheel", caption: "The classic watermelon wheel", color: "#F5871F" },
  { src: ASSETS.eventAction, alt: "Spinwell event activation", caption: "Corporate event activation", color: "#3FA34D" },
  { src: ASSETS.bikesShowcase, alt: "Bikes on display", caption: "Ready for action", color: "#2FA8E0" },
  { src: ASSETS.smoothieSplash, alt: "Fresh smoothie with fruits", caption: "Fresh, pedal-powered goodness", color: "#EC2F5D" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = () => { if (lightbox !== null) setLightbox((lightbox + 1) % GALLERY_IMAGES.length); };
  const goPrev = () => { if (lightbox !== null) setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); };

  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#231436] overflow-hidden">
        <FruitWheel size={180} type="watermelon" className="absolute -bottom-14 -right-14 opacity-15 hidden lg:block" />
        <div className="container relative z-10 text-center">
          <ScrollReveal variant="fadeUp" delay={200}>
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={-3} className="mb-5">Gallery</StickerBadge>
          </ScrollReveal>
          <WordReveal text="Moments That Spin" tag="h1" className="font-display font-bold text-white mb-5" />
          <ScrollReveal variant="fadeUp" delay={600}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real events. Real smiles. Real smoothies. See Spinwell in action across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 md:py-24 bg-spinwell-cream">
        <div className="container">
          <StaggerChildren stagger={80} className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5" variant="scaleUp">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer relative border-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ borderColor: `${img.color}30` }}
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-spinwell-red text-white text-center relative overflow-hidden">
        <FruitWheel size={140} type="watermelon" className="absolute -bottom-10 -left-10 opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn">
            <WordReveal text="Want Us at Your Event?" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Let's create moments worth sharing. Tell us about your event and we'll bring the bikes.</p>
            <MagneticButton href={whatsappLink("Hi Spinwell! I'd love to have your bikes at my event!")} target="_blank" rel="noopener noreferrer"
              className="bg-white text-spinwell-red px-8 py-4 rounded-full font-semibold shadow-xl active:scale-95">
              Book Your Event <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10" aria-label="Close"><X className="w-8 h-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10" aria-label="Previous"><ChevronLeft className="w-10 h-10" /></button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10" aria-label="Next"><ChevronRight className="w-10 h-10" /></button>
          <img src={GALLERY_IMAGES[lightbox].src} alt={GALLERY_IMAGES[lightbox].alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-8 text-center text-white/80 text-sm">{GALLERY_IMAGES[lightbox].caption} &middot; {lightbox + 1} / {GALLERY_IMAGES.length}</div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
