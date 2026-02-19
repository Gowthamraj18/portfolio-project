import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Users, Code } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: typeof Trophy;
  color: string;
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements: Achievement[] = [
    {
      title: 'Top 5 - Innovate Hackathon',
      description: 'Secured top 5 position at VIT University\'s prestigious Innovate Hackathon among 100+ teams',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Top 3 - Make-a-thon 6.0',
      description: 'Achieved 3rd place at SVCE\'s Make-a-thon 6.0 for innovative AI-powered solution',
      icon: Medal,
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Treasurer - Innovation Council',
      description: 'Serving as Treasurer of Institution\'s Innovation Council, managing events and fostering innovation',
      icon: Users,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: '50+ DSA Problems Solved',
      description: 'Solved 50+ Data Structures and Algorithms problems across LeetCode, HackerRank, and GeeksforGeeks',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>

                <div className="relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement.description}</p>
                    </div>
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
