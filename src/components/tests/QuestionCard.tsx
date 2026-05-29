import { Question, Answer } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionCardProps {
  question: Question;
  answer: Answer | null;
  onAnswerChange: (answer: Answer) => void;
}

const QuestionCard = ({ question, answer, onAnswerChange }: QuestionCardProps) => {
  const handleOptionSelect = (optionId: number) => {
    const selectedOption = question.options.find((opt) => opt.id === optionId);
    if (!selectedOption) return;

    if (answer?.selectedOptionId === optionId) {
      // Deselect if clicking the same option again
      onAnswerChange({
        questionId: question.id,
        selectedOptionId: null,
        value: null,
        category: question.category,
      });
    } else {
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
        <CardTitle className="text-lg md:text-xl font-medium text-indigo-800 dark:text-indigo-200">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4 space-y-3">
        {question.options.map((option) => {
          const isSelected = answer?.selectedOptionId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleOptionSelect(option.id)}
              className={`w-full text-left rounded-md p-3 border transition-colors ${
                isSelected
                  ? "bg-purple-600 text-white border-purple-700"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-purple-50"
              } dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-purple-500`}
            >
              {option.text}
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
