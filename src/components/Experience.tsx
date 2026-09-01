import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Software Developer</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">TechPotato Software</p>
                <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Pune</span>
                  </div>
                  <span>•</span>
                  <span>June 2025 - Present</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Collaborating in an Agile environment to build and deploy full-stack web applications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Developing RESTful APIs with Node.js and Express.js for scalable backend services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Designing and optimizing MySQL database schemas to ensure efficient data management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Enhancing frontend UI with HTML, CSS, JavaScript, and integrating APIs for seamless user experience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Conducting code reviews, testing with Jest, and debugging to improve system reliability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="text-slate-700">
                  Actively contributing to all phases of the development lifecycle, from requirement gathering to deployment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
