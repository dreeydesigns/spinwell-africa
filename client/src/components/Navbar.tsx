// Juicy Playground — Playful, colourful navbar
// Transparent on hero, solid cream on scroll. Mobile hamburger menu.

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { ASSETS, whatsappLink } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Bikes", href: "/bikes" },
  { label: "Hire", href: "/hire" },
  { label: "Lease", href: "/lease" },
  { label: "Buy", href: "/buy" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          showSolid
            ? "bg-white/95 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={ASSETS.logoIcon}
              alt="Spinwell"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span
              className={`font-display font-bold text-xl md:text-2xl transition-colors duration-300 ${
                showSolid ? "text-[#231436]" : "text-white"
              }`}
            >
              spinwell
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  location === link.href
                    ? showSolid
                      ? "bg-spinwell-red text-white"
                      : "bg-white/20 text-white backdrop-blur-sm"
                    : showSolid
                    ? "text-[#231436] hover:bg-spinwell-red/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink("Hi Spinwell! I'd like to book bikes for my event.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#20bd5a] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/25"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                showSolid ? "text-[#231436]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div
            className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl"
            style={{ animation: "scaleIn 0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <img src={ASSETS.logoIcon} alt="Spinwell" className="h-10 w-10" />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-[#231436]">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-5 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${
                    location === link.href
                      ? "bg-spinwell-red text-white"
                      : "text-[#231436] hover:bg-spinwell-cream"
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-5 border-t border-gray-100">
              <a
                href={whatsappLink("Hi Spinwell! I'd like to book bikes for my event.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-base w-full hover:bg-[#20bd5a] transition-all"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
