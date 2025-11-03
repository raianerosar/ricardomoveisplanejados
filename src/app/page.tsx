import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Location } from '@/components/sections/Location';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="projetos">
          <Gallery />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="contato">
          <Contact />
        </section>
        <section id="onde-trabalhamos">
          <Location />
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
