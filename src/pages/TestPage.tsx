
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import QuestionCard from "@/components/tests/QuestionCard";
import TestProgress from "@/components/tests/TestProgress";
import { useTestContext } from "@/context/TestContext";
import { Answer } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { testType } = useParams<{ testType: string }>();
  const {
    currentTest,
    setCurrentTest,
    getTestQuestions,
    getTestAnswers,
    updateAnswer,
  } = useTestContext();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Set current test based on route param
  useEffect(() => {
    if (testType === "personality") {
      setCurrentTest("personality");
    } else if (testType === "mental-health") {
      setCurrentTest("mentalHealth");
    } else if (testType === "career") {
      setCurrentTest("career");
    } else {
      navigate("/tests");
    }
    setCurrentQuestionIndex(0); // Reset question index when test changes
  }, [testType, setCurrentTest, navigate]);
  
  // Get questions and answers for current test
  const questions = getTestQuestions();
  const answers = getTestAnswers();
  
  // Get current question and answer
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id) || null;

  // Check if all questions in current test are answered
  const allQuestionsAnswered = questions.length > 0 && questions.every(q => 
    answers.some(a => a.questionId === q.id)
  );
  
  // Enable Next button only if current question is answered
  const isNextEnabled = currentAnswer !== null;

  // Handle answer change
  const handleAnswerChange = (answer: Answer) => {
    updateAnswer(answer);
  };
  
  // Handle navigation
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const navigateNextTestOrResults = () => {
    if (currentTest === "personality") {
      navigate("/test/mental-health");
    } else if (currentTest === "mentalHealth") {
      navigate("/test/career");
    } else if (currentTest === "career") {
      navigate("/results");
    }
  };

  const handleNext = () => {
    // If not on last question, go to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    // If on last question and all answered, proceed to next test/results
    else if (allQuestionsAnswered) {
      navigateNextTestOrResults();
    } else {
      toast({
        title: "Please complete all questions",
        description: "Make sure to answer all questions before proceeding.",
        variant: "destructive",
      });
    }
  };
  
  const handleCompleteTest = () => {
    if (allQuestionsAnswered) {
      navigateNextTestOrResults();
    } else {
      toast({
        title: "Test Incomplete",
        description: "Please answer all questions to proceed.",
        variant: "destructive",
      });
    }
  };
  
  // Get test title and step names
  const getTestTitle = () => {
    switch (currentTest) {
      case "personality":
        return "Personality Assessment";
      case "mentalHealth":
        return "Mental Well-being Assessment";
      case "career":
        return "Career Interests Assessment";
      default:
        return "Assessment";
    }
  };
  
  const stepNames = ["Personality", "Mental Well-being", "Career"];
  const currentStep = currentTest === "personality" ? 0 : currentTest === "mentalHealth" ? 1 : 2;
  
  // Early return if questions are not loaded
  if (questions.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assessment...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
              {getTestTitle()}
            </h1>
            <p className="text-gray-600">
              {currentTest === "personality" && "Discover your key personality traits and tendencies."}
              {currentTest === "mentalHealth" && "Gain insights into your emotional well-being."}
              {currentTest === "career" && "Explore your work preferences and strengths."}
            </p>
          </div>
          
          <TestProgress 
            currentStep={currentStep}
            totalSteps={3}
            stepNames={stepNames}
          />
          
          {currentQuestion && (
            <div className="mb-8">
              <QuestionCard
                question={currentQuestion}
                answer={currentAnswer}
                onAnswerChange={handleAnswerChange}
              />
            </div>
          )}
          
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <div className="text-center text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            
            {currentQuestionIndex < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={!isNextEnabled}
                className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleCompleteTest}
                disabled={!allQuestionsAnswered}
                className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                {currentTest === "career" ? "View Results" : "Next Assessment"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestPage;

