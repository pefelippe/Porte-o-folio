import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-fit flex  items-center  justify-center gap-5 "
    >
      <AnimatedBtn
        className="rounded-full   font-semibold "
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-full  font-semibold "
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-full  font-semibold"
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vQvhNCz1NMBnOjPHOSTYSV_h0S8q-iDGKgYq0-oQOqPy5tICUKm4q9CathcuTlqOw3IE3i8_ACZjWmi/pub"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </motion.div>
  );
}

export default Links;