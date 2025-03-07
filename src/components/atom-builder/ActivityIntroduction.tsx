
import React from "react";

interface ActivityIntroductionProps {
  title: string;
  superpositionMode: boolean;
  animalTheme: boolean;
  creativeMode: boolean;
}

const ActivityIntroduction: React.FC<ActivityIntroductionProps> = ({ 
  title, 
  superpositionMode, 
  animalTheme, 
  creativeMode 
}) => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">
        {superpositionMode ? 
          "Create atoms in quantum superposition states - existing in multiple configurations simultaneously." :
         animalTheme ?
          "Design quantum animals with special properties based on different elements." :
         creativeMode ?
          "Use your creativity to design unique atomic structures with special properties." :
          "Balance protons and electrons to create stable atoms. Atoms are stable when they have equal numbers of protons and electrons."}
      </p>
    </>
  );
};

export default ActivityIntroduction;
