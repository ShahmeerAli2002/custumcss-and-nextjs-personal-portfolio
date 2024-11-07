
'use client'
import { motion } from "framer-motion";
import styles from './contact.module.css';

export default function Contact() {
  return (
    <motion.section 
      className={styles.contactSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.contactDescription}>
          For HTML, CSS, NextJS, TypeScript, and JavaScript related work, feel free to reach out to us.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Email</h3>
            <p>problemssolve196@gmail.com</p>
          </div>
          
       
          <div className={styles.contactItem}>
            <h3>Mobile</h3>
            <p>03216094104</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}