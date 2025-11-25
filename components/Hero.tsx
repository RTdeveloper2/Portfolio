import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#14b8a6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.4,56.8C23.7,64.1,12.1,71.1,-0.6,72.1C-13.3,73.1,-25.6,68.1,-35.8,60.2C-46,52.3,-54.1,41.5,-62.3,29.9C-70.5,18.3,-78.8,5.9,-77.8,-6.2C-76.8,-18.3,-66.5,-30.1,-56.3,-40.7C-46.1,-51.3,-36,-60.7,-24.2,-69.8C-12.4,-78.9,1.1,-87.7,14.7,-88.3C28.3,-89,42,-81.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-teal-300 uppercase bg-teal-900/40 rounded-full border border-teal-700">
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">{RESUME_DATA.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            {RESUME_DATA.role}
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {RESUME_DATA.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2 group"
            >
              Contact Me 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={RESUME_DATA.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 border border-slate-600 hover:border-teal-500 hover:text-teal-400 text-slate-300 font-medium rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <span className="text-sm uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;