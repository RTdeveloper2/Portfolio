import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.institution}</h3>
                <p className="text-slate-600 font-medium mb-2">{edu.degree}</p>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;