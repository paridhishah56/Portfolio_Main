import { ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Resume
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Paridhi Shah - Software Developer</h3>
                <p className="text-lg text-slate-600">JavaScript | Node.js | React | Full-Stack Developer</p>
              </div>
              <a
                href="https://paridhishah-portfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 self-start md:self-auto"
              >
                <ExternalLink size={18} />
                <span>View Live Portfolio</span>
              </a>
            </div>

            <div className="space-y-6">
              <div className="border-t-2 border-blue-200 pt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>Email: <span className="font-semibold">paridhishah56@gmail.com</span></li>
                  <li>Phone: <span className="font-semibold">+91 6376646117</span></li>
                  <li>GitHub: <span className="font-semibold">https://github.com/paridhishah56</span></li>
                  <li>Portfolio: <span className="font-semibold">https://paridhishah-portfolio.netlify.app</span></li>
                </ul>
              </div>

              <div className="border-t-2 border-blue-200 pt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Key Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-900">Frontend</p>
                    <p>HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Backend</p>
                    <p>Node.js, Express.js, RESTful APIs, Jest</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Database</p>
                    <p>MySQL, Database Design, Query Optimization</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Tools</p>
                    <p>Git, GitHub, Postman, Agile, Data Structures</p>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-blue-200 pt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Current Position</h4>
                <div className="text-slate-700">
                  <p className="font-semibold text-slate-900">Software Developer at TechPotato Software</p>
                  <p className="text-sm text-slate-600 mb-2">June 2025 - Present | Pune</p>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li>Building full-stack web applications in an Agile environment</li>
                    <li>Developing RESTful APIs with Node.js and Express.js</li>
                    <li>Designing and optimizing MySQL databases</li>
                    <li>Enhancing frontend UI with HTML, CSS, JavaScript</li>
                    <li>Conducting code reviews and testing with Jest</li>
                  </ul>
                </div>
              </div>

              <div className="border-t-2 border-blue-200 pt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Education</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="font-semibold text-slate-900">B.Tech in Computer Science Engineering</li>
                  <li className="text-sm">Techno India NJR Institute of Technology, Udaipur (2019-2023) - 8.0 CGPA</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://paridhishah-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={18} />
              <span>View Complete Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
