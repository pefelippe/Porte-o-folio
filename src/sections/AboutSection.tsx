import { motion } from "framer-motion";
import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1.5 }}
      className=" w-full flex flex-col justify-center items-center gap-8  mx-auto  min-h-screen  py-20"
    >
      {/* <motion.h1 className="text-3xl uppercase tracking-[1px] font-semibold mx-autos text-indigo-500">
        About me
      </motion.h1> */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-32 items-center text-start ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.6 }}
          className="text-sm lg:text-[32px] text-left leading-normal  items-start gap-5
         justify-center flex flex-col w-full "
        >
          <motion.h1 className="text-4xl tracking-tighter">
            Pedro Felippe
          </motion.h1>
          <motion.p className="text-gray-300 text-base lg:text-lg max-w-xl">
            Experienced web developer with a proven track record since 2020,
            proficiently navigating the intricacies of developing robust and
            dynamic digital solutions. Specializing in a diverse array of
            projects including SaaS platforms, e-commerce websites, and
            captivating landing pages, I have honed my skills through
            collaborative efforts with multidisciplinary teams spanning the
            globe. <br />
            <br />
            My professional journey is marked by a commitment to excellence,
            consistently delivering high-quality, user-centric products that
            meet and exceed client expectations. Leveraging a blend of technical
            expertise and creative vision, I thrive in environments that demand
            innovative problem-solving and seamless integration of cutting-edge
            technologies.
            <br />
            <br />
            I am dedicated to driving tangible results and elevating brands to
            new heights in the digital landscape.
            <br />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.25 }}
            className="flex justify-center
        items-center w-fit space-x-6 text-base tracking-widest"
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
              className={`tracking-wide hover:text-blue`}
            >
              <Linkedin className="h-8 w-8" />
            </Link>

            <Link
              target="_blank"
              href="https://github.com/pefelippe"
              className={`tracking-wide hover:text-blue`}
            >
              <GithubIcon className="h-8 w-8" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/pedrof.jpg"
          className="rounded-md h-[250px] w-[600px] lg:h-[600px] object-cover shadow"
        />
      </div>
    </motion.div>
  );
}

export default AboutSection;
