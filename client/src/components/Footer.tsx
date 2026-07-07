// Juicy Playground — Vibrant footer with plum background
import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { ASSETS, SOCIAL_LINKS, whatsappLink } from "@/lib/data";

const FOOTER_LINKS = {
  explore: [
    { label: "Our Bikes", href: "/bikes" },
    { label: "Hire a Bike", href: "/hire" },
    { label: "Lease a Bike", href: "/lease" },
    { label: "Buy a Bike", href: "/buy" },
    { label: "Gallery", href: "/gallery" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#231436] text-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-spinwell-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-spinwell-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={ASSETS.logoIcon} alt="Spinwell" className="h-12 w-12" />
              <span className="font-display font-bold text-2xl text-white">spinwell</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Africa's pedal-powered event experience. Smoothie bikes, bubble bikes, and spin art bikes
              that turn any gathering into something unforgettable.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spinwell-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spinwell-red transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.38z" />
                </svg>
              </a>
              <a
                href={whatsappLink("Hi Spinwell!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-spinwell-yellow">Explore</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-spinwell-yellow">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-spinwell-yellow">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-spinwell-green shrink-0" />
                <a href="tel:+254119290903" className="text-white/70 hover:text-white transition-colors text-sm">
                  +254 119 290 903
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-spinwell-green shrink-0" />
                <a href="mailto:hello@spinwellafrica.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  hello@spinwellafrica.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-spinwell-green shrink-0" />
                <span className="text-white/70 text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Spinwell Africa. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Pedal-powered experiences across Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
