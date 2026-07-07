// Juicy Playground — Homepage — Immersive Scroll Storytelling
import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight, Leaf, ChevronRight, Sparkles, Heart, Zap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WaveDivider, BlobDivider } from "@/components/WaveDivider";
import { OrgBlob, FruitWheel, StickerBadge } from "@/components/Decorations";
import { ASSETS, BIKES, BLOG_POSTS, STATS, HOW_IT_WORKS, whatsappLink } from "@/lib/data";
import {
  WordReveal, CharReveal, ParallaxLayer, ScrollReveal, CountUp,
  MagneticButton, StaggerChildren, TiltCard3D,
} from "@/components/AnimationKit";

/* ─── Floating fruit particles with deterministic layout ─── */
function FloatingFruits() {
  const fruits = useMemo(() => {
    const items = ["🍓", "🥝", "🍊", "🍌", "🫐", "🍉", "🍋", "🍑"];
    return items.map((emoji, i) => ({
      emoji,
      left: `${10 + (i * 12) % 85}%`,
      top: `${5 + (i * 17) % 80}%`,
      size: 16 + (i % 3) * 8,
      delay: i * 0.4,
      duration: 4 + (i % 3) * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fruits.map((f, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: f.left,
            top: f.top,
            fontSize: f.size,
            animation: `heroFloat ${f.duration}s ease-in-out ${f.delay}s infinite`,
            opacity: 0.6,
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
}

/* ─── Marquee ticker ─── */
function Marquee() {
  const items = ["Pedal-Powered", "Zero Electricity", "Fresh Smoothies", "Eco-Friendly", "Fun for All Ages", "Corporate Events", "Weddings", "Festivals", "Team Building", "Wellness Days", "Made in Africa"];
  return (
    <div className="overflow-hidden bg-spinwell-red py-3.5 md:py-4">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 md:mx-8 text-white font-display font-semibold text-sm md:text-base flex items-center gap-3">
            <span className="w-2 h-2 bg-spinwell-yellow rounded-full shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Scroll-linked hero image ─── */
function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative hidden lg:block">
      {/* Glow behind bike */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236,47,93,0.25) 0%, rgba(245,135,31,0.15) 40%, transparent 70%)",
          transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0003})`,
        }}
      />
      {/* Main bike image */}
      <img
        src={ASSETS.girlRiding}
        alt="Woman riding a Spinwell smoothie bike"
        className="w-full max-w-lg mx-auto relative z-10 drop-shadow-2xl"
        style={{
          animation: "heroFloat 6s ease-in-out infinite",
          transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * 0.01}deg)`,
        }}
      />
      {/* Floating smoothie splash */}
      <img
        src={ASSETS.smoothieSplash}
        alt=""
        className="absolute -top-8 -right-12 w-32 z-20 drop-shadow-lg"
        style={{
          animation: "heroFloat 5s ease-in-out 0.5s infinite",
          transform: `translateY(${scrollY * -0.25}px)`,
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-spinwell-cream overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#231436]">
        {/* Parallax background */}
        <ParallaxLayer speed={0.15} className="absolute inset-0">
          <img src={ASSETS.heroBg} alt="" className="w-full h-[130%] object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/70 via-[#231436]/50 to-[#231436]/90" />
        </ParallaxLayer>

        <FloatingFruits />
        <FruitWheel size={200} type="watermelon" className="absolute -bottom-12 -left-12 opacity-25 hidden lg:block" />
        <FruitWheel size={140} type="orange" className="absolute top-24 -right-10 opacity-15 hidden lg:block" />

        <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Pill badge */}
              <ScrollReveal variant="fadeRight" delay={300}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-white/10">
                  <Leaf className="w-4 h-4 text-spinwell-green" />
                  <span className="text-white/90 text-sm font-medium tracking-wide">Zero electricity. Pure leg power.</span>
                </div>
              </ScrollReveal>

              {/* Word reveal headline */}
              <WordReveal
                text="Spin the Fun Loose."
                className="font-display font-bold text-white leading-[1.05] mb-4"
                tag="h1"
                delay={500}
              />

              {/* Char reveal tagline */}
              <div className="mb-8">
                <CharReveal
                  text="Pedal. Blend. Sip. Repeat."
                  className="font-display text-spinwell-yellow text-xl md:text-2xl font-semibold"
                  delay={1200}
                  stagger={40}
                />
              </div>

              {/* Description with fade */}
              <ScrollReveal variant="fadeUp" delay={1600}>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                  Pedal-powered smoothie bikes, bubble bikes, and spin art bikes that turn any event into an unforgettable experience. Hire, lease, or buy across Africa.
                </p>
              </ScrollReveal>

              {/* CTA buttons with magnetic effect */}
              <ScrollReveal variant="fadeUp" delay={1900} className="flex flex-wrap gap-4">
                <MagneticButton
                  href={whatsappLink("Hi Spinwell! I'd like to hire bikes for my event.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-spinwell-red text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-spinwell-red/30 hover:shadow-xl hover:shadow-spinwell-red/40 active:scale-95"
                >
                  Book Your Event <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  href="/bikes"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-base border border-white/20 hover:bg-white/20"
                >
                  Explore Bikes <Sparkles className="w-5 h-5" />
                </MagneticButton>
              </ScrollReveal>
            </div>

            <HeroImage />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" style={{ animation: "smoothBounce 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      <Marquee />

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#3FA34D" opacity={0.06} className="w-[500px] h-[500px] -top-40 -right-40" />
        <OrgBlob color="#F5871F" opacity={0.05} className="w-[400px] h-[400px] -bottom-32 -left-32" />

        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-20">
            <StickerBadge color="#3FA34D" rotate={-2} className="mb-5">How It Works</StickerBadge>
            <WordReveal
              text="Three Steps to Smoothie Heaven"
              tag="h2"
              className="font-display font-bold text-[#231436] mb-5"
            />
            <p className="text-[#231436]/60 text-lg max-w-2xl mx-auto">
              No electricity. No complicated setup. Just hop on and pedal.
            </p>
          </ScrollReveal>

          <StaggerChildren stagger={200} className="grid md:grid-cols-3 gap-8 md:gap-12" variant="slideUp">
            {HOW_IT_WORKS.map((step, i) => {
              const bgColors = ["bg-[#EC2F5D08]", "bg-[#F5871F08]", "bg-[#3FA34D08]"];
              const borderColors = ["border-[#EC2F5D20]", "border-[#F5871F20]", "border-[#3FA34D20]"];
              const accentColors = ["#EC2F5D", "#F5871F", "#3FA34D"];
              return (
                <TiltCard3D key={step.step} className={`rounded-3xl p-10 text-center border-2 ${bgColors[i]} ${borderColors[i]}`}>
                  <div className="text-6xl mb-6" style={{ animation: `wiggle 2s ease-in-out ${i * 0.3}s infinite` }}>{step.icon}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-display font-bold text-xl mb-5" style={{ backgroundColor: accentColors[i] }}>
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#231436] mb-3">{step.title}</h3>
                  <p className="text-[#231436]/60 text-sm leading-relaxed">{step.description}</p>
                </TiltCard3D>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ BIKE SHOWCASE — Dark Immersive ═══════════════════ */}
      <BlobDivider color="#231436" />
      <section className="bg-[#231436] py-24 md:py-32 relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <FloatingFruits />
        <FruitWheel size={220} type="watermelon" className="absolute -bottom-24 -right-24 opacity-10" />
        <FruitWheel size={160} type="orange" className="absolute top-16 -left-20 opacity-8" />

        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#FFC93C" textColor="#231436" rotate={3} className="mb-5">Our Fleet</StickerBadge>
            <WordReveal
              text="Meet the Bikes"
              tag="h2"
              className="font-display font-bold text-white mb-5"
            />
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Six unique pedal-powered experiences. Smoothie bikes, bubble bikes, and spin art bikes.
            </p>
          </ScrollReveal>

          <StaggerChildren stagger={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variant="slideUp">
            {BIKES.slice(0, 3).map((bike) => (
              <TiltCard3D
                key={bike.id}
                className="rounded-3xl overflow-hidden border-2 group"
                style={{ backgroundColor: `${bike.accentColor}12`, borderColor: `${bike.accentColor}25` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231436]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <StickerBadge color={bike.accentColor} rotate={-3}>{bike.audience === "adult" ? "Adults" : "Kids"}</StickerBadge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                      {bike.category === "smoothie" ? "🥤 Smoothie" : bike.category === "bubble" ? "🫧 Bubble" : "🎨 Spin Art"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-white mb-2">{bike.name}</h3>
                  <p className="text-white/40 text-sm italic mb-3">{bike.tagline}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-2">{bike.description}</p>
                  <Link href={`/bikes#${bike.id}`} className="inline-flex items-center gap-1 text-spinwell-yellow text-sm font-semibold hover:gap-3 transition-all duration-300">
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </TiltCard3D>
            ))}
          </StaggerChildren>

          <ScrollReveal variant="fadeUp" delay={400} className="text-center mt-14">
            <MagneticButton href="/bikes" className="bg-spinwell-red text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-spinwell-red/30 hover:shadow-xl active:scale-95">
              See All 6 Bikes <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
      <WaveDivider color="#FFF9F0" position="top" />

      {/* ═══════════════════ STATS — Animated Counters ═══════════════════ */}
      <section className="py-20 md:py-24 bg-[#FFF9F0] relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #231436 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container relative z-10">
          <StaggerChildren stagger={150} className="grid grid-cols-2 md:grid-cols-4 gap-8" variant="scaleUp">
            {STATS.map((stat, i) => {
              const colors = ["#EC2F5D", "#F5871F", "#3FA34D", "#2FA8E0"];
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
              const suffix = stat.value.replace(/[0-9,]/g, "");
              return (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: colors[i], animation: `textGlow 3s ease-in-out ${i * 0.5}s infinite` }}>
                    <CountUp end={numericValue} suffix={suffix} duration={2500} />
                  </div>
                  <div className="text-[#231436]/50 text-sm font-medium tracking-wide">{stat.label}</div>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ PHOTO STRIP — Parallax Gallery ═══════════════════ */}
      <section className="py-6 bg-spinwell-cream overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[ASSETS.orangeBikeEvent, ASSETS.blueBikeBanner, ASSETS.familyAction, ASSETS.bikeLineup].map((img, i) => (
              <ScrollReveal key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden aspect-square group border-4 border-white shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                  <img
                    src={img}
                    alt="Spinwell event"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES — Hire / Lease / Buy ═══════════════════ */}
      <section className="py-24 md:py-32 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#FFC93C" opacity={0.08} className="w-[450px] h-[450px] -top-32 -left-40" />
        <OrgBlob color="#2FA8E0" opacity={0.06} className="w-[350px] h-[350px] -bottom-24 -right-24" />

        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center mb-16">
            <StickerBadge color="#F5871F" rotate={2} className="mb-5">Our Services</StickerBadge>
            <WordReveal text="Hire. Lease. Buy." tag="h2" className="font-display font-bold text-[#231436] mb-5" />
            <p className="text-[#231436]/60 text-lg max-w-2xl mx-auto">
              Whether you need bikes for a day, a month, or forever — we've got a plan that fits.
            </p>
          </ScrollReveal>

          <StaggerChildren stagger={200} className="grid md:grid-cols-3 gap-6" variant="rotateIn">
            {[
              { title: "Hire for a Day", desc: "Perfect for events. We deliver, set up, and collect. You just enjoy the fun.", color: "#EC2F5D", icon: <Zap className="w-7 h-7" />, href: "/hire", cta: "Let's Party" },
              { title: "Lease Monthly", desc: "Ideal for businesses. Juice bars, hotels, gyms — keep the bikes as long as you need.", color: "#F5871F", icon: <Users className="w-7 h-7" />, href: "/lease", cta: "Start Spinning" },
              { title: "Buy Outright", desc: "Own your fleet. Adult and kids bikes available with full accessories included.", color: "#3FA34D", icon: <Leaf className="w-7 h-7" />, href: "/buy", cta: "Own a Bike" },
            ].map((service) => (
              <TiltCard3D
                key={service.title}
                className="rounded-3xl p-8 hover:shadow-xl transition-shadow h-full flex flex-col border-2"
                style={{ backgroundColor: `${service.color}08`, borderColor: `${service.color}20` }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg" style={{ backgroundColor: service.color, boxShadow: `0 8px 25px ${service.color}40` }}>
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-[#231436] mb-3">{service.title}</h3>
                <p className="text-[#231436]/60 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all duration-300" style={{ color: service.color }}>
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </TiltCard3D>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ BIG CTA — Immersive Parallax ═══════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <ParallaxLayer speed={0.2} className="absolute inset-0">
          <img src={ASSETS.eventAction} alt="" className="w-full h-[130%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#231436]/90 via-[#231436]/80 to-[#231436]/60" />
        </ParallaxLayer>
        <FloatingFruits />
        <FruitWheel size={180} type="watermelon" className="absolute -bottom-20 -left-20 opacity-15" />

        <div className="container relative z-10 text-center">
          <ScrollReveal variant="blurIn">
            <WordReveal
              text="Ready to Spin the Fun Loose?"
              tag="h2"
              className="font-display font-bold text-white mb-6"
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={400}>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
              Drop us a message on WhatsApp and let's plan your next unforgettable event together.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="scaleUp" delay={600}>
            <MagneticButton
              href={whatsappLink("Hi Spinwell! I'd like to book bikes for my event. Here are the details:")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.794-6.233-2.13l-.435-.344-2.655.888.89-2.652-.357-.448A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Pedal Your First Smoothie
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ BLOG PREVIEW ═══════════════════ */}
      <section className="py-24 md:py-32 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#EC2F5D" opacity={0.04} className="w-[400px] h-[400px] -top-20 -right-20" />

        <div className="container relative z-10">
          <ScrollReveal variant="fadeUp" className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
            <div>
              <StickerBadge color="#2FA8E0" rotate={-2} className="mb-5">From the Blog</StickerBadge>
              <WordReveal text="Stories & Ideas" tag="h2" className="font-display font-bold text-[#231436]" />
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-spinwell-red font-semibold hover:gap-3 transition-all duration-300">
              View All Posts <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>

          <StaggerChildren stagger={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variant="slideUp">
            {BLOG_POSTS.slice(0, 3).map((post, i) => {
              const borderColors = ["#EC2F5D", "#F5871F", "#3FA34D"];
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <TiltCard3D className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border-b-4" style={{ borderBottomColor: borderColors[i] }}>
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <StickerBadge color={borderColors[i]} rotate={-3}>{post.category}</StickerBadge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[#231436]/40 text-xs mb-3">
                        <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span className="w-1 h-1 bg-[#231436]/30 rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-[#231436] mb-2 group-hover:text-spinwell-red transition-colors duration-300 line-clamp-2">{post.title}</h3>
                      <p className="text-[#231436]/55 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </TiltCard3D>
                </Link>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════ TRUST STRIP ═══════════════════ */}
      <section className="py-16 bg-[#231436] relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal variant="blurIn" className="text-center">
            <p className="text-white/30 text-sm tracking-widest uppercase mb-8 font-medium">Trusted by event planners across Africa</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
              {["Corporate Events", "Music Festivals", "Weddings", "Schools", "Brand Activations"].map((name, i) => (
                <ScrollReveal key={name} variant="fadeUp" delay={i * 100}>
                  <span className="text-white/20 font-display font-bold text-lg md:text-xl hover:text-white/50 transition-colors duration-500 cursor-default">
                    {name}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
