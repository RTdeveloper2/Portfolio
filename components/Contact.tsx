import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href={`mailto:${RESUME_DATA.email}`} className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border border-white/5 hover:border-teal-500/50">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Email Me</h3>
                <p className="text-sm text-slate-300 truncate">{RESUME_DATA.email}</p>
              </a>

              <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border border-white/5 hover:border-teal-500/50">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Connect</h3>
                <div className="flex items-center justify-center gap-1 text-sm text-slate-300">
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-slate-300">{RESUME_DATA.location}</p>
              </div>
            </div>

            <a 
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-block px-10 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;