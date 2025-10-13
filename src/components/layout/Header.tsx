"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-ricardo.png"
              alt="Ricardo Móveis Logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <span className="text-xl font-bold text-slate-800">Ricardo Móveis</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Depoimentos
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Contato
            </Button>
          </nav>

          {/* Botão Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-slate-600 hover:text-slate-900 font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-slate-600 hover:text-slate-900 font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-slate-600 hover:text-slate-900 font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="text-slate-600 hover:text-slate-900 font-medium text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-slate-600 hover:text-slate-900 font-medium text-left"
              >
                Depoimentos
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black w-full"
              >
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}