import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Techno India NJR Institute of Technology, Udaipur',
      period: '2019 - 2023',
      grade: '8.0 CGPA'
    },
    {
      degree: '12th (General)',
      institution: 'Govt Senior Secondary School, Partapur',
      period: '2018 - 2019',
      grade: '70%'
    },
    {
      degree: '10th (General)',
      institution: 'Pioneer Senior Secondary School, Partapur',
      period: '2017 - 2018',
      grade: '76%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-700 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="font-semibold text-blue-600">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
