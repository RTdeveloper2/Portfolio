import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
           <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-sm"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">{exp.role}</h3>
                  <div className="text-lg font-semibold text-teal-600 mb-1">{exp.company}</div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-500 md:text-right">
                  <div className="flex items-center md:justify-end gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center md:justify-end gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <ul className="space-y-3">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;