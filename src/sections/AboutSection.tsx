import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function AboutSection() {
  return (
    <div className=" w-full flex flex-col justify-start gap-8 py-40">
      <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold underline decoration-indigo-500">
        About me
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start text-start ">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/pedrof.jpg"
          className="rounded-full lg:rounded-md w-[450px] h-[500px] object-cover"
        />
        <motion.div
          className="text-sm lg:text-[32px] text-left leading-normal dark:text-gray-100 items-start gap-10
         justify-center flex flex-col w-full"
        >
          <motion.p
            className="text-gray-300 text-base lg:text-2xl max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
          >
            Hey There. I am Pedro Felippe. <br />
            <br />
            I accumulated practical experience with microfrontends, performance
            monitoring, automated testing, server-side rendering (SSR), search
            engine optimization (SEO) and integration with cloud services such
            as Azure and AWS (Lambda, DynamoDB, S3). <br />
            <br />
            Feel free to shoot me an email at{" "}
            <Link
              href={"mailto:pedfelippe@gmail.com"}
              className="hover:text-gray-500"
            >
              <b>pedfelippe@gmail.com</b>
            </Link>{" "}
            or{" "}
            <ScrollLink
              to="contact-container"
              className="hover:text-gray-500 font-bold cursor-pointer"
            >
              contact me above
            </ScrollLink>
            .<br />
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
