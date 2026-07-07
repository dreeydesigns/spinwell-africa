// Juicy Playground — Terms & Conditions Page
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Terms() {
  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#231436]">
        <div className="container text-center">
          <h1 className="font-display font-bold text-white mb-4 text-[clamp(2rem,4vw,3rem)]">Terms & Conditions</h1>
          <p className="text-white/60 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-spinwell-cream">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm prose prose-sm max-w-none prose-headings:font-display prose-headings:text-[#231436] prose-p:text-[#231436]/70 prose-li:text-[#231436]/70">
            <h2>1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the Spinwell Africa website and services. By accessing our website or engaging our services, you agree to be bound by these terms.</p>

            <h2>2. Services</h2>
            <p>Spinwell Africa provides pedal-powered smoothie bikes, bubble bikes, and spin art bikes for hire, lease, and purchase. Our services include delivery, setup, management, and collection of equipment for events across Kenya and East Africa.</p>

            <h2>3. Hiring Terms</h2>
            <p>All hire bookings are subject to availability. A deposit may be required to secure your booking. Cancellations made less than 48 hours before the event may incur a cancellation fee. The hirer is responsible for providing a safe, flat surface for bike operation.</p>

            <h2>4. Leasing Terms</h2>
            <p>Lease agreements are subject to individual negotiation and a separate lease contract. Monthly payments are due in advance. The lessee is responsible for the reasonable care and security of the equipment during the lease period.</p>

            <h2>5. Purchase Terms</h2>
            <p>All purchases are subject to stock availability. Delivery timelines vary by location and will be communicated at the time of order. Prices are quoted in USD or KES and are subject to change without notice.</p>

            <h2>6. Liability</h2>
            <p>Spinwell Africa takes reasonable precautions to ensure the safety of our equipment. However, users ride at their own risk. Spinwell Africa shall not be liable for any injury, loss, or damage arising from the use of our bikes, except where caused by our negligence.</p>

            <h2>7. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and designs, is the property of Spinwell Africa and is protected by intellectual property laws. Unauthorised reproduction is prohibited.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.</p>

            <h2>9. Contact</h2>
            <p>For questions about these terms, please contact us via WhatsApp at +254 119 290 903 or email hello@spinwellafrica.com.</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
