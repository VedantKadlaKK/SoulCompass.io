
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useTestContext } from "@/context/TestContext";
import ResultsChart from "@/components/results/ResultsChart";
import ResultCard from "@/components/results/ResultCard";
import CareerMatch from "@/components/results/CareerMatch";
import PDFReport from "@/components/results/PDFReport";
import { Button } from "@/components/ui/button";
import { HomeIcon, RotateCcw } from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const {
    userProfile,
    personalityAnswers,
    mentalHealthAnswers,
    careerAnswers,
    personalityResults,
    mentalHealthResults,
    careerRecommendations,
    testReport,
    processResults,
    resetTests,
  } = useTestContext();
  
  // Process results if needed
  useEffect(() => {
    if (
      userProfile &&
      personalityAnswers.length > 0 &&
      mentalHealthAnswers.length > 0 &&
      careerAnswers.length > 0 &&
      personalityResults.length === 0
    ) {
      processResults();
    }
    
    // Redirect if no user profile or answers
    if (!userProfile || personalityAnswers.length === 0) {
      navigate("/tests");
    }
  }, [
    userProfile,
    personalityAnswers,
    mentalHealthAnswers,
    careerAnswers,
    personalityResults,
    processResults,
    navigate,
  ]);
  
  // Handle start over
  const handleStartOver = () => {
    resetTests();
    navigate("/tests");
  };
  
  // Category labels for display
  const personalityLabels: { [key: string]: string } = {
    extraversion: "Extraversion",
    openness: "Openness to Experience",
    agreeableness: "Agreeableness",
    conscientiousness: "Conscientiousness",
    neuroticism: "Emotional Sensitivity",
  };
  
  const mentalHealthLabels: { [key: string]: string } = {
    depression: "Depression Indicators",
    anxiety: "Anxiety Indicators",
    attention: "Attention Difficulties",
    mood: "Mood Regulation",
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {testReport ? (
          <>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
                Your Soul Compass Report
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your responses, we've generated comprehensive insights into your personality, well-being, and career alignment.
              </p>
            </div>
            
            {/* Overall Summary */}
            <section className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Executive Summary</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {testReport.overallSummary}
              </p>
            </section>
            
            {/* Personality Results */}
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-purple-800 dark:text-purple-300">
                Personality Profile
              </h2>
              
              <div className="mb-10">
                <ResultsChart 
                  results={personalityResults} 
                  title="Your Personality Traits"
                  colorScheme={["#8B5CF6", "#A78BFA", "#C4B5FD", "#7C3AED", "#6D28D9"]}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalityResults.map((result) => (
                  <ResultCard 
                    key={result.category}
                    result={result}
                    maxScore={10}
                    categoryLabel={personalityLabels[result.category]}
                  />
                ))}
              </div>
            </section>
            
            {/* Mental Health Results */}
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-purple-800 dark:text-purple-300">
                Mental Well-being Insights
              </h2>
              
              <div className="mb-10">
                <ResultsChart 
                  results={mentalHealthResults} 
                  title="Your Well-being Indicators"
                  colorScheme={["#EC4899", "#F472B6", "#FBCFE8", "#DB2777", "#BE185D"]}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentalHealthResults.map((result) => (
                  <ResultCard 
                    key={result.category}
                    result={result}
                    maxScore={result.category === "mood" ? 4 : result.category === "attention" ? 12 : 9}
                    categoryLabel={mentalHealthLabels[result.category]}
                  />
                ))}
              </div>
              
              <div className="mt-8 p-4 border-l-4 border-yellow-400 bg-yellow-50 text-yellow-800 rounded">
                <p className="font-medium">Important Note:</p>
                <p className="text-sm">
                  These insights are not diagnostic and should not replace professional advice. 
                  If you're experiencing significant distress, please consult a healthcare professional.
                </p>
              </div>
            </section>
            
            {/* Career Recommendations */}
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-purple-800 dark:text-purple-300">
                Career Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {careerRecommendations.map((career, index) => (
                  <CareerMatch 
                    key={career.career}
                    career={career}
                    rank={index + 1}
                  />
                ))}
              </div>
            </section>
            
            {/* PDF Report */}
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-purple-800 dark:text-purple-300">
                Download Your Complete Report
              </h2>
              
              <PDFReport report={testReport} />
            </section>
            
            {/* Action Buttons */}
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={handleStartOver}
                variant="outline"
                className="flex items-center justify-center gap-2 border-purple-300 text-purple-700"
              >
                <RotateCcw className="h-4 w-4" />
                Start New Assessment
              </Button>
              <Button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <HomeIcon className="h-4 w-4" />
                Return to Home
              </Button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Results;
