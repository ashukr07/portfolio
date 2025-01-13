
import { motion } from "framer-motion";
import {projects} from "../data/constant";
import ProjectCard from "../components/ProjectCard";
import { ExternalLink } from "lucide-react";
import { styles } from "../styles";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="scroll-mt-16 lg:scroll-mt-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`${styles.sectionHeadText} mb-10`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Featured Projects
        </motion.h2>
        <div className="w-full lg:w-3/4 mx-auto">
        <p className="text-center mb-12 text-xl">
          I have worked on a wide range of projects, from web applications to 
          AI/ML solutions. Here are some of my featured projects that showcase 
          my skills.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FeaturedProjects;
