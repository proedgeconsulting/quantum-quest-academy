
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
          "Explore Heisenberg's Uncertainty Principle through this interactive simulator. Observe how particles in quantum superposition states have inherently uncertain properties - the more precisely you know a particle's position, the less precisely you can know its momentum, and vice versa." :
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
