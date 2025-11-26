'use client';

import Link from 'next/link';

interface CTAAmbienteProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function CTAAmbiente({ title, description, buttonText }: CTAAmbienteProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Quote Icon */}
          <div className="flex justify-center">
            <svg
              className="w-16 h-16 text-amber-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 italic font-light">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {buttonText}
            </Link>
          </div>

          {/* Author attribution */}
          <p className="text-sm text-gray-500 italic pt-4">
            - Frases Ricardo
          </p>
        </div>
      </div>
    </section>
  );
}
