import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import HeroAmbiente from '@/components/ambiente/HeroAmbiente';
import SobreAmbiente from '@/components/ambiente/SobreAmbiente';
import PorQueEscolher from '@/components/ambiente/PorQueEscolher';
import GaleriaAmbiente from '@/components/ambiente/GaleriaAmbiente';
import FAQAmbiente from '@/components/ambiente/FAQAmbiente';
import SocialGrid from '@/components/ambiente/SocialGrid';
import CTAAmbiente from '@/components/ambiente/CTAAmbiente';
import { getAmbienteBySlug, getAllAmbienteSlugs } from '@/data/ambientes';

interface AmbientePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all ambientes
export async function generateStaticParams() {
  const slugs = getAllAmbienteSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: AmbientePageProps): Promise<Metadata> {
  const { slug } = await params;
  const ambiente = getAmbienteBySlug(slug);

  if (!ambiente) {
    return {
      title: 'Ambiente não encontrado | Ricardo Móveis',
      description: 'O ambiente solicitado não foi encontrado.',
    };
  }

  return {
    title: ambiente.metadata.title,
    description: ambiente.metadata.description,
    keywords: ambiente.metadata.keywords.join(', '),
    openGraph: {
      title: ambiente.metadata.title,
      description: ambiente.metadata.description,
      type: 'website',
      images: [
        {
          url: ambiente.hero.backgroundImage,
          width: 1200,
          height: 630,
          alt: ambiente.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ambiente.metadata.title,
      description: ambiente.metadata.description,
      images: [ambiente.hero.backgroundImage],
    },
  };
}

export default async function AmbientePage({ params }: AmbientePageProps) {
  const { slug } = await params;
  const ambiente = getAmbienteBySlug(slug);

  if (!ambiente) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/#galeria">Ambientes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{ambiente.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Badge variant="secondary" className="text-sm">
              {ambiente.category}
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroAmbiente
        title={ambiente.hero.title}
        subtitle={ambiente.hero.subtitle}
        backgroundImage={ambiente.hero.backgroundImage}
      />

      {/* About Section */}
      <SobreAmbiente
        title={ambiente.about.title}
        description={ambiente.about.description}
        image={ambiente.about.image}
        highlights={ambiente.about.highlights}
      />

      <Separator className="my-0" />

      {/* Why Choose Section */}
      <PorQueEscolher
        title={ambiente.whyChoose.title}
        items={ambiente.whyChoose.items}
      />

      <Separator className="my-0" />

      {/* Gallery Section */}
      <GaleriaAmbiente
        projectName={ambiente.gallery.projectName}
        images={ambiente.gallery.images}
      />

      <Separator className="my-0" />

      {/* Social Grid Section */}
      <SocialGrid
        title={ambiente.social.title}
        posts={ambiente.social.posts}
      />

      <Separator className="my-0" />

      {/* FAQ Section */}
      <FAQAmbiente
        title={ambiente.faq.title}
        questions={ambiente.faq.questions}
      />

      <Separator className="my-0" />

      {/* CTA Section */}
      <CTAAmbiente
        title={ambiente.cta.title}
        description={ambiente.cta.description}
        buttonText={ambiente.cta.buttonText}
      />
    </main>
  );
}
