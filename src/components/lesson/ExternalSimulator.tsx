
import { Lesson } from "@/types/lesson";

export interface ExternalSimulatorProps {
  lesson?: Lesson;
  simulatorPath: string;
}

const ExternalSimulator = ({ simulatorPath }: ExternalSimulatorProps) => {
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
