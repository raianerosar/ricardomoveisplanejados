"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Onde Trabalhamos
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Atendemos toda a Grande Florianópolis com excelência e qualidade
            </p>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mapa Google Maps */}
          <FadeIn delay={0.2}>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.0547989!2d-48.6509845!3d-27.6326735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735e8c8f9999d%3A0x1234567890abcdef!2sR.%20Artur%20Os%C3%B3rio%20de%20Ara%C3%BAjo%2C%20121%20-%20Pte.%20do%20Imaruim%2C%20Palho%C3%A7a%20-%20SC%2C%2088131-500!5e0!3m2!1spt-BR!2sbr!4v1730635800000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ricardo Móveis"
              />
            </div>
          </FadeIn>

          {/* Informações de Localização */}
          <FadeIn delay={0.3}>
            <div className="space-y-8">
              {/* Áreas de Atendimento */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Navigation className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Áreas de Atendimento
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Florianópolis",
                    "São José",
                    "Palhoça",
                    "Biguaçu",
                    "Aririu",
                    "Grande Floripa"
                  ].map((cidade) => (
                    <div
                      key={cidade}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>{cidade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Horário de Atendimento
                  </h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p className="text-sm text-slate-500">Domingo: Fechado</p>
                </div>
              </div>

              {/* Telefone/WhatsApp */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Contato
                  </h3>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/5548984242423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-yellow-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(48) 98424-2423</span>
                  </a>
                  <p className="text-sm text-slate-500">
                    Clique para conversar pelo WhatsApp
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Nosso Endereço
                  </h3>
                </div>
                <div className="text-slate-600 space-y-1">
                  <p className="font-medium">R. Artur Osório de Araújo, 121</p>
                  <p>Portão Marrom - Pte. do Imaruim</p>
                  <p>Palhoça - SC, 88131-500</p>
                  <p className="text-sm mt-2">Confira a localização exata no mapa ao lado</p>
                </div>
              </div>

              {/* Botão para abrir no Google Maps */}
              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Artur+Osório+de+Araújo,+121+-+Portão+Marrom+-+Pte.+do+Imaruim,+Palhoça+-+SC,+88131-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
