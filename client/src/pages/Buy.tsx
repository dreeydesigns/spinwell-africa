// Buy a Bike — Immersive animations
import { ArrowRight, Check, Package, Globe, Wrench, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WaveDivider, BlobDivider } from "@/components/WaveDivider";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, BIKES, whatsappLink } from "@/lib/data";
import { WordReveal, ScrollReveal, TiltCard3D, StaggerChildren, MagneticButton, ParallaxLayer } from "@/components/AnimationKit";

const WHY_BUY = [
  { icon: <Package className="w-6 h-6" />, title: "Complete Kit", desc: "Every bike ships with blender jars, basket, horn, wheel covers, and all accessories.", color: "#3FA34D" },
  { icon: <Globe className="w-6 h-6" />, title: "Ships Across Africa", desc: "We deliver to Kenya, Uganda, Tanzania, Rwanda, and beyond. Ask us about your location.", color: "#F5871F" },
  { icon: <Wrench className="w-6 h-6" />, title: "After-Sales Support", desc: "Spare parts, maintenance guides, and direct WhatsApp support from our team.", color: "#2FA8E0" },
];

export default function Buy() {
  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#231436] overflow-hidden">
        <FruitWheel size={200} type="watermelon" className="absolute -bottom-16 -left-16 opacity-15 hidden lg:block" />
        <FruitWheel size={140} type="orange" className="absolute top-10 -right-10 opacity-10 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#231436] to-[#231436]/95" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fadeRight" delay={200}>
                <StickerBadge color="#3FA34D" rotate={-3} className="mb-5">Buy Outright</StickerBadge>
              </ScrollReveal>
              <WordReveal text="Own Your Fleet" tag="h1" className="font-display font-bold text-white mb-5" />
              <ScrollReveal variant="fadeUp" delay={600}>
                <p className="text-white/70 text-lg max-w-xl mb-8">Purchase smoothie bikes, bubble bikes, or spin art bikes outright. Complete kits with everything you need to start spinning.</p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={800}>
                <MagneticButton href={whatsappLink("Hi Spinwell! I'd like to buy bikes. Can you share pricing?")} target="_blank" rel="noopener noreferrer"
                  className="bg-spinwell-green text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-spinwell-green/30 active:scale-95">
                  Get Pricing <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="scaleUp" delay={400} className="hidden lg:block">
              <img src={ASSETS.whiteBike} alt="Spinwell smoothie bike" className="w-full max-w-lg mx-auto drop-shadow-2xl" style={{ animation: "heroFloat 6s ease-in-out infinite" }} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#3FA34D" opacity={0.04} className="w-[500px] h-[500px] -top-40 -right-40" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#EC2F5D" rotate={2} className="mb-4">What You Get</StickerBadge>
            <WordReveal text="Everything in the Box" tag="h2" className="font-display font-bold text-[#231436] mb-4" />
          </ScrollReveal>
          <StaggerChildren stagger={200} className="grid md:grid-cols-3 gap-6" variant="rotateIn">
            {WHY_BUY.map((item) => (
              <TiltCard3D key={item.title} className="rounded-3xl p-8 text-center h-full border-2 hover:shadow-xl transition-shadow" style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}25` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4" style={{ backgroundColor: item.color, boxShadow: `0 4px 15px ${item.color}40` }}>
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-[#231436] mb-2">{item.title}</h3>
                <p className="text-[#231436]/60 text-sm">{item.desc}</p>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <BlobDivider color="#231436" />
      <section className="py-20 md:py-28 bg-[#231436] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FruitWheel size={160} type="orange" className="absolute -bottom-12 -right-12 opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={3} className="mb-4">Our Catalogue</StickerBadge>
            <WordReveal text="Choose Your Bike" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Adult and kids models available in smoothie, bubble, and spin art configurations.</p>
          </ScrollReveal>
          <StaggerChildren stagger={100} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variant="slideUp">
            {BIKES.map((bike) => (
              <TiltCard3D key={bike.id} className="rounded-3xl overflow-hidden border-2 hover:shadow-xl transition-shadow group" style={{ backgroundColor: `${bike.accentColor}10`, borderColor: `${bike.accentColor}25` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={bike.image} alt={bike.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <StickerBadge color={bike.accentColor} rotate={-3}>{bike.audience === "adult" ? "Adult" : "Kids"}</StickerBadge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-white mb-1">{bike.name}</h3>
                  <p className="text-white/40 text-sm mb-3">{bike.tagline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {bike.includes.slice(0, 3).map((item) => (
                      <span key={item} className="flex items-center gap-1 text-[11px] text-white/50">
                        <Check className="w-3 h-3" style={{ color: bike.accentColor }} />{item}
                      </span>
                    ))}
                  </div>
                  <MagneticButton href={whatsappLink(`Hi Spinwell! I'd like to buy the ${bike.name}. Can you share pricing?`)} target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-sm hover:gap-2 transition-all" style={{ color: bike.accentColor }}>
                    Get Price <ChevronRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <WaveDivider color="#FFF9F0" position="top" />

      <section className="py-12 bg-spinwell-cream" style={{ marginTop: "-1px" }}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <div className="grid grid-cols-2 gap-6 items-center">
              <img src={ASSETS.smoothieSplash} alt="Fresh smoothie" className="w-full max-w-xs mx-auto drop-shadow-xl" />
              <div>
                <WordReveal text="Every Bike Comes Ready to Blend" tag="h3" className="font-display font-bold text-[#231436] text-2xl mb-3" />
                <p className="text-[#231436]/60 leading-relaxed mb-4">Complete with commercial-grade blender jars, wicker basket, horn, and two fruit-themed wheel covers. Just add fresh fruit and willing legs.</p>
                <MagneticButton href={whatsappLink("Hi Spinwell! I want to purchase bikes.")} target="_blank" rel="noopener noreferrer"
                  className="bg-spinwell-green text-white px-6 py-2.5 rounded-full font-semibold text-sm active:scale-95">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-spinwell-green text-white text-center relative overflow-hidden">
        <FruitWheel size={140} type="watermelon" className="absolute -bottom-10 -left-10 opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn">
            <WordReveal text="Ready to Own Your Fleet?" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Get a custom quote for your bike order. We ship complete kits across Africa.</p>
            <MagneticButton href={whatsappLink("Hi Spinwell! I want to purchase bikes.")} target="_blank" rel="noopener noreferrer"
              className="bg-white text-spinwell-green px-8 py-4 rounded-full font-semibold shadow-xl active:scale-95">
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
