
import { useState, useEffect } from "react";
import { toast } from "sonner";
import AtomVisualizer from "./atom-builder/AtomVisualizer";
import ParticleControls from "./atom-builder/ParticleControls";
import ElementDetails from "./atom-builder/ElementDetails";
import { getElement } from "./atom-builder/AtomData";

interface BuildAtomActivityProps {
  gameMode?: boolean;
  superpositionMode?: boolean;
  creativeMode?: boolean;
  animalTheme?: boolean;
  title?: string;
}

const BuildAtomActivity = ({ 
  gameMode = false, 
  superpositionMode = false, 
  creativeMode = false, 
  animalTheme = false,
  title = "Build Your Atom"
}: BuildAtomActivityProps) => {
  const [protons, setProtons] = useState(1);
  const [electrons, setElectrons] = useState(1);
  const [isStable, setIsStable] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [superpositionActive, setSuperpositionActive] = useState(superpositionMode);
  
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
    setIsStable(superpositionActive ? true : (p === e && element.stable === true));
  };
  
  const handleReset = () => {
    setProtons(1);
    setElectrons(1);
    setIsStable(true);
    setCompleted(false);
    setSuperpositionActive(superpositionMode);
  };
  
  const handleComplete = () => {
    if (isStable || superpositionActive) {
      setCompleted(true);
      
      if (superpositionActive) {
        toast.success(`You've created a quantum superposition of atom states!`, {
          description: "The atom exists in multiple states simultaneously."
        });
      } else if (animalTheme) {
        toast.success(`You've created a quantum ${currentElement.name} animal!`, {
          description: "Your quantum animal has special properties based on this element."
        });
      } else if (creativeMode) {
        toast.success(`You've designed a creative ${currentElement.name} structure!`, {
          description: "Your quantum creation has unique properties."
        });
      } else {
        toast.success(`You've built a stable ${currentElement.name} atom!`, {
          description: "Great job understanding the balance of protons and electrons."
        });
      }
    } else {
      toast.error("Your atom is unstable!", {
        description: "Try to balance the number of protons and electrons."
      });
    }
  };
  
  const toggleSuperposition = () => {
    setSuperpositionActive(!superpositionActive);
    setIsStable(!superpositionActive);
  };
  
  useEffect(() => {
    if (gameMode && !completed) {
      const timer = setTimeout(() => {
        toast.info("Challenge: Create a stable atom with at least 6 protons!");
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [gameMode, completed]);
  
  return (
    <div className="p-6 quantum-card">
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
      
      <div className="flex flex-col md:flex-row gap-8">
        <AtomVisualizer 
          protons={protons} 
          electrons={electrons} 
          isStable={isStable} 
          superposition={superpositionActive}
          animalTheme={animalTheme}
        />
        
        <div className="flex-1 flex flex-col">
          <ParticleControls 
            protons={protons}
            electrons={electrons}
            onProtonChange={handleProtonChange}
            onElectronChange={handleElectronChange}
          />
          
          {superpositionMode && (
            <div className="my-4 p-3 border border-purple-300 dark:border-purple-700 rounded-md bg-purple-50 dark:bg-purple-900/30">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Quantum Superposition</span>
                <button 
                  onClick={toggleSuperposition}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    superpositionActive 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {superpositionActive ? 'Active' : 'Inactive'}
                </button>
              </div>
              <p className="mt-2 text-xs text-purple-600 dark:text-purple-400">
                When active, your atom exists in multiple states simultaneously.
              </p>
            </div>
          )}
          
          <ElementDetails 
            element={currentElement}
            protons={protons}
            electrons={electrons}
            completed={completed}
            onReset={handleReset}
            onComplete={handleComplete}
            animalTheme={animalTheme}
            creativeMode={creativeMode}
          />
        </div>
      </div>
    </div>
  );
};

export default BuildAtomActivity;
