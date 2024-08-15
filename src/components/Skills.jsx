import React from "react";
import { skills } from "../assets/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="skills">
      {skills.map((skill) => {
        return <SkillsCard key={skill.id} {...skill} />;
      })}
    </div>
  );
};

export default Skills;
