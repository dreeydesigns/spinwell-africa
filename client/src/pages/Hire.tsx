// Hire a Bike — Immersive animations
import { ArrowRight, Check, Calendar, MapPin, Users, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WaveDivider, BlobDivider } from "@/components/WaveDivider";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, whatsappLink } from "@/lib/data";
import { WordReveal, ScrollReveal, TiltCard3D, StaggerChildren, MagneticButton, ParallaxLayer } from "@/components/AnimationKit";

const PACKAGES = [
  { name: "Single Bike", emoji: "🚲", ideal: "Birthday parties, small gatherings", includes: ["1 smoothie bike", "Blender jar set", "Setup & collection", "Spinwell team member"], color: "#3FA34D" },
  { name: "Party Pack", emoji: "🎉", ideal: "Corporate events, school days, weddings", includes: ["2–4 smoothie bikes", "Mix of adult & kids bikes", "Blender jar sets", "Full setup & collection", "Dedicated Spinwell crew"], color: "#EC2F5D", popular: true },
  { name: "Festival Fleet", emoji: "🎪", ideal: "Festivals, expos, large activations", includes: ["5+ bikes (smoothie, bubble, spin art)", "Custom branding options", "Full-day crew", "Setup, management & collection", "Fresh fruit supply available"], color: "#F5871F" },
];

const PROCESS = [
  { title: "Tell Us Your Date", desc: "Share your event date, location, and expected guest count via WhatsApp.", color: "#EC2F5D" },
  { title: "We Recommend", desc: "We'll suggest the perfect bike combo and package for your event.", color: "#F5871F" },
  { title: "We Deliver & Set Up", desc: "Our team arrives early, sets everything up, and stays to manage the station.", color: "#3FA34D" },
  { title: "You Enjoy", desc: "Your guests pedal, blend, and have the time of their lives. We handle the rest.", color: "#2FA8E0" },
];

export default function Hire() {
  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#231436] overflow-hidden">
        <ParallaxLayer speed={0.12} className="absolute inset-0">
          <img src={ASSETS.eventAction} alt="" className="w-full h-[130%] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/70 to-[#231436]" />
        </ParallaxLayer>
        <FruitWheel size={180} type="watermelon" className="absolute -bottom-14 -right-14 opacity-15 hidden lg:block" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variant="fadeRight" delay={200}>
                <StickerBadge color="#3FA34D" rotate={-3} className="mb-5">Hire for a Day</StickerBadge>
              </ScrollReveal>
              <WordReveal text="Bring the Fun to Your Event" tag="h1" className="font-display font-bold text-white mb-5" />
              <ScrollReveal variant="fadeUp" delay={600}>
                <p className="text-white/70 text-lg max-w-xl mb-8">
                  We deliver, set up, and manage everything. You just enjoy watching your guests pedal their way to smoothie heaven.
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={800}>
                <MagneticButton
                  href={whatsappLink("Hi Spinwell! I'd like to hire bikes for my event. Here are the details:")}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-spinwell-red text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-spinwell-red/30 active:scale-95"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeLeft" delay={400} className="hidden lg:block">
              <TiltCard3D className="rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl" intensity={8}>
                <img src={ASSETS.blueBikeBanner} alt="Spinwell bike at event" className="w-full" />
              </TiltCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#EC2F5D" opacity={0.04} className="w-[500px] h-[500px] -top-40 -right-40" />
        <OrgBlob color="#3FA34D" opacity={0.04} className="w-[400px] h-[400px] -bottom-32 -left-32" />

        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#F5871F" rotate={2} className="mb-4">Packages</StickerBadge>
            <WordReveal text="Pick Your Party Size" tag="h2" className="font-display font-bold text-[#231436] mb-4" />
            <p className="text-[#231436]/60 text-lg max-w-2xl mx-auto">From intimate gatherings to massive festivals — we've got a package that fits.</p>
          </ScrollReveal>

          <StaggerChildren stagger={200} className="grid md:grid-cols-3 gap-6" variant="rotateIn">
            {PACKAGES.map((pkg) => (
              <TiltCard3D key={pkg.name} className="rounded-3xl p-8 h-full flex flex-col relative border-2 hover:shadow-xl transition-shadow" style={{ backgroundColor: `${pkg.color}08`, borderColor: `${pkg.color}25` }}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <StickerBadge color={pkg.color} rotate={-2}>Most Popular</StickerBadge>
                  </div>
                )}
                <div className="text-5xl mb-5" style={{ animation: "wiggle 2s ease-in-out infinite" }}>{pkg.emoji}</div>
                <h3 className="font-display font-bold text-xl text-[#231436] mb-1">{pkg.name}</h3>
                <p className="text-[#231436]/50 text-sm mb-5">Ideal for: {pkg.ideal}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#231436]/70">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: pkg.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href={whatsappLink(`Hi Spinwell! I'm interested in the "${pkg.name}" hire package for my event.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg active:scale-95 justify-center"
                  style={{ backgroundColor: pkg.color, boxShadow: `0 4px 15px ${pkg.color}30` }}
                >
                  Let's Party <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <BlobDivider color="#231436" />
      <section className="py-20 md:py-28 bg-[#231436] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FruitWheel size={160} type="orange" className="absolute -bottom-12 -right-12 opacity-10" />
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={3} className="mb-4">Easy as 1-2-3-4</StickerBadge>
            <WordReveal text="How Hiring Works" tag="h2" className="font-display font-bold text-white mb-4" />
          </ScrollReveal>

          <StaggerChildren stagger={150} className="grid md:grid-cols-4 gap-8" variant="slideUp">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-xl font-display font-bold" style={{ backgroundColor: step.color, boxShadow: `0 4px 20px ${step.color}40` }}>
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <WaveDivider color="#FFF9F0" position="top" />

      {/* Event photos strip */}
      <section className="py-8 bg-spinwell-cream" style={{ marginTop: "-1px" }}>
        <div className="container">
          <StaggerChildren stagger={100} className="grid grid-cols-3 gap-4" variant="scaleUp">
            {[ASSETS.orangeBikeEvent, ASSETS.familyAction, ASSETS.blueBikeBanner].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] group border-4 border-white shadow-md hover:shadow-xl transition-shadow duration-500">
                <img src={img} alt="Spinwell event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
            <WordReveal text="Ready to Make Memories?" tag="h2" className="font-display font-bold text-white mb-4" />
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Tell us about your event and we'll put together the perfect package. No obligations, just good vibes.</p>
            <MagneticButton
              href={whatsappLink("Hi Spinwell! I'd like to hire bikes for my event on [DATE]. Here are the details:")}
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-spinwell-red px-8 py-4 rounded-full font-semibold shadow-xl active:scale-95"
            >
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
