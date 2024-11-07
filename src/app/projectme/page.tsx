"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./project.module.css";

const ProjectMe = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping platform",
      link: "https://e-commerce-mauve-rho.vercel.app/",
      status: "completed",
      image: "/image/2cm2.png"
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with customizable templates and real-time preview",
      link: "https://update-milestone-5-unique-path-and-shareable-link.vercel.app/",
      status: "completed",
      image: "/image/project3.png"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcase",
      link: "https://my-portfolio-dusky-xi-83.vercel.app/",
      status: "completed",
      image: "/image/project2.png"
    },
    {
      title: "Video Graphics Website",
      description: "Professional video and graphics design portfolio showcasing motion graphics, animations, and visual effects work",
      link: "https://custom-css-nextjs-website.vercel.app/",
      status: "completed",
      image: "/image/project4.png"
    },
    {
      title: "Gaming Website",
      description: "Interactive gaming platform with multiplayer features, game reviews, and community forums",
      link: "https://tailwindcss-nextjs-website.vercel.app/",
      status: "completed",
      image: "/image/project5.png"
    },
    {
      title: "Simple Blog Website",
      description: "Coming Soon - Personal blogging platform",
      status: "upcoming",
      image: "/images/ai-chat.jpg"
    },
    {
      title: "Full-Featured Blog Platform",
      description: "Coming Soon - Complete blogging platform with user authentication, comments, categories and rich text editing",
      status: "upcoming",
      image: "/images/task-management.jpg"
    },
  ];

  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  loading="lazy"
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              {project.status === "completed" ? (
                <Link 
                  href={project.link!} 
                  target="_blank"
                  aria-label={`View ${project.title}`}
                  className={styles.button}
                >
                  View Project
                </Link>
              ) : (
                <span className={styles.comingSoon}>Coming Soon</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectMe;
