import React from "react";

import { skills } from "@/service/skillData";
import SkillIcn from "../components/SkillIcn";

import "@/styles/Skills.css"
import "@/styles/FlexBox.css"
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="hidden skillsMap w-full lg:flex flex-wrap gap-10 items-center justify-center overflow-hidden py-5">
          {skills.map((skill, index) => {
            return <SkillIcn name={skill?.name} icn={skill?.icn} key={index} />;
          })}
        </div>

        <div className="w-full flex flex-wrap lg:hidden gap-5 md:gap-10 justify-center skillsMap md:p-20">
          {
            skills.map((skill, index) => {
              return <Image src={skill.icn} alt="" className="bulgeBox w-28 SmallImg" key={index} />
            })
          }
        </div>
      </div>
    </>
  );
};

export default Skills;
