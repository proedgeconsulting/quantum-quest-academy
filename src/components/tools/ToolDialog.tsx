
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  AtomBuilderDialog,
  QuantumCircuitDialog,
  QuantumCalculatorDialog,
  QuantumVisualizerDialog,
  ParticleExplorerDialog,
  QuantumExperimentsDialog
} from "./tool-dialogs";

interface ToolDialogProps {
  activeToolDialog: string | null;
  onClose: () => void;
}

const ToolDialog: React.FC<ToolDialogProps> = ({ activeToolDialog, onClose }) => {
  const renderToolContent = () => {
    switch (activeToolDialog) {
      case "atom-builder":
        return <AtomBuilderDialog />;
      case "quantum-circuit":
        return <QuantumCircuitDialog />;
      case "quantum-calculator":
        return <QuantumCalculatorDialog />;
      case "quantum-visualizer":
        return <QuantumVisualizerDialog />;
      case "particle-explorer":
        return <ParticleExplorerDialog />;
      case "quantum-experiments":
        return <QuantumExperimentsDialog />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={!!activeToolDialog} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-full max-w-5xl">
        {renderToolContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ToolDialog;
