import { skills } from "../data/constant";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="bg-base-200 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-primary mb-8">Skills</h2>
      <p className="text-center mb-12 text-xl">
        Here are some of the skills I have been working on over the years:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="bg-neutral p-6 rounded-lg shadow-lg group hover:shadow-[0px_0px_20px_4px] hover:shadow-accent transition-all duration-300 mx-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <h3 className="text-3xl text-center text-primary font-semibold mb-4">{category.category}</h3>
            <hr className=" h-1 mx-auto my-4 bg-primary border-0 rounded md:my-10 group-hover:shadow-[0px_0px_20px_4px] group-hover:shadow-accent " />
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center gap-4 "
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Icon Container with CSS filter to remove white background */}
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain bg-opacity-45"
                    />
                  </div>
                  <p className="text-sm text-secondary">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
