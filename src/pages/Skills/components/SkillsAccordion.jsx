import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import skillsData from "@/content/skills.json";
const skills = skillsData.skills;
import SkillDetail from "./SkillDetail";
import iconMap from "@/utils/iconMap";
import SectionTitle from "@/components/SectionTitle";

const SkillsAccordion = () => {
  const [activeId, setActiveId] = useState(skills[0]?.title || null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  const activeSkill = skills.find((s) => s.title === activeId);

  return (
    <div className="flex flex-col gap-25">
      <SectionTitle title="Mes domaines" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
          <React.Fragment key={skill.title}>
            <FeatureCard
              icon={<Icon className="text-2xl text-main" />}
              title={skill.title}
              onClick={() => toggle(skill.title)}
              isActive={activeId === skill.title}
            />
            {skill.title === activeId && (
              <div className="col-span-full md:hidden py-2">
                <SkillDetail skill={skill} />
              </div>
            )}
          </React.Fragment>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeSkill && (
          <motion.div
            key={activeSkill.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="hidden md:flex flex-col gap-4 px-2"
          >
            <SkillDetail skill={activeSkill} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsAccordion;
