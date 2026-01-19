"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { QuestionnaireModal } from './QuestionnaireModal';
import { trackQuestionnaireStart } from '@/lib/analytics';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    trackQuestionnaireStart();
  };

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Vamos dar vida ao seu projeto?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Em menos de 2 minutos, você nos ajuda a entender o que você imagina
                para o seu móvel sob medida. Vamos lá?
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button
                size="lg"
                onClick={handleOpenModal}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Começar Experiência
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <QuestionnaireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
