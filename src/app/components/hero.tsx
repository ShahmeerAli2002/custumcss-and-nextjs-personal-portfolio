"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from "../hero.module.css"

const HeroSection = () => {
  

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.section}
    >
      <div className={styles.container}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.textContent}
        >
          <h1 className={styles.heading}>
            Hello, I'm <span className={styles.highlight}>Shahmeer Ali</span>
          </h1>
          <h2 className={styles.subHeading}>
            And I'm a <span className={styles.highlight}>Frontend Developer</span>
          </h2>
                  <p className={styles.description}>
                    Passionate web developer skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS. Creating modern, responsive, and user-friendly web applications with clean and efficient code.
                  </p>          <div className={styles.socialLinks}>
         
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={styles.imageContainer}
        >
          <motion.div
            className={styles.hexagonShape}
            animate={{
              boxShadow: ['0 0 20px #0ff', '0 0 40px #0ff'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <img
              src="/image/profile.jpg"
              alt="Shahmeer Ali"
              className={styles.profileImage}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;