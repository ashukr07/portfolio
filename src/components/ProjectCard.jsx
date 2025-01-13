import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card bg-base-300 shadow-xl border-2 border-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Image */}
      <figure className="h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">

        <h2 className="card-title text-lg flex items-center justify-between pb-2">
          {project.title}
          <span className="badge badge-accent ml-2">{project.date}</span>
        </h2>
       
        <p className=" text-sm pb-2">{project.description}</p>
        

        {/* Technologies */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <div key={index} className="badge badge-outline badge-sm">
              {tech}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="card-actions justify-between mt-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
            >
              View Live
            </a>
          )}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
