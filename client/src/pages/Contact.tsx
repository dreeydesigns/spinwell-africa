// Juicy Playground — Contact Page
import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionReveal from "@/components/SectionReveal";
import { SOCIAL_LINKS, whatsappLink } from "@/lib/data";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "general", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Spinwell! My name is ${form.name}.\n\nInquiry Type: ${form.type}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    toast.success("Redirecting you to WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#231436]">
        <div className="container text-center">
          <span className="inline-block bg-spinwell-green/20 text-spinwell-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Contact</span>
          <h1 className="font-display font-bold text-white mb-4 text-[clamp(2.5rem,5vw,4rem)]">Let's Talk</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Have a question, want a quote, or just want to say hi? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-spinwell-cream">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <SectionReveal className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="font-display font-bold text-xl text-[#231436] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#231436]/70 mb-1.5">Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-spinwell-cream text-[#231436] text-sm border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#231436]/70 mb-1.5">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-spinwell-cream text-[#231436] text-sm border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#231436]/70 mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-spinwell-cream text-[#231436] text-sm border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30" placeholder="+254..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#231436]/70 mb-1.5">Inquiry Type</label>
                      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-spinwell-cream text-[#231436] text-sm border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30">
                        <option value="general">General Inquiry</option>
                        <option value="hire">Hire for an Event</option>
                        <option value="lease">Lease for Business</option>
                        <option value="buy">Buy Bikes</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#231436]/70 mb-1.5">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-spinwell-cream text-[#231436] text-sm border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30 resize-none" placeholder="Tell us about your event or question..." />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 bg-spinwell-red text-white px-8 py-3.5 rounded-full font-semibold hover:bg-spinwell-red/90 transition-all hover:scale-105 active:scale-95">
                    Send via WhatsApp <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </SectionReveal>

            <SectionReveal className="lg:col-span-2" delay={150}>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-[#231436] mb-5">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="tel:+254119290903" className="flex items-center gap-3 text-[#231436]/70 hover:text-spinwell-red transition-colors text-sm">
                      <div className="w-10 h-10 rounded-full bg-spinwell-red/10 flex items-center justify-center"><Phone className="w-4 h-4 text-spinwell-red" /></div>
                      +254 119 290 903
                    </a>
                    <a href="mailto:hello@spinwellafrica.com" className="flex items-center gap-3 text-[#231436]/70 hover:text-spinwell-red transition-colors text-sm">
                      <div className="w-10 h-10 rounded-full bg-spinwell-orange/10 flex items-center justify-center"><Mail className="w-4 h-4 text-spinwell-orange" /></div>
                      hello@spinwellafrica.com
                    </a>
                    <div className="flex items-center gap-3 text-[#231436]/70 text-sm">
                      <div className="w-10 h-10 rounded-full bg-spinwell-green/10 flex items-center justify-center"><MapPin className="w-4 h-4 text-spinwell-green" /></div>
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-[#231436] mb-5">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-spinwell-cream flex items-center justify-center text-[#231436]/60 hover:bg-spinwell-red hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-spinwell-cream flex items-center justify-center text-[#231436]/60 hover:bg-[#231436] hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.83 4.83 0 01-1-.1z" /></svg>
                    </a>
                  </div>
                </div>
                <a href={whatsappLink("Hi Spinwell! I'd like to chat.")} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-5 rounded-3xl font-semibold hover:bg-[#20bd5a] transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.794-6.233-2.13l-.435-.344-2.655.888.89-2.652-.357-.448A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                  Chat Directly on WhatsApp
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
