import { motion } from "framer-motion";
import React from "react";

import ExperienceCard from "../components/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "nov de 2021",
      dateEnd: "hoje",
      sumarryPoints: [
        "Traduzir designs em componentes de interface de usuário responsivos e de qualidade",
        "Criação de testes, manutenções em códigos e desenvolver novas funcionalidades",
        "Reuniões em inglês com membros internacionais",
      ],
    },
    {
      id: 2,
      title: "Trainee em P&D",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "set de 2021",
      dateEnd: "nov de 2021",
      sumarryPoints: [
        "Buscar e estudar novas tecnologias",
        "Criar provas de Conceito (PoCs)",
        "Participar na criação de Disclosures",
        "Reuniões em inglês com membros internacionais",
      ],
    },
    {
      id: 3,
      title: "Estágio em P&D",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg",
      company: "Instituto Atlântico",
      dateInit: "dez de 2020",
      dateEnd: "ago de 2021",
      sumarryPoints: [
        "Buscar e estudar novas tecnologias",
        "Criar provas de Conceito (PoCs)",
        "Participar na criação de Disclosures",
        "Reuniões em inglês com membros internacionais",
      ],
    },
    {
      id: 4,
      title: "Bolsista em Q&A",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFc44nXB_jY6t3Y5z-3XKEw4iU-0-xbuzqeP6Xr9bTvD02aCy4LbAPeMvopOVFFZ2NJik&usqp=CAU",
      company: "GREAT",
      dateInit: "jun de 2020",
      dateEnd: "ago de 2021",
      sumarryPoints: [
        "Testar produtos utilizando testes funcionais e de integração",
        "Modelagem de casos de uso, automação de testes",
        "Criação de scripts automatizados",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-max  flex items-center flex-col relative overflow-hidden  justify-center rounded-lg px-8 "
    >
      <h4 className=" w-full text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl underline decoration-[#5865f2]">
        <span className="">Experiência</span>
      </h4>

      <div className="w-full max-w-7xl flex space-x-10 overflow-x-scroll snap-x snap-mandatory text-white pt-10 pb-5">
        {experiences.map((experience) => {
          return (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              company={experience.company}
              imgUrl={experience.imgUrl}
              dateInit={experience.dateInit}
              dateEnd={experience.dateEnd}
              sumarryPoints={experience.sumarryPoints}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Experience;
