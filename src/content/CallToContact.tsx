import { motion } from "framer-motion";
import React from "react";

import MessageForm from "../components/MessageForm";

type Props = {};

function CallToContact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="relative h-fit min-h-screen max-w-7xl mx-auto   text-xl max-xl:px-8 rounded-md 
      flex max-lg:flex-col justify-center gap-10 md:gap-20  items-center text-center "
    >
      <div className="flex flex-col gap-2 w-fit text-start">
        <p className=" text-[1.6rem] font-bold text-blue">Contato</p>
        <p className=" text-[2.5rem] lg:text-[4rem] leading-tight font-semibold">
          Manda uma <b className=" bg-blue">mensagem</b>!
        </p>
        <p className=" text-[1.8rem] font-medium text-gray-300 ">
          Pronto para começar uma parceria?
        </p>
      </div>

      <MessageForm name={""} email={""} subject={""} message={""} />
    </motion.div>
  );
}

export default CallToContact;
