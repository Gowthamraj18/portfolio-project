import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Brain, Wrench, Globe, BarChart3 } from 'lucide-react';

interface SkillItem {
  name: string;
}

interface SkillCategory {
  category: string;
  icon: typeof Code2;
  skills: SkillItem[];
  color: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'SQL' },
      ],
    },
    {
      category: 'Web Development',
      icon: Globe,
      color: 'from-cyan-500 to-teal-600',
      skills: [
        { name: 'React.js' },
        { name: 'Node.js' },
        { name: 'FastAPI' },
        { name: 'REST APIs' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'TensorFlow' },
        { name: 'PyTorch' },
        { name: 'Scikit-learn' },
        { name: 'NLP' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'MongoDB' },
        { name: 'MySQL' },
      ],
    },
    {
      category: 'Tools & Libraries',
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git' },
        { name: 'Pandas' },
        { name: 'NumPy' },
      ],
    },
    {
      category: 'Data Visualization',
      icon: BarChart3,
      color: 'from-yellow-500 to-amber-600',
      skills: [
        { name: 'Power BI' },
        { name: 'Tableau' },
        { name: 'Matplotlib' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-transparent hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 transform-style-3d bg-opacity-80 backdrop-blur-sm"
              >
                {/* 3D Floating Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
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
