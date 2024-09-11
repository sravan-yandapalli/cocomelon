// src/components/CoverPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './CoverPage.css';

const CoverPage = () => {
  return (
    <section className="cover-page" id="home">
      <motion.div
        className="cover-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Welcome to Our Preschool</h1>
        <p>Where learning meets creativity and fun!</p>
        <motion.button
          className="learn-more"
          whileHover={{ scale: 1.1, backgroundColor: "#f6b24d" }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CoverPage;
