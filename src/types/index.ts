
// Test types
export interface Question {
  id: number;
  text: string;
  options: Option[];
  category: string;
}

export interface Option {
  id: number;
  text: string;
  value: number;
}

export interface Answer {
  questionId: number;
  selectedOptionId: number;
  value: number;
  category: string;
}

export interface TestResult {
  category: string;
  score: number;
  interpretation: string;
  recommendations: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  age?: number;
  gender?: string;
}

export interface TestReport {
  user: UserProfile;
  completedAt: Date;
  personalityResults: TestResult[];
  mentalHealthResults: TestResult[];
  careerRecommendations: CareerRecommendation[];
  overallSummary: string;
}

export interface CareerRecommendation {
  career: string;
  matchScore: number;
  description: string;
  requiredSkills: string[];
  growthPotential: string;
}
