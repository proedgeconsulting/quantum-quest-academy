
import { useState } from "react";
import { toast } from "sonner";
import AtomVisualizer from "./atom-builder/AtomVisualizer";
import ParticleControls from "./atom-builder/ParticleControls";
import ElementDetails from "./atom-builder/ElementDetails";
import { getElement } from "./atom-builder/AtomData";

const BuildAtomActivity = () => {
  const [protons, setProtons] = useState(1);
  const [electrons, setElectrons] = useState(1);
  const [isStable, setIsStable] = useState(true);
  const [completed, setCompleted] = useState(false);
  
  const currentElement = getElement(protons);
  
  const handleProtonChange = (value: number[]) => {
    setProtons(value[0]);
    checkStability(value[0], electrons);
  };
  
  const handleElectronChange = (value: number[]) => {
    setElectrons(value[0]);
    checkStability(protons, value[0]);
  };
  
  const checkStability = (p: number, e: number) => {
    const element = getElement(p);
    setIsStable(p === e && element.stable === true);
  };
  
  const handleReset = () => {
    setProtons(1);
    setElectrons(1);
    setIsStable(true);
    setCompleted(false);
  };
  
  const handleComplete = () => {
    if (isStable) {
      setCompleted(true);
      toast.success(`You've built a stable ${currentElement.name} atom!`, {
        description: "Great job understanding the balance of protons and electrons."
      });
    } else {
      toast.error("Your atom is unstable!", {
        description: "Try to balance the number of protons and electrons."
      });
    }
  };
  
  return (
    <div className="p-6 quantum-card">
      <h3 className="text-xl font-bold mb-4">Build Your Atom</h3>
      <p className="text-muted-foreground mb-6">
        Balance protons and electrons to create stable atoms. Atoms are stable when they have equal numbers of protons and electrons.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <AtomVisualizer 
          protons={protons} 
          electrons={electrons} 
          isStable={isStable} 
        />
        
        <div className="flex-1 flex flex-col">
          <ParticleControls 
            protons={protons}
            electrons={electrons}
            onProtonChange={handleProtonChange}
            onElectronChange={handleElectronChange}
          />
          
          <ElementDetails 
            element={currentElement}
            protons={protons}
            electrons={electrons}
            completed={completed}
            onReset={handleReset}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default BuildAtomActivity;
