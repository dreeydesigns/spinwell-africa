// Juicy Playground — Blog Page
import { useState } from "react";
import { Link } from "wouter";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionReveal from "@/components/SectionReveal";
import { FruitWheel, StickerBadge, OrgBlob } from "@/components/Decorations";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/data";

const CAT_COLORS: Record<string, string> = {
  All: "#231436",
  Events: "#EC2F5D",
  Wellness: "#3FA34D",
  Sustainability: "#2FA8E0",
  Business: "#F5871F",
};

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCat = category === "All" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-spinwell-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#231436] overflow-hidden">
        <FruitWheel size={160} type="orange" className="absolute -bottom-12 -right-12 opacity-15 hidden lg:block" />
        <div className="container relative z-10 text-center">
          <StickerBadge color="#EC2F5D" rotate={-3} className="mb-5">Blog</StickerBadge>
          <h1 className="font-display font-bold text-white mb-4 text-[clamp(2.5rem,5vw,4rem)]">
            Stories & Ideas
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tips, stories, and insights from the world of pedal-powered experiences.
          </p>
        </div>
      </section>

      {/* Filters — with colored pills */}
      <section className="py-6 bg-spinwell-cream sticky top-16 md:top-20 z-30 border-b border-[#231436]/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    category === cat
                      ? "text-white shadow-lg"
                      : "bg-white text-[#231436]/70 hover:bg-[#231436]/5"
                  }`}
                  style={category === cat ? { backgroundColor: CAT_COLORS[cat] || "#231436", boxShadow: `0 4px 15px ${CAT_COLORS[cat] || "#231436"}30` } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#231436]/40" />
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white text-sm text-[#231436] border border-[#231436]/10 focus:outline-none focus:ring-2 focus:ring-spinwell-red/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid — with colored borders */}
      <section className="py-16 md:py-24 bg-spinwell-cream relative overflow-hidden">
        <OrgBlob color="#EC2F5D" opacity={0.03} className="w-[500px] h-[500px] -top-40 -right-40" />
        <OrgBlob color="#3FA34D" opacity={0.03} className="w-[400px] h-[400px] -bottom-32 -left-32" />

        <div className="container relative z-10">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-[#231436]/50 text-lg font-display">No posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => {
                const catColor = CAT_COLORS[post.category] || "#EC2F5D";
                return (
                  <SectionReveal key={post.id} delay={i * 80}>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer h-full flex flex-col border-2" style={{ backgroundColor: `${catColor}06`, borderColor: `${catColor}20` }}>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <StickerBadge color={catColor} rotate={-3}>{post.category}</StickerBadge>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-[#231436]/40 text-xs mb-3">
                            <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                            <span>&middot;</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="font-display font-semibold text-lg text-[#231436] mb-2 group-hover:text-spinwell-red transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[#231436]/60 text-sm line-clamp-3 flex-1">{post.excerpt}</p>
                          <div className="mt-4 flex items-center gap-1 font-semibold text-sm" style={{ color: catColor }}>
                            Read More <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
