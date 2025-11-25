import React from 'react';
import { RESUME_DATA } from '../constants';
import { Code, Database, Server, Layout, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Frontend')) return <Layout className="w-6 h-6 text-teal-500" />;
    if (category.includes('Backend')) return <Server className="w-6 h-6 text-teal-500" />;
    if (category.includes('Database')) return <Database className="w-6 h-6 text-teal-500" />;
    return <Code className="w-6 h-6 text-teal-500" />;
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            My technical skillset spans across the entire MEAN stack, ensuring robust end-to-end development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESUME_DATA.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-50 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;