import { Github, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Paridhi Shah
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 mb-8 animate-fade-in-delay-1">
            Software Developer
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about building scalable web applications with JavaScript, Node.js, and React.
            Experienced in full-stack development with a focus on creating intuitive user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
            <a
              href="https://github.com/paridhishah56"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:paridhishah56@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+916376646117"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>Call Me</span>
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block">
              <svg className="w-6 h-6 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
