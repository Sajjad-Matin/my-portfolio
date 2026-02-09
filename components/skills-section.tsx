"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "React Native"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "Rest APIs", "Microservices"],
    },
    {
      category: "Data Base & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis", "Supabase"],
    },
    {
      category: "AI & ML Integration",
      skills: ["OpenAI API", "LangChain", "Vector DataBases", "LLMs", "AI/ML model integration", "Hugging Face", "GPT Models"],
    },
    {
      category: "DevOps & Deployment",
      skills: ["Docker", "AWS", "Vercel", "Netlify", "CI/CD", "GitHub Actions"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                className="group relative"
                variants={skillVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
