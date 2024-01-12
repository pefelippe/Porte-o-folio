import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";
import { HeaderButtons, Logo } from "./Header";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" w-screen font-light items-start mx-auto bg-gray-900
       text-white  flex-col h-fit  text-md  justify-start max-xl:px-6  flex "
    >
      <div className="max-w-5xl mx-auto flex  w-full flex-col py-8 gap-8">
        <div className="flex items-center max-md:flex-col justify-between ">
          <Logo />

          <HeaderButtons />
          <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-8 w-8" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-8 w-8" />
            </AnimatedBtn>
          </motion.div>
        </div>

        <div className="text-sm mx-auto font-thin justify-center items-center text-center w-full border-t pt-8">
          <span>© Copyright {year}. Made by Pedro Felippe.</span>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
