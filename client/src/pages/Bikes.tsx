// Bikes Catalogue — Immersive scroll with 3D cards, word reveals, parallax
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { BIKES, ASSETS, whatsappLink } from "@/lib/data";
import { WordReveal, ScrollReveal, TiltCard3D, MagneticButton, ParallaxLayer } from "@/components/AnimationKit";

function BikeDetailCard({ bike, index }: { bike: typeof BIKES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div id={bike.id} className="scroll-mt-24">
      <ScrollReveal variant={isEven ? "fadeLeft" : "fadeRight"} delay={100}>
        <TiltCard3D
          className="rounded-3xl overflow-hidden border-2"
          style={{ backgroundColor: `${bike.accentColor}06`, borderColor: `${bike.accentColor}20` }}
          intensity={6}
        >
          <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? "md:[direction:rtl]" : ""}`}>
            <div className="relative h-72 md:h-auto md:min-h-[400px] overflow-hidden group">
              <img src={bike.image} alt={bike.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-5 left-5 flex gap-2">
                <StickerBadge color={bike.accentColor} rotate={-3}>
                  {bike.audience === "adult" ? "Adults" : "Kids"}
                </StickerBadge>
                <StickerBadge color="#231436" rotate={2}>
                  {bike.category === "smoothie" ? "🥤 Smoothie" : bike.category === "bubble" ? "🫧 Bubble" : "🎨 Spin Art"}
                </StickerBadge>
              </div>
            </div>
            <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? "md:[direction:ltr]" : ""}`}>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[#231436] mb-2">{bike.name}</h3>
              <p className="text-sm italic mb-4" style={{ color: bike.accentColor }}>{bike.tagline}</p>
              <p className="text-[#231436]/60 text-sm leading-relaxed mb-6">{bike.description}</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Dimensions", value: bike.dimensions },
                  { label: "Weight", value: bike.weight },
                  { label: "Max Load", value: bike.maxLoad },
                ].map((spec) => (
                  <div key={spec.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: `${bike.accentColor}10` }}>
                    <div className="text-xs text-[#231436]/40 mb-1">{spec.label}</div>
                    <div className="text-sm font-semibold text-[#231436]">{spec.value}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors duration-300" style={{ color: bike.accentColor }}>
                {expanded ? "Hide Details" : "What's Included"}
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: expanded ? "300px" : "0", opacity: expanded ? 1 : 0 }}>
                <ul className="space-y-2 mb-4">
                  {bike.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#231436]/60">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: bike.accentColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {bike.colors.map((color) => (
                    <span key={color} className="text-xs px-3 py-1 rounded-full bg-[#231436]/5 text-[#231436]/60">{color}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <MagneticButton href={whatsappLink(`Hi Spinwell! I'm interested in the ${bike.name}. Can you share more details?`)} target="_blank" rel="noopener noreferrer"
                  className="text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg active:scale-95"
                  style={{ backgroundColor: bike.accentColor, boxShadow: `0 8px 25px ${bike.accentColor}40` }}>
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <Link href="/hire" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors duration-300" style={{ borderColor: `${bike.accentColor}30`, color: bike.accentColor }}>
                  Hire This Bike
                </Link>
              </div>
            </div>
          </div>
        </TiltCard3D>
      </ScrollReveal>
    </div>
  );
}

export default function Bikes() {
  const [filter, setFilter] = useState<"all" | "adult" | "kids">("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "smoothie" | "bubble" | "spin-art">("all");
  const filtered = BIKES.filter((b) => {
    if (filter !== "all" && b.audience !== filter) return false;
    if (categoryFilter !== "all" && b.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#231436] overflow-hidden">
        <ParallaxLayer speed={0.1} className="absolute inset-0">
          <img src={ASSETS.bikeLineup} alt="" className="w-full h-[130%] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/80 to-[#231436]/95" />
        </ParallaxLayer>
        <FruitWheel size={180} type="watermelon" className="absolute -bottom-16 -right-16 opacity-15" />
        <div className="container relative z-10 text-center">
          <ScrollReveal variant="fadeUp">
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={-2} className="mb-5">Our Fleet</StickerBadge>
          </ScrollReveal>
          <WordReveal text="The Bike Catalogue" tag="h1" className="font-display font-bold text-white mb-5" />
          <ScrollReveal variant="fadeUp" delay={400}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Six unique pedal-powered experiences. Smoothie bikes, bubble bikes, and spin art bikes — for adults and kids.</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-8 bg-spinwell-cream sticky top-16 z-30 border-b border-[#231436]/5">
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-wrap gap-3 justify-center">
              {(["all", "adult", "kids"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${filter === f ? "bg-spinwell-red text-white shadow-lg shadow-spinwell-red/30" : "bg-white text-[#231436]/60 hover:bg-[#231436]/5"}`}>
                  {f === "all" ? "All Bikes" : f === "adult" ? "Adult Bikes" : "Kids Bikes"}
                </button>
              ))}
              <div className="w-px h-8 bg-[#231436]/10 self-center hidden md:block" />
              {(["all", "smoothie", "bubble", "spin-art"] as const).map((c) => (
                <button key={c} onClick={() => setCategoryFilter(c)} className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${categoryFilter === c ? "bg-spinwell-orange text-white shadow-lg shadow-spinwell-orange/30" : "bg-white text-[#231436]/60 hover:bg-[#231436]/5"}`}>
                  {c === "all" ? "All Types" : c === "smoothie" ? "🥤 Smoothie" : c === "bubble" ? "🫧 Bubble" : "🎨 Spin Art"}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#3FA34D" opacity={0.04} className="w-[500px] h-[500px] -top-40 -left-40" />
        <OrgBlob color="#F5871F" opacity={0.03} className="w-[400px] h-[400px] -bottom-32 -right-32" />
        <div className="container relative z-10 space-y-12">
          {filtered.length === 0 ? (
            <ScrollReveal variant="fadeUp" className="text-center py-20">
              <p className="text-[#231436]/40 text-lg">No bikes match your filters. Try a different combination.</p>
            </ScrollReveal>
          ) : (
            filtered.map((bike, i) => <BikeDetailCard key={bike.id} bike={bike} index={i} />)
          )}
        </div>
      </section>
      <section className="py-20 bg-[#231436] relative overflow-hidden">
        <FruitWheel size={160} type="orange" className="absolute -top-16 -left-16 opacity-10" />
        <div className="container relative z-10 text-center">
          <ScrollReveal variant="blurIn">
            <WordReveal text="Can't Decide? Let's Chat." tag="h2" className="font-display font-bold text-white mb-6" />
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">Tell us about your event and we'll recommend the perfect bike combo.</p>
            <MagneticButton href={whatsappLink("Hi Spinwell! I need help choosing the right bikes for my event.")} target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 active:scale-95">
              Chat on WhatsApp <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
