import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogList } from "@/components/blog/BlogList";
import { FeaturedPostHero } from "@/components/blog/FeaturedPostHero";
import { Newsletter } from "@/components/blog/Newsletter";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-0">
        
        <FeaturedPostHero />

        <section className="container mx-auto px-6 mb-32">
            <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                 <div>
                    <h2 className="text-3xl font-bold font-heading">Latest Insights</h2>
                    <p className="text-muted-foreground mt-2">Exploring the frontiers of design and technology.</p>
                 </div>
            </div>
            <BlogList />
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
