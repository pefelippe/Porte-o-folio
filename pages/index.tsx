import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";
import ContactContent from "./contact";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col  relative ">
      <section className="section bg-blue">
        <Hero />
      </section>
      {/* <section className="section ">
        <AboutContent />
      </section> */}

      <section className="section  border-y">
        <ProjectContent />
      </section>
      <section className="section bg-gray-900 border-t text-white py-32">
        <ContactContent />
      </section>
    </motion.div>
  );
}
