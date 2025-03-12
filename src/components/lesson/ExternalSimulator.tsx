
import { Lesson } from "@/data/types/courseTypes";

export interface ExternalSimulatorProps {
  lesson?: Lesson;
  simulatorPath: string;
}

const ExternalSimulator = ({ lesson, simulatorPath }: ExternalSimulatorProps) => {
  return (
    <div className="w-full h-[600px] border border-border rounded-md overflow-hidden">
      <iframe 
        src={`/simulators/${simulatorPath}`}
        className="w-full h-full"
        title="External Simulator"
      />
    </div>
  );
};

export default ExternalSimulator;
