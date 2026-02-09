import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { getRecentPosts, getFeaturedPosts, getAllCategories } from '@/data/posts';
import { ChevronRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Ricardo Móveis - Dicas de Decoração e Móveis Planejados',
  description: 'Confira dicas de decoração, tendências e inspirações para móveis planejados. Transforme sua casa com as melhores ideias.',
  keywords: ['blog móveis planejados', 'dicas decoração', 'tendências móveis', 'inspiração ambientes'],
  openGraph: {
    title: 'Blog | Ricardo Móveis',
    description: 'Dicas de decoração, tendências e inspirações para móveis planejados.',
    type: 'website',
  },
};

export default function BlogPage() {
  const recentPosts = getRecentPosts(6);
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-slate-800 py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Início
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Blog</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog Ricardo Móveis
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Dicas, tendências e inspirações para transformar sua casa com móveis planejados de qualidade.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-medium text-slate-600 mr-2">Categorias:</span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="bg-white border border-slate-200 text-slate-700 text-sm px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                Destaques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Artigos Recentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para transformar seu ambiente?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e solicite um orçamento personalizado para seus móveis planejados.
              </p>
              <a
                href="https://wa.me/5548984242423?text=Olá!%20Vim%20pelo%20blog%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
