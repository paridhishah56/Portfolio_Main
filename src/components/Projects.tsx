import { ExternalLink, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hotel Management Portal',
      date: 'JAN 2025',
      description: 'A responsive hotel management system with dynamic features and real-time data fetching from RESTful APIs.',
      highlights: [
        'Responsive web design with HTML, CSS ensuring cross-browser compatibility',
        'Interactive features using JavaScript for enhanced UX',
        'RESTful API integration for dynamic content',
        'Dynamic DOM manipulation for clean data presentation'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST API'],
      link: null
    },
    {
      title: 'Trip For All',
      date: 'DEC 2024',
      description: 'A dynamic travel website for browsing adventures and making travel reservations.',
      highlights: [
        'Dynamic web pages with conditional rendering',
        'localStorage for persisting user preferences',
        'RESTful API for reservation form submission',
        'Deployed using Netlify and Heroku'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST API'],
      link: 'https://tripforall.netlify.app/'
    },
    {
      title: 'XBoard',
      date: 'OCT 2024',
      description: 'A dynamic news feed website featuring the latest news from Flipboard for select topics.',
      highlights: [
        'Built from scratch using HTML, CSS, Bootstrap, JavaScript',
        'Accordions and Image Carousel for improved UI',
        'Fetched news content from Flipboard RSS feed',
        'Deployed to Netlify'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
      link: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Featured Projects
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 mt-4 md:mt-0"
                  >
                    <span>View Live</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="text-slate-700 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
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
