import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          id="projects"
          className="py-20 bg-dark-200"
    
    >
      <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-4'>
            My 
            <span className='text-purple'> Projects</span>
      </h2>
      <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10'>A selection of my recent 
      work</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
      {/**project card */}
      {projects.map((project, index)=>(
        <ProjectCard key={index} {...project}/>
      ))}
      </div>
      <div className='text-center mt-12 '>
      <a href="#" className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
      <span >view More Projects</span>
      <FaArrowRight className='ml-2'/>

      </a>
      </div>
      </div>
    </motion.div>
  );
}

export default Projects;
