import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Sparkles, Target, Trophy } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with React, FastAPI, and modern databases',
    },
    {
      icon: Sparkles,
      title: 'AI & Machine Learning',
      description: 'Creating intelligent solutions using TensorFlow, PyTorch, and NLP',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Strong foundation in DSA with 50+ problems solved across platforms',
    },
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      description: 'Top placements in multiple collegiate hackathons and competitions',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-cyan-500">B.Tech student</span> specializing in{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-500">Artificial Intelligence and Data Science</span> at Rajalakshmi
              Engineering College, Chennai.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in technology is driven by a deep fascination with{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-500">AI, Machine Learning,</span> and{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-500">Software Development</span>. I thrive on building innovative
              solutions that leverage data-driven insights and intelligent algorithms to solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in <span className="font-semibold text-blue-600 dark:text-cyan-500">Python, FastAPI, React,</span> and{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-500">Machine Learning frameworks</span>, I've developed multiple
              AI-powered applications and participated in numerous hackathons, earning top placements for my innovative projects.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm actively involved in the{' '}
              <span className="font-semibold text-blue-600 dark:text-cyan-500">Institution's Innovation Council</span> as Treasurer, fostering a
              culture of innovation and collaboration among students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
