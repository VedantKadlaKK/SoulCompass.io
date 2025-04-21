
import { createContext, useContext, useState, ReactNode } from "react";
import { 
  Question, 
  Answer, 
  UserProfile, 
  TestResult, 
  CareerRecommendation,
  TestReport 
} from "@/types";
import { personalityQuestions } from "@/data/personalityQuestions";
import { mentalHealthQuestions } from "@/data/mentalHealthQuestions";
import { careerQuestions } from "@/data/careerQuestions";
import { 
  getPersonalityInterpretation, 
  getMentalHealthInterpretation, 
  getCareerRecommendations,
  generateOverallSummary
} from "@/data/interpretations";

interface TestContextType {
  // User data
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;
  
  // Test state
  currentTest: "personality" | "mentalHealth" | "career" | null;
  setCurrentTest: (test: "personality" | "mentalHealth" | "career" | null) => void;
  
  // Answers
  personalityAnswers: Answer[];
  setPersonalityAnswers: (answers: Answer[]) => void;
  mentalHealthAnswers: Answer[];
  setMentalHealthAnswers: (answers: Answer[]) => void;
  careerAnswers: Answer[];
  setCareerAnswers: (answers: Answer[]) => void;
  
  // Results
  personalityResults: TestResult[];
  mentalHealthResults: TestResult[];
  careerRecommendations: CareerRecommendation[];
  
  // Report
  testReport: TestReport | null;
  
  // Utility functions
  getTestQuestions: () => Question[];
  getTestAnswers: () => Answer[];
  updateAnswer: (answer: Answer) => void;
  processResults: () => void;
  hasCompletedAllTests: () => boolean;
  resetTests: () => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  // User data
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // Current test
  const [currentTest, setCurrentTest] = useState<"personality" | "mentalHealth" | "career" | null>(null);
  
  // Answers
  const [personalityAnswers, setPersonalityAnswers] = useState<Answer[]>([]);
  const [mentalHealthAnswers, setMentalHealthAnswers] = useState<Answer[]>([]);
  const [careerAnswers, setCareerAnswers] = useState<Answer[]>([]);
  
  // Results
  const [personalityResults, setPersonalityResults] = useState<TestResult[]>([]);
  const [mentalHealthResults, setMentalHealthResults] = useState<TestResult[]>([]);
  const [careerRecommendations, setCareerRecommendations] = useState<CareerRecommendation[]>([]);
  
  // Report
  const [testReport, setTestReport] = useState<TestReport | null>(null);
  
  // Get questions for current test
  const getTestQuestions = (): Question[] => {
    switch (currentTest) {
      case "personality":
        return personalityQuestions;
      case "mentalHealth":
        return mentalHealthQuestions;
      case "career":
        return careerQuestions;
      default:
        return [];
    }
  };
  
  // Get answers for current test
  const getTestAnswers = (): Answer[] => {
    switch (currentTest) {
      case "personality":
        return personalityAnswers;
      case "mentalHealth":
        return mentalHealthAnswers;
      case "career":
        return careerAnswers;
      default:
        return [];
    }
  };
  
  // Update answer for current test
  const updateAnswer = (answer: Answer) => {
    switch (currentTest) {
      case "personality":
        setPersonalityAnswers(prev => {
          const updatedAnswers = [...prev];
          const index = updatedAnswers.findIndex(a => a.questionId === answer.questionId);
          if (index >= 0) {
            updatedAnswers[index] = answer;
          } else {
            updatedAnswers.push(answer);
          }
          return updatedAnswers;
        });
        break;
      case "mentalHealth":
        setMentalHealthAnswers(prev => {
          const updatedAnswers = [...prev];
          const index = updatedAnswers.findIndex(a => a.questionId === answer.questionId);
          if (index >= 0) {
            updatedAnswers[index] = answer;
          } else {
            updatedAnswers.push(answer);
          }
          return updatedAnswers;
        });
        break;
      case "career":
        setCareerAnswers(prev => {
          const updatedAnswers = [...prev];
          const index = updatedAnswers.findIndex(a => a.questionId === answer.questionId);
          if (index >= 0) {
            updatedAnswers[index] = answer;
          } else {
            updatedAnswers.push(answer);
          }
          return updatedAnswers;
        });
        break;
    }
  };
  
