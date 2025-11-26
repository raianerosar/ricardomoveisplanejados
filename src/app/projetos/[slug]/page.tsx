"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const gallery = project.gallery || [project.image];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/#projetos" className="hover:text-yellow-600 transition-colors">
                Projetos
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">{project.title}</span>
            </nav>
          </div>
        </div>

        {/* Project Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-3">
              {project.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {project.description}
            </p>
            {(project.dimensions || project.completionDate) && (
              <div className="flex gap-6 mt-6 text-sm">
                {project.dimensions && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">Área:</span>
                    <span className="text-slate-600">{project.dimensions}</span>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">Conclusão:</span>
                    <span className="text-slate-600">{project.completionDate}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Galeria de Fotos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 hover:opacity-90 transition-opacity cursor-pointer group"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Foto ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Clique para ampliar
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Features */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Características do Projeto
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-700 mb-6">
              Gostou deste projeto? Entre em contato para criar o seu!
            </p>
            <Link
              href="/#contato"
              className="inline-block px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Back to Projects */}
          <div className="mt-8 text-center">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Voltar para Projetos
            </Link>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[currentImageIndex]}
                alt={`${project.title} - Foto ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {gallery.length}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
