import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Brain, TrendingUp, Music } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  icon: typeof Brain;
  gradient: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      title: 'AI-Powered Career Guidance System',
      description:
        'An intelligent platform that provides personalized career recommendations using advanced NLP models and machine learning algorithms.',
      features: [
        'Multi-lingual support with XLM-R and IndicBERT models',
        'Personalized career path suggestions based on skills and interests',
        'Real-time job market analysis and trends',
        'Interactive chatbot for career counseling',
      ],
      techStack: ['Python', 'NLP', 'XLM-R', 'IndicBERT', 'FastAPI', 'React', 'MongoDB'],
      icon: Brain,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'AI Demand Forecasting System',
      description:
        'A predictive analytics platform that forecasts product demand using time series analysis and ensemble machine learning methods.',
      features: [
        'Time series forecasting with ARIMA and Prophet',
        'Ensemble methods using XGBoost and Random Forest',
        'Interactive dashboards for demand visualization',
        'Automated anomaly detection and alerts',
      ],
      techStack: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'Scikit-learn', 'Plotly', 'FastAPI'],
      icon: TrendingUp,
      gradient: 'from-green-600 to-teal-500',
    },
    {
      title: 'Music Genre Classification',
      description:
        'Deep learning system that classifies music genres using Convolutional Recurrent Neural Networks and audio feature extraction.',
      features: [
        'CRNN architecture for audio classification',
        'Feature extraction using Librosa and PyDub',
        'Support for multiple audio formats',
        'Real-time genre prediction API',
      ],
      techStack: ['Python', 'TensorFlow', 'CRNN', 'Librosa', 'PyDub', 'Keras', 'Flask'],
      icon: Music,
      gradient: 'from-purple-600 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Innovative AI solutions solving real-world problems</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-blue-600 dark:text-cyan-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`flex-1 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