  // Process all results
  const processResults = () => {
    // Process personality results
    const personalityCategories = [...new Set(personalityAnswers.map(a => a.category))];
    const personalityResultsTemp: TestResult[] = [];
    
    for (const category of personalityCategories) {
      const categoryAnswers = personalityAnswers.filter(a => a.category === category);
      const categoryScore = Math.round(categoryAnswers.reduce((sum, answer) => sum + answer.value, 0) / categoryAnswers.length);
      
      const result = getPersonalityInterpretation(category, categoryScore);
      personalityResultsTemp.push(result);
    }
    
    setPersonalityResults(personalityResultsTemp);
    
    // Process mental health results
    const mentalHealthCategories = [...new Set(mentalHealthAnswers.map(a => a.category))];
    const mentalHealthResultsTemp: TestResult[] = [];
    
    for (const category of mentalHealthCategories) {
      const categoryAnswers = mentalHealthAnswers.filter(a => a.category === category);
      const categoryScore = categoryAnswers.reduce((sum, answer) => sum + answer.value, 0);
      
      const result = getMentalHealthInterpretation(category, categoryScore);
      mentalHealthResultsTemp.push(result);
    }
    
    setMentalHealthResults(mentalHealthResultsTemp);
    
    // Process career results
    const careerCategories = [...new Set(careerAnswers.map(a => a.category))];
    const careerScores: Record<string, number> = {};
    
    for (const category of careerCategories) {
      const categoryAnswers = careerAnswers.filter(a => a.category === category);
      const categoryScore = Math.round(
        categoryAnswers.reduce((sum, answer) => sum + answer.value, 0) / 
        (categoryAnswers.length * 5) * 10
      );
      
      careerScores[category] = categoryScore;
    }
    
    // Get career recommendations
    const recommendations = getCareerRecommendations(personalityResultsTemp, careerScores);
    setCareerRecommendations(recommendations);
    
    // Generate overall summary and test report
    if (userProfile) {
      const summary = generateOverallSummary(
        personalityResultsTemp,
        mentalHealthResultsTemp,
        recommendations
      );
      
      const report: TestReport = {
        user: userProfile,
        completedAt: new Date(),
        personalityResults: personalityResultsTemp,
        mentalHealthResults: mentalHealthResultsTemp,
        careerRecommendations: recommendations,
        overallSummary: summary
      };
      
      setTestReport(report);
    }
  };
  
  // Check if all tests are completed
  const hasCompletedAllTests = (): boolean => {
    return (
      personalityAnswers.length === personalityQuestions.length &&
      mentalHealthAnswers.length === mentalHealthQuestions.length &&
      careerAnswers.length === careerQuestions.length
    );
  };
  
  // Reset all tests
  const resetTests = () => {
    setPersonalityAnswers([]);
    setMentalHealthAnswers([]);
    setCareerAnswers([]);
    setPersonalityResults([]);
    setMentalHealthResults([]);
    setCareerRecommendations([]);
    setTestReport(null);
    setCurrentTest(null);
  };
  
  return (
    <TestContext.Provider
      value={{
        userProfile,
        setUserProfile,
        currentTest,
        setCurrentTest,
        personalityAnswers,
        setPersonalityAnswers,
        mentalHealthAnswers,
        setMentalHealthAnswers,
        careerAnswers,
        setCareerAnswers,
        personalityResults,
        mentalHealthResults,
        careerRecommendations,
        testReport,
        getTestQuestions,
        getTestAnswers,
        updateAnswer,
        processResults,
        hasCompletedAllTests,
        resetTests,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  return context;
};
