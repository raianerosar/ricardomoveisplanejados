import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ricardo Móveis
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-slate-200">
          Móveis Planejados que Transformam Ambientes
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-100">
          Especialistas em móveis planejados para cozinha, quarto e banheiro. 
          Transforme sua casa com soluções personalizadas e de alta qualidade.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <a
            href="https://wa.me/5548984242423?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20móveis%20planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-8 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Solicite seu Orçamento
          </a>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-800"
          >
            Ver Nossos Projetos
          </Button>
        </div>
      </div>
    </section>
  );
}