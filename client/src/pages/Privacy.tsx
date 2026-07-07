// Juicy Playground — Privacy Policy Page
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#231436]">
        <div className="container text-center">
          <h1 className="font-display font-bold text-white mb-4 text-[clamp(2rem,4vw,3rem)]">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-spinwell-cream">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm prose prose-sm max-w-none prose-headings:font-display prose-headings:text-[#231436] prose-p:text-[#231436]/70 prose-li:text-[#231436]/70">
            <h2>1. Information We Collect</h2>
            <p>When you contact us via WhatsApp, email, or our contact form, we may collect your name, email address, phone number, and event details. We do not collect personal information automatically through our website beyond standard analytics data.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiries, process bookings, deliver our services, and communicate with you about your events. We may also use anonymised data to improve our services.</p>

            <h2>3. Data Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties, except where necessary to deliver our services (e.g., logistics partners for delivery) or where required by law.</p>

            <h2>4. Data Security</h2>
            <p>We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>5. Cookies</h2>
            <p>Our website may use cookies and similar technologies for analytics purposes. You can control cookie settings through your browser preferences.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us via WhatsApp at +254 119 290 903 or email hello@spinwellafrica.com.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2>8. Contact</h2>
            <p>For questions about this privacy policy, please contact us via WhatsApp at +254 119 290 903 or email hello@spinwellafrica.com.</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
