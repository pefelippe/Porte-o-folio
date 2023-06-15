import { motion } from "framer-motion";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="work"
      className="max-w-4xl mx-auto w-full text-xl 
      flex flex-col justify-start gap-6  items-start text-start"
    >
      {/* <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl "
      >
        Projects
      </motion.h2>

      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full md:max-w-4xl mx-auto rounded-2xl max-h-[400px]  h-full"
      >
        {projects?.map((proj) => {
          return (
            <SwiperSlide key={proj.id}>
              <Link href="/projects">
                <motion.img
                  alt="project-img "
                  className="object-fit max-w-[calc(100% - 100px)] max-h-[90%] items-center mx-auto"
                  src={proj.imgUrl}
                />
              </Link>
               <ProjectCard
                key={proj.id}
                id={proj.id}
                description={proj.description}
                imgUrl={proj.imgUrl}
                link={proj.link}
                title={proj.title}
                repo={proj.repo}
                stack={proj.stack}
              /> 
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </motion.div>
  );
}

export default Projects;
