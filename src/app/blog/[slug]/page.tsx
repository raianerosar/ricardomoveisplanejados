import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/data/posts';
import { ChevronRight, Home, Calendar, Clock, User, MessageCircle, Phone, List } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado | Ricardo Móveis',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-slate-800 py-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Início
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-yellow-500">{post.category}</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block bg-yellow-500 text-black text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-slate-300 mb-6">
                {post.excerpt}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min de leitura
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content with Sidebars */}
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_280px] lg:grid-cols-[240px_1fr] gap-8">

              {/* Left Sidebar - Table of Contents */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">
                      <List className="w-4 h-4 text-yellow-500" />
                      Neste Artigo
                    </h3>
                    <nav className="space-y-2">
                      {extractHeadings(post.content).map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className="block text-sm text-slate-600 hover:text-yellow-600 hover:pl-2 transition-all py-1 border-l-2 border-transparent hover:border-yellow-500 pl-3"
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="mt-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">Escrito por</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {post.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{post.author.name}</p>
                        <p className="text-sm text-slate-500">Especialista em Móveis Planejados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="min-w-0">
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: formatContentWithIds(post.content) }}
                />

                {/* Tags - Mobile/Tablet */}
                <div className="mt-12 pt-8 border-t border-slate-200 xl:hidden">
                  <h3 className="text-sm font-semibold text-slate-600 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-sm px-3 py-1.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - CTA & Tags */}
              <aside className="hidden xl:block">
                <div className="sticky top-24">
                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-lg">
                    <h3 className="text-lg font-bold mb-2">Precisa de ajuda?</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Solicite um orçamento gratuito para seu projeto de móveis planejados.
                    </p>
                    <a
                      href="https://wa.me/5548984242423?text=Olá!%20Vim%20pelo%20blog%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Falar no WhatsApp
                    </a>
                    <a
                      href="tel:+5548984242423"
                      className="flex items-center justify-center gap-2 w-full mt-2 bg-transparent border border-slate-600 hover:border-white text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      (48) 98424-2423
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 hover:bg-yellow-100 text-slate-600 hover:text-yellow-700 text-sm px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">
                      Compartilhar
                    </h3>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        WhatsApp
                      </button>
                      <button className="flex-1 bg-[#1877F2] hover:bg-[#1466d9] text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                Artigos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Gostou das dicas?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Entre em contato e transforme seu ambiente com móveis planejados de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5548984242423?text=Olá!%20Vim%20pelo%20blog%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors"
                >
                  Solicitar Orçamento
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 rounded-lg transition-colors"
                >
                  Ver Mais Artigos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function extractHeadings(content: string): { text: string; id: string }[] {
  const headings: { text: string; id: string }[] = [];
  content.split('\n').forEach(line => {
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      headings.push({ text, id: generateSlug(text) });
    }
  });
  return headings;
}

function formatContentWithIds(content: string): string {
  return content
    .split('\n')
    .map(line => {
      // Headers with IDs
      if (line.startsWith('### ')) {
        const text = line.slice(4);
        return `<h3>${text}</h3>`;
      }
      if (line.startsWith('## ')) {
        const text = line.slice(3);
        const id = generateSlug(text);
        return `<h2 id="${id}">${text}</h2>`;
      }
      // List items
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*:? ?(.*)/);
        if (match) {
          return `<li><strong>${match[1]}</strong>${match[2] ? ': ' + match[2] : ''}</li>`;
        }
      }
      if (line.startsWith('- ')) {
        return `<li>${line.slice(2)}</li>`;
      }
      // Bold text
      line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Paragraphs
      if (line.trim() && !line.startsWith('<')) {
        return `<p>${line}</p>`;
      }
      return line;
    })
    .join('\n');
}
