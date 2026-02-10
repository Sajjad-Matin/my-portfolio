"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import amazon from "../public/projects/amazonproject.webp";
import codesphere from "../public/projects/code-sphere.png";
import gamehub from "../public/projects/gamehub.webp";
import streamify from "../public/projects/streamify.png";
import webify from "../public/projects/webify.png";
import bamyan from "../public/projects/bamyanentertainment.png";
import Link from "next/link";
import portfolio from "../public/projects/portfolio.png";
import edulearn from "../public/projects/edulearn.png"

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "EduLearn – Online Learning Platform",
      description:
        "EduLearn is a responsive online learning platform built to provide a smooth and interactive experience for students. I developed both the frontend and backend, integrating RESTful APIs, a MySQL database, and HesabPay for seamless payment processing.",
      tech: [
        "React.js",
        "Chakra UI",
        "Framer Motion",
        "Laravel",
        "RestAPI",
        "MySQL",
        "HesabPay"
      ],
      image: edulearn,
      link: "https://edulearn-academy.vercel.app",
    },
    {
      title: "Bamyan Entertainment",
      description:
        "Bamyan Entertainment is a dynamic event discovery website that highlights concerts, cultural shows, and entertainment experiences, with features for upcoming event browsing and newsletter subscription to keep audiences informed and engaged.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Laravel",
        "RestAPI",
        "MySQL",
        "Stripe Payment"
      ],
      image: bamyan,
      link: "https://bamyanentertainment.de",
    },
    {
      title: "Webify — Software Company Website",
      description:
        "A fully responsive corporate website featuring smooth animations, optimized performance, and a modern brand identity.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
      image: webify,
      link: "https://webify-software-company.vercel.app/",
    },
    {
      title: "3D Interactive Portfolio",
      description:
        "A modern, fully responsive personal portfolio with immersive 3D effects, smooth animations, and optimized performance, showcasing a strong and cohesive brand identity.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: portfolio,
      link: "https://shafiqullah-ebadi.vercel.app/",
    },

    {
      title: "CodeSphere — SaaS Landing Template",
      description:
        "A clean and minimal SaaS-style landing page template designed for startups and tech companies.",
      tech: ["Next.js", "Tailwind CSS"],
      image: codesphere,
      link: "https://code-sphere-eight.vercel.app/",
    },
    {
      title: "GameHub — Game Discovery Platform",
      description:
        "A cross-platform web app for discovering games with filtering, search, and API-powered game insights.",
      tech: ["React.js", "Chakra UI", "Rawg API"],
      image: gamehub,
      link: "https://game-hub-project-hazel.vercel.app/",
    },
    {
      title: "Streamify — Video & Chat Platform",
      description:
        "A real-time communication platform supporting video calls, live streaming, and instant messaging.",
      tech: ["React", "Stream SDK", "Node.js", "Express", "MongoDB"],
      image: streamify,
      link: "https://stream-video-chat.vercel.app/",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300"
                variants={projectVariants}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        <Link href={project.link} target="_blank">
                          View Project
                        </Link>
                      </button>
                    </div>
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
