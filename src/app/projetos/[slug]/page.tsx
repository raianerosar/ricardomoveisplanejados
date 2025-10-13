import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado - Ricardo Móveis",
    };
  }

  return {
    title: `${project.title} - Ricardo Móveis | Móveis Planejados`,
    description: project.description,
    keywords: project.tags.join(", "),
    openGraph: {
      title: `${project.title} - Ricardo Móveis`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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

        {/* Project Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Image */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Information */}
              <div className="space-y-6">
                {/* Title and Category */}
                <div>
                  <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-3">
                    {project.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Info */}
                {(project.dimensions || project.completionDate) && (
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200">
                    {project.dimensions && (
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Dimensões</div>
                        <div className="font-semibold text-slate-900">{project.dimensions}</div>
                      </div>
                    )}
                    {project.completionDate && (
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Conclusão</div>
                        <div className="font-semibold text-slate-900">{project.completionDate}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Features */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Características do Projeto
                  </h2>
                  <ul className="space-y-3">
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

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Palavras-chave</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    href="/#contato"
                    className="inline-block w-full sm:w-auto px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-center"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </div>
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
      </main>
      <Footer />
    </>
  );
}
