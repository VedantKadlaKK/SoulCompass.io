
import { TestResult } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ResultCardProps {
  result: TestResult;
  maxScore: number;
  categoryLabel?: string;
}

const ResultCard = ({ result, maxScore, categoryLabel }: ResultCardProps) => {
  const progressValue = (result.score / maxScore) * 100;
  
  // Determine color based on category or general scale
  const getColorClass = () => {
    if (result.category.includes("depression") || result.category.includes("anxiety") || result.category.includes("neuroticism")) {
      return progressValue > 50 
        ? "from-red-400 to-orange-400 text-white" 
        : "from-green-400 to-teal-400 text-white";
    }
    
    return "from-indigo-400 to-purple-400 text-white";
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className={`bg-gradient-to-r ${getColorClass()}`}>
        <CardTitle className="capitalize text-lg">
          {categoryLabel || result.category}
        </CardTitle>
        <CardDescription className="text-sm opacity-90">
          Score: {result.score} / {maxScore}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-500">Level</span>
            <span className="text-sm font-medium text-gray-800">{progressValue.toFixed(0)}%</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Interpretation</h4>
            <p className="text-sm text-gray-600">{result.interpretation}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Recommendations</h4>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              {result.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
