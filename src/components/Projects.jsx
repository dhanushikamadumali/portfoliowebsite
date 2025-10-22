import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          id="about"
          className="py-20 bg-dark-200"
    
    >
      
    </motion.div>
  );
}

export default Projects;
