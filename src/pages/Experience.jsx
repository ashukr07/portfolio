import { motion } from "framer-motion";

import {experiences} from "../data/constant.js"
import {styles} from "../styles.js"

import ExperienceCard from "../components/ExperienceCard.jsx";


const Experience = () => {
  return (
    <>
      <motion.div >
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

        <div className="flex flex-col w-full md:w-3/4 p-5 mx-auto overflow-hidden">

        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      
    </>
  );
};

export default Experience;
