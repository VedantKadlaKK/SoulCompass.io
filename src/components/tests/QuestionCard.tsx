
import { Question, Answer } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionCardProps {
  question: Question;
  answer: Answer | null;
  onAnswerChange: (answer: Answer) => void;
}

const QuestionCard = ({ question, answer, onAnswerChange }: QuestionCardProps) => {
  const handleOptionSelect = (optionId: number) => {
    const selectedOption = question.options.find((opt) => opt.id === optionId);
    if (selectedOption) {
      onAnswerChange({
        questionId: question.id,
        selectedOptionId: optionId,
        value: selectedOption.value,
        category: question.category,
      });
    }
  };

  return (
    <Card className="w-full shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900">
        <CardTitle className="text-lg md:text-xl font-medium text-indigo-800 dark:text-indigo-200">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <RadioGroup
          value={answer?.selectedOptionId.toString()}
          onValueChange={(value) => handleOptionSelect(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-2 rounded-md p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RadioGroupItem
                value={option.id.toString()}
                id={`option-${question.id}-${option.id}`}
                className="text-purple-600"
              />
              <Label
                htmlFor={`option-${question.id}-${option.id}`}
                className="flex-grow cursor-pointer font-medium text-gray-700 dark:text-gray-200"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
