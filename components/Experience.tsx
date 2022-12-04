import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../atoms/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative overflow-hidden flex-col text-left 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center xl:h-screen"
    >
      <h3 className="component-title">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
