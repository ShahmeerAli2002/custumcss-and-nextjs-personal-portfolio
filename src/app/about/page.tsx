  'use client'
  import { motion } from 'framer-motion'
  import styles from './about.module.css'

  export default function About() {
    return (
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.info}>
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Shahmeer Ali</h2>
              <p>Frontend Developer</p>
            </motion.div>

            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.experience}
            >
              <h3>Experience</h3>
              <p>7 months of professional development experience</p>
            </motion.div>

            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.education}
            >
              <h3>Education</h3>
              <ul>
                
                <li>intermediate</li>
                <li>Various Online Certifications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8 }}
              className={styles.projects}
            >
              <h3>Projects</h3>
              <ul>
                <li>E-commerce Website</li>
                <li>Portfolio Website</li>
                <li>Resume Builder</li>
                <li>Video Graphics Website</li>
                <li>Gaming Website</li>
                <li>Simple Blog Website</li>
                <li>Full-Featured Blog Platform</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 1 }}
              className={styles.skills}
            >
              <h3>Skills</h3>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>javaScript/TypeScript</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Html</li>
                <li>Git</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }
