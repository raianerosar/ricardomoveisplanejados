'use client';

import Image from 'next/image';

interface SobreAmbienteProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function SobreAmbiente({ title, description, image, highlights }: SobreAmbienteProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <ul className="space-y-3 pt-4">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
