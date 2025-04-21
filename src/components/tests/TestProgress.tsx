
import { Progress } from "@/components/ui/progress";

interface TestProgressProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

const TestProgress = ({ currentStep, totalSteps, stepNames }: TestProgressProps) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full space-y-2 mb-8">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
          Step {currentStep + 1} of {totalSteps}: {stepNames[currentStep]}
        </span>
        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <Progress value={progressPercentage} className="h-2 bg-slate-200" />
      
      <div className="flex justify-between mt-2">
        {stepNames.map((name, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center ${
              index === currentStep 
                ? "text-purple-700 dark:text-purple-300 font-medium" 
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <div 
              className={`w-4 h-4 rounded-full mb-1 ${
                index <= currentStep 
                  ? "bg-purple-600 dark:bg-purple-400" 
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
            <span className="text-xs hidden sm:inline">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestProgress;
