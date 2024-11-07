"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "../page.module.css";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.logo}
        >
          Portfolio.
        </motion.div>
        <div className={styles.menuButton} onClick={toggleMenu}>
          <span>☰</span> 
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}
        >
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/socialmedia" className={styles.link}>SocialMedia</Link>
          <Link href="/projectme" className={styles.link}>Project</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </motion.div>      </div>
    </nav>
  );
};

export default Navbar;
