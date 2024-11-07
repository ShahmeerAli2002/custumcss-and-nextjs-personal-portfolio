
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './socialmedia.module.css'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'


const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ShahmeerAli2002',
      icon: <FaGithub size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shahmeer-ali-8649a02b6/',
      icon: <FaLinkedin size={24} />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100013307523676',
      icon: <FaFacebook size={24} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shahmeerali84/?hl=en',
      icon: <FaInstagram size={24} />,
    },
  ]

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Connect With Me
      </motion.h1>
      <div className={styles.linksContainer}>
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={link.url} target="_blank" className={styles.link}>
              <div className={styles.linkContent}>
                {link.icon}
                <span>{link.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia
