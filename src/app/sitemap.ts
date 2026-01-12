import { MetadataRoute } from 'next';
import { ambientes } from '@/data/ambientes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ricardosmoveisplanejados.com.br';

  const ambienteUrls = ambientes.map(amb => ({
    url: `${baseUrl}/ambientes/${amb.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...ambienteUrls,
  ];
}
