
import { AnimatedDiv } from "@/components/ui/AnimatedDiv";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBioExpanded } from "@/components/blog/AuthorBioExpanded";
// import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | SoftBiz Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 1. Mark component as async
// 2. Update type to Promise
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // 3. Await the params
  const { slug } = await params; 
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <Header />
      
      <main className="flex-grow pt-32">
        {/* Hero */}
        <AnimatedDiv className="container mx-auto px-6 mb-16">
            <div className="max-w-4xl mx-auto text-center">
                 <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                    <span className="text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">{post.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                </div>
            </div>
        </AnimatedDiv>

        {/* Featured Image */}
        <div className="container mx-auto px-6 mb-24">
             <div className="aspect-[21/9] rounded-[2rem] overflow-hidden relative">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
             </div>
        </div>

        <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Sidebar (Table of Contents) */}
                <aside className="hidden lg:block lg:col-span-3 text-red-500"> 
                    <TableOfContents />
                </aside>

                {/* Main Content */}
                <article className="col-span-1 lg:col-span-8 lg:col-start-4 prose prose-invert prose-lg max-w-none">
                     <p className="lead text-xl md:text-2xl leading-relaxed text-white font-medium mb-12">
                        {post.excerpt}
                    </p>

                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="my-12 p-8 bg-secondary/10 border-l-4 border-primary rounded-r-xl">
                        <p className="m-0 italic text-lg text-white">
                            "The future is not just about technology; it's about how we use it to solve human problems."
                        </p>
                    </div>

                    <AuthorBioExpanded />
                </article>

            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}