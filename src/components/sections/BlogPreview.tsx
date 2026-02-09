import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { BlogCard } from '@/components/blog/BlogCard';
import { getRecentPosts } from '@/data/posts';
import { ArrowRight } from 'lucide-react';

export function BlogPreview() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Artigos Recentes
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={0.1 + index * 0.1} />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Ver Todos os Artigos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
