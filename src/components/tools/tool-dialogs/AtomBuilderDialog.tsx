
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import AtomSimulation from "@/components/AtomSimulation";

const AtomBuilderDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Atom Builder</DialogTitle>
        <DialogDescription>
          Build and explore atomic structures with protons, neutrons, and electrons
        </DialogDescription>
      </DialogHeader>
      <div className="py-4 w-full flex justify-center">
        <div className="w-full">
          <AtomSimulation />
        </div>
      </div>
    </>
  );
};

export default AtomBuilderDialog;
