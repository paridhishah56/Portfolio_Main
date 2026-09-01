import { Mail, Phone, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'paridhishah56@gmail.com',
      link: 'mailto:paridhishah56@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6376646117',
      link: 'tel:+916376646117'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'paridhishah56',
      link: 'https://github.com/paridhishah56'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Pune, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4"
                  >
                    <div className="text-blue-400">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="text-lg font-semibold hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="text-lg font-semibold">{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:paridhishah56@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-700 text-center text-gray-400">
        <p>&copy; 2025 Paridhi Shah. All rights reserved.</p>
      </footer>
    </section>
  );
}
