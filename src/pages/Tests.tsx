
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import UserInfoForm from "@/components/tests/UserInfoForm";
import { useTestContext } from "@/context/TestContext";
import { UserProfile } from "@/types";
import { Button } from "@/components/ui/button";

const Tests = () => {
  const navigate = useNavigate();
  const { setUserProfile, userProfile, resetTests } = useTestContext();
  const [showWelcome, setShowWelcome] = useState(true);

  const handleUserSubmit = (data: UserProfile) => {
    setUserProfile(data);
    navigate("/test/personality");
  };

  const handleReset = () => {
    resetTests();
    setShowWelcome(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {showWelcome && !userProfile ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
                Begin Your Self-Discovery Journey
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete our comprehensive assessments to gain insights into your personality, mental well-being, and ideal career paths.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-bold mb-4 text-purple-800">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
                      <span className="text-purple-700 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personality Assessment (5-7 minutes)</h3>
                      <p className="text-gray-600">Discover your Big Five personality traits: Extraversion, Openness, Agreeableness, Conscientiousness, and Neuroticism.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="text-indigo-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Mental Health Screening (5-7 minutes)</h3>
                      <p className="text-gray-600">Gain insights into your emotional well-being and identify potential areas that may benefit from attention.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-700 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Career Interests (5-7 minutes)</h3>
                      <p className="text-gray-600">Explore your work preferences and receive tailored career recommendations that match your unique profile.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-10">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Privacy Note</h2>
                <p className="text-gray-700">
                  Your responses are private and will only be used to generate your personalized report. 
                  We do not store your data on our servers. All processing happens in your browser.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg">
                <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-lg">
                  <h2 className="text-2xl font-bold text-white">Let's Start</h2>
                  <p className="text-purple-100">Please provide some basic information about yourself.</p>
                </div>
                <div className="p-6">
                  <UserInfoForm onSubmit={handleUserSubmit} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-800">Welcome Back!</h1>
            <p className="text-gray-600 mb-8">
              You have an assessment in progress. Would you like to continue where you left off or start a new assessment?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => navigate("/test/personality")}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Continue Assessment
              </Button>
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Start New Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tests;
