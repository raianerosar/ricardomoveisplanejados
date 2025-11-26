'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
                <div className="text-5xl mb-4">{item.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
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
