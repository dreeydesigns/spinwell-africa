// Lease a Bike — Immersive animations
import { ArrowRight, Building, TrendingUp, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WaveDivider, BlobDivider } from "@/components/WaveDivider";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, whatsappLink } from "@/lib/data";
import { WordReveal, ScrollReveal, TiltCard3D, StaggerChildren, MagneticButton, ParallaxLayer } from "@/components/AnimationKit";

const BENEFITS = [
  { icon: <Building className="w-6 h-6" />, title: "No Upfront Cost", desc: "Get bikes at your venue without the capital investment of buying outright.", color: "#EC2F5D" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Revenue Generator", desc: "Charge per smoothie or offer as a free perk — either way, it drives foot traffic.", color: "#F5871F" },
  { icon: <Shield className="w-6 h-6" />, title: "Maintenance Included", desc: "We handle servicing, spare parts, and blender replacements. You just pedal.", color: "#3FA34D" },
  { icon: <Clock className="w-6 h-6" />, title: "Flexible Terms", desc: "Monthly, quarterly, or annual leases. Scale up or swap bikes as your needs change.", color: "#2FA8E0" },
];

const IDEAL_FOR = [
  { name: "Juice bars & smoothie shops", emoji: "🥤" },
  { name: "Hotels & resorts", emoji: "🏨" },
  { name: "Gyms & wellness centres", emoji: "💪" },
  { name: "Shopping malls", emoji: "🛍️" },
  { name: "Co-working spaces", emoji: "💻" },
  { name: "Restaurants & cafés", emoji: "☕" },
];

export default function Lease() {
  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#231436] overflow-hidden">
        <ParallaxLayer speed={0.12} className="absolute inset-0">
          <img src={ASSETS.blueBikeBanner} alt="" className="w-full h-[130%] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/70 to-[#231436]" />
        </ParallaxLayer>
        <FruitWheel size={180} type="orange" className="absolute -bottom-14 -right-14 opacity-15 hidden lg:block" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fadeRight" delay={200}>
                <StickerBadge color="#F5871F" rotate={-3} className="mb-5">Lease Long-Term</StickerBadge>
              </ScrollReveal>
              <WordReveal text="Keep the Spin Going" tag="h1" className="font-display font-bold text-white mb-5" />
              <ScrollReveal variant="fadeUp" delay={600}>
                <p className="text-white/70 text-lg max-w-xl mb-8">Place smoothie bikes at your venue on a flexible monthly lease. No upfront purchase, no maintenance headaches — just fresh smoothies and happy customers.</p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={800}>
                <MagneticButton href={whatsappLink("Hi Spinwell! I'm interested in leasing bikes for my business.")} target="_blank" rel="noopener noreferrer"
                  className="bg-spinwell-orange text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-spinwell-orange/30 active:scale-95">
                  Let's Talk Business <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeLeft" delay={400} className="hidden lg:block">
              <TiltCard3D className="rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl" intensity={8}>
                <img src={ASSETS.orangeBikeEvent} alt="Smoothie bike at venue" className="w-full" />
              </TiltCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#F5871F" opacity={0.04} className="w-[500px] h-[500px] -top-40 -right-40" />
        <OrgBlob color="#EC2F5D" opacity={0.04} className="w-[400px] h-[400px] -bottom-32 -left-32" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#3FA34D" rotate={2} className="mb-4">Benefits</StickerBadge>
            <WordReveal text="Why Lease with Spinwell?" tag="h2" className="font-display font-bold text-[#231436] mb-4" />
          </ScrollReveal>
          <StaggerChildren stagger={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variant="rotateIn">
            {BENEFITS.map((b) => (
              <TiltCard3D key={b.title} className="rounded-3xl p-7 text-center h-full border-2 hover:shadow-xl transition-shadow" style={{ backgroundColor: `${b.color}10`, borderColor: `${b.color}25` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4" style={{ backgroundColor: b.color, boxShadow: `0 4px 15px ${b.color}40` }}>
                  {b.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-[#231436] mb-2">{b.title}</h3>
                <p className="text-[#231436]/60 text-sm">{b.desc}</p>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <BlobDivider color="#231436" />
      <section className="py-20 md:py-28 bg-[#231436] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FruitWheel size={160} type="watermelon" className="absolute -bottom-12 -left-12 opacity-10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeRight">
              <img src={ASSETS.whiteBike} alt="Spinwell smoothie bike" className="w-full max-w-md mx-auto drop-shadow-2xl" style={{ animation: "heroFloat 6s ease-in-out infinite" }} />
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft" delay={200}>
              <StickerBadge color="#FFC93C" textColor="#231436" rotate={-2} className="mb-5">Perfect For</StickerBadge>
              <WordReveal text="Businesses That Want to Stand Out" tag="h2" className="font-display font-bold text-white mb-6" />
              <StaggerChildren stagger={80} className="grid grid-cols-2 gap-4 mb-8" variant="slideUp">
                {IDEAL_FOR.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 text-white/80 text-sm bg-white/5 rounded-2xl p-3 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-2xl">{item.emoji}</span>
                    {item.name}
                  </div>
                ))}
              </StaggerChildren>
              <MagneticButton href={whatsappLink("Hi Spinwell! I run a business and I'm interested in leasing smoothie bikes.")} target="_blank" rel="noopener noreferrer"
                className="bg-spinwell-orange text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-spinwell-orange/30 active:scale-95">
                Start Spinning Revenue <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <WaveDivider color="#FFF9F0" position="top" />

      <section className="py-16 md:py-20 bg-spinwell-orange text-white text-center relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FruitWheel size={140} type="watermelon" className="absolute -bottom-10 -left-10 opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn">
            <WordReveal text="Every Lease is Custom-Built" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Tell us what you need and we'll make it happen. Flexible terms, zero hassle.</p>
            <MagneticButton href={whatsappLink("Hi Spinwell! I'd like to explore leasing options for my venue.")} target="_blank" rel="noopener noreferrer"
              className="bg-white text-spinwell-orange px-8 py-4 rounded-full font-semibold shadow-xl active:scale-95">
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
