// About Page — Immersive animations
import { ArrowRight, Leaf, Zap, Heart, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WaveDivider, BlobDivider } from "@/components/WaveDivider";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, STATS, whatsappLink } from "@/lib/data";
import { WordReveal, CharReveal, ScrollReveal, TiltCard3D, StaggerChildren, CountUp, MagneticButton, ParallaxLayer } from "@/components/AnimationKit";

const VALUES = [
  { icon: <Leaf className="w-6 h-6" />, title: "Sustainability First", desc: "Zero electricity, locally sourced fruit, minimal waste. Every smoothie is a step toward a greener future.", color: "#3FA34D" },
  { icon: <Zap className="w-6 h-6" />, title: "People-Powered", desc: "We believe in the power of human energy — literally. Our bikes run on nothing but leg power and good vibes.", color: "#F5871F" },
  { icon: <Heart className="w-6 h-6" />, title: "Community Impact", desc: "We create jobs, support local farmers, and bring communities together through shared experiences.", color: "#EC2F5D" },
  { icon: <Globe className="w-6 h-6" />, title: "Made for Africa", desc: "Built for the African market, designed for African events, powered by African energy.", color: "#2FA8E0" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#231436] overflow-hidden">
        <ParallaxLayer speed={0.12} className="absolute inset-0">
          <img src={ASSETS.aboutHero} alt="" className="w-full h-[130%] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/60 to-[#231436]" />
        </ParallaxLayer>
        <FruitWheel size={200} type="watermelon" className="absolute -bottom-16 -left-16 opacity-15 hidden lg:block" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fadeRight" delay={200}>
                <StickerBadge color="#EC2F5D" rotate={-3} className="mb-5">Our Story</StickerBadge>
              </ScrollReveal>
              <WordReveal text="We Spin Things Differently" tag="h1" className="font-display font-bold text-white mb-5" />
              <ScrollReveal variant="fadeUp" delay={600}>
                <CharReveal text="Move. Mix. Repeat." className="font-display text-spinwell-yellow text-xl font-semibold mb-4" delay={800} stagger={40} />
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={1000}>
                <p className="text-white/70 text-lg max-w-xl">
                  Spinwell Africa is on a mission to bring pedal-powered fun to every corner of the continent. One smoothie, one pedal, one smile at a time.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeLeft" delay={400} className="hidden lg:block">
              <TiltCard3D className="rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl" intensity={8}>
                <img src={ASSETS.familyAction} alt="Spinwell in action" className="w-full" />
              </TiltCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#F5871F" opacity={0.05} className="w-[500px] h-[500px] -top-40 -right-40" />
        <OrgBlob color="#3FA34D" opacity={0.04} className="w-[400px] h-[400px] -bottom-32 -left-32" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <TiltCard3D className="rounded-3xl overflow-hidden shadow-lg" intensity={6}>
                  <img src={ASSETS.orangeBikeEvent} alt="Spinwell bike at event" className="w-full" />
                </TiltCard3D>
                <StickerBadge color="#FFC93C" textColor="#231436" rotate={5} className="absolute -bottom-4 -right-4">Est. Nairobi 🇰🇪</StickerBadge>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft" delay={200}>
              <StickerBadge color="#3FA34D" rotate={-2} className="mb-5">The Origin Story</StickerBadge>
              <WordReveal text="From a Simple Idea to a Movement" tag="h2" className="font-display font-bold text-[#231436] mb-6" />
              <div className="space-y-4 text-[#231436]/70 leading-relaxed">
                <p>It started with a question: what if making a smoothie could be as fun as drinking one? That question led to Spinwell Africa — a company that brings pedal-powered smoothie bikes, bubble bikes, and spin art bikes to events across the continent.</p>
                <p>Based in Nairobi, Kenya, we've powered hundreds of events — from corporate wellness days and music festivals to school health programmes and intimate birthday parties. Our bikes don't need electricity, generators, or complicated setups. Just fresh fruit, willing legs, and a sense of adventure.</p>
                <p>Today, Spinwell is more than a bike company. We're a movement for sustainable, people-powered experiences that bring communities together, promote wellness, and prove that the best things in life are powered by you.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <BlobDivider color="#231436" />
      <section className="py-20 md:py-28 bg-[#231436] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FruitWheel size={160} type="orange" className="absolute -bottom-12 -right-12 opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={3} className="mb-4">Our Values</StickerBadge>
            <WordReveal text="What Drives Us" tag="h2" className="font-display font-bold text-white mb-4" />
          </ScrollReveal>
          <StaggerChildren stagger={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variant="rotateIn">
            {VALUES.map((v) => (
              <TiltCard3D key={v.title} className="rounded-3xl p-7 text-center h-full border-2" style={{ backgroundColor: `${v.color}10`, borderColor: `${v.color}25` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4" style={{ backgroundColor: v.color, boxShadow: `0 4px 15px ${v.color}40` }}>
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm">{v.desc}</p>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <WaveDivider color="#FFF9F0" position="top" />

      {/* Stats */}
      <section className="py-16 md:py-20 bg-[#FFF9F0] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div className="container relative z-10">
          <StaggerChildren stagger={150} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" variant="scaleUp">
            {STATS.map((stat, i) => {
              const colors = ["#EC2F5D", "#F5871F", "#3FA34D", "#2FA8E0"];
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
              const suffix = stat.value.replace(/[0-9,]/g, "");
              return (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold mb-1" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: colors[i] }}>
                    <CountUp end={numericValue} suffix={suffix} duration={2500} />
                  </div>
                  <div className="text-[#231436]/60 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Event photos */}
      <section className="py-8 bg-spinwell-cream">
        <div className="container">
          <StaggerChildren stagger={100} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" variant="scaleUp">
            {[ASSETS.blueBikeBanner, ASSETS.orangeBikeEvent, ASSETS.girlRiding, ASSETS.bikeLineup].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square group border-4 border-white shadow-md hover:shadow-xl transition-shadow duration-500">
                <img src={img} alt="Spinwell event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-spinwell-orange text-white text-center relative overflow-hidden">
        <FruitWheel size={140} type="watermelon" className="absolute -bottom-10 -left-10 opacity-20" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn">
            <WordReveal text="Join the Movement" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Whether you want to hire, lease, or buy — let's spin something great together.</p>
            <MagneticButton
              href={whatsappLink("Hi Spinwell! I'd love to learn more about what you do.")}
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-spinwell-orange px-8 py-4 rounded-full font-semibold shadow-xl active:scale-95"
            >
              Let's Chat <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
