
import { CareerRecommendation } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CareerMatchProps {
  career: CareerRecommendation;
  rank: number;
}

const CareerMatch = ({ career, rank }: CareerMatchProps) => {
  return (
    <Card className={`shadow-md hover:shadow-lg transition-shadow ${
      rank === 1 ? "border-purple-400 dark:border-purple-600" : ""
    }`}>
      <CardHeader className={`pb-2 ${
        rank === 1 
          ? "bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50" 
          : ""
      }`}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-bold text-xl text-gray-800 dark:text-gray-100">
              {career.career}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
              {career.description}
            </CardDescription>
          </div>
          {rank === 1 && (
            <span className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-purple-600 text-white text-xs font-medium">
              Top Match
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Match Score</span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">{career.matchScore}%</span>
          </div>
          <Progress value={career.matchScore} className="h-2" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {career.requiredSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Growth Potential</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{career.growthPotential}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerMatch;
