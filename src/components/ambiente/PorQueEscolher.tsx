'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

interface PorQueEscolherProps {
  title: string;
  items: WhyChooseItem[];
}

export default function PorQueEscolher({ title, items }: PorQueEscolherProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-shadow duration-300 border-none"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900">
                    {getIcon(item.icon)}
                  </div>
                </div>
                <CardTitle asChild className="text-xl font-bold text-gray-900">
                  <h3>{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
