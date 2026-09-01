import { Code2, Database, Globe, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Jest']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database',
      skills: ['MySQL', 'Database Design', 'Query Optimization']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Postman', 'Agile', 'Data Structures']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
