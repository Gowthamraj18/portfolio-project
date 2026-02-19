import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
}

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      major: 'Artificial Intelligence & Data Science',
      institution: 'Rajalakshmi Engineering College',
      location: 'Chennai, Tamil Nadu, India',
      duration: '2023 - 2027',
      cgpa: '7.53',
      highlights: [
        'Specialized in Machine Learning, Deep Learning, and Data Analytics',
        'Coursework: AI, ML, NLP, Computer Vision, Big Data, Cloud Computing',
        'Active member of Institution\'s Innovation Council',
        'Participated in multiple hackathons and technical events',
        'Strong foundation in Data Structures, Algorithms, and System Design',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 p-8 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-blue-600 dark:text-cyan-500 font-semibold mb-4">{edu.major}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <GraduationCap className="w-4 h-4 text-blue-600 dark:text-cyan-500" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-500" />
                        <span>{edu.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-cyan-500" />
                        <span>{edu.duration}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Award className="w-4 h-4 text-blue-600 dark:text-cyan-500" />
                        <span className="font-semibold">CGPA: {edu.cgpa} / 10.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Academic Highlights</h4>
                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-cyan-500 mr-3 mt-1 text-lg">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
