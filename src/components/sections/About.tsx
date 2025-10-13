export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Sobre a Ricardo Móveis
          </h2>
          <div className="text-lg text-slate-600 space-y-6">
            <p>
              Com anos de experiência no mercado de móveis planejados, a Ricardo Móveis 
              se destaca pela qualidade, inovação e atendimento personalizado.
            </p>
            <p>
              Nossa equipe de profissionais especializados trabalha para transformar 
              seus ambientes em espaços funcionais e elegantes, sempre respeitando 
              seu estilo e necessidades.
            </p>
            <p>
              Utilizamos materiais de alta qualidade e tecnologia de ponta para 
              garantir durabilidade e acabamento impecável em todos os nossos projetos.
            </p>
          </div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">5+</div>
              <p className="text-sm md:text-base text-slate-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">100+</div>
              <p className="text-sm md:text-base text-slate-600">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">100%</div>
              <p className="text-sm md:text-base text-slate-600">Satisfação do Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}