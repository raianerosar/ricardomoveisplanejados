"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { Post } from '@/types/post';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: Post;
  delay?: number;
}

export function BlogCard({ post, delay = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <FadeIn delay={delay}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
          {/* Cover Image */}
          <div className="relative w-full h-40 flex-shrink-0 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category Badge */}
            <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            {/* Title */}
            <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug line-clamp-2 group-hover:text-yellow-600 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1 text-yellow-600 font-medium group-hover:text-yellow-700">
                Ler mais
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
