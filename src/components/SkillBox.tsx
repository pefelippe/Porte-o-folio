import { motion } from "framer-motion";
import React from "react";

interface ISkillBox {
  title: string;
  description?: string;
  children?: JSX.Element;
}

const SkillBox = ({ title, description, children }: ISkillBox) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col justify-center items-center text-center mx-auto w-full rounded-md text-white"
    >
      <div className="group">
        <div className="z-20 max-w-[70px] ">{children}</div>
        <span className="flex flex-col  z-50 absolute  right-0 left-0 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 gap-2 ">
          <p className="font-semibold text-sm ">{title}</p>
          {/* <p className="max-md:hidden zx">{description}</p> */}
        </span>
      </div>
    </motion.a>
  );
};

export default SkillBox;
