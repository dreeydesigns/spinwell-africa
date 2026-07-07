// Juicy Playground — Blog Post Detail Page
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionReveal from "@/components/SectionReveal";
import { BLOG_POSTS, whatsappLink } from "@/lib/data";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-spinwell-cream">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="font-display font-bold text-3xl text-[#231436] mb-4">Post Not Found</h1>
          <p className="text-[#231436]/60 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-spinwell-red font-semibold hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#231436] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#231436]/60 to-[#231436]" />
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block bg-spinwell-red text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display font-bold text-white mb-4 text-[clamp(2rem,4vw,3rem)] leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              <button onClick={handleShare} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-spinwell-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#231436] prose-p:text-[#231436]/70 prose-a:text-spinwell-red prose-strong:text-[#231436]">
                <Streamdown>{post.content}</Streamdown>
              </article>
            </SectionReveal>

            {/* CTA */}
            <SectionReveal className="mt-12 bg-white rounded-3xl p-8 text-center">
              <h3 className="font-display font-bold text-xl text-[#231436] mb-3">Want to experience this yourself?</h3>
              <p className="text-[#231436]/60 text-sm mb-6">Get in touch and let's bring Spinwell to your next event.</p>
              <a
                href={whatsappLink("Hi Spinwell! I just read your blog and I'm interested in your bikes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-spinwell-red text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-spinwell-red/90 transition-all hover:scale-105 active:scale-95"
              >
                Chat on WhatsApp
              </a>
            </SectionReveal>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-display font-bold text-xl text-[#231436] mb-6">More to Read</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {related.map((rp) => (
                    <Link key={rp.id} href={`/blog/${rp.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
                        <div className="h-40 overflow-hidden">
                          <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5">
                          <h4 className="font-display font-semibold text-[#231436] group-hover:text-spinwell-red transition-colors line-clamp-2">{rp.title}</h4>
                          <p className="text-[#231436]/50 text-xs mt-2">{rp.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
