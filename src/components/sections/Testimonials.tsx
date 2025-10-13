export function Testimonials() {
  const testimonials = [
    {
      text: "Excelente trabalho! A cozinha ficou linda e muito funcional. Superou nossas expectativas.",
      initials: "M.S.",
      location: "Florianópolis, SC"
    },
    {
      text: "Profissionais muito competentes. O guarda-roupa planejado otimizou completamente nosso quarto.",
      initials: "J.O.",
      location: "São José, SC"
    },
    {
      text: "Qualidade impecável e prazo cumprido. Recomendo a Ricardo Móveis para todos!",
      initials: "A.R.",
      location: "Palhoça, SC"
    },
    {
      text: "O closet ficou perfeito! Atendimento personalizado e acabamento de primeira qualidade.",
      initials: "C.L.",
      location: "Biguaçu, SC"
    },
    {
      text: "Móveis corporativos de excelente qualidade. Transformaram completamente nosso escritório.",
      initials: "R.M.",
      location: "Santo Amaro da Imperatriz, SC"
    },
    {
      text: "Muito satisfeita com o resultado. O banheiro ficou elegante e funcional.",
      initials: "L.T.",
      location: "Águas Mornas, SC"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg className="w-8 h-8 text-yellow-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-slate-600 italic mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}