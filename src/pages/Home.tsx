
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
              Discover Your True Potential
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Uncover your personality traits, understand your mental well-being, and find career paths that align with your authentic self.
            </p>
            <Button asChild className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              <Link to="/tests">
                <span>Start Your Journey</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="People discussing assessment results" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Soul Compass Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-300">Personality Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify your personality traits based on the Five Factor model. Understand your behaviors, preferences, and tendencies in different situations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-800 dark:text-indigo-300">Mental Health Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gain insights into your emotional well-being. Identify potential areas of concern and receive personalized recommendations for improvement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Career Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover career paths that match your personality and skills. Get detailed information about potential careers and their growth prospects.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 order-2 md:order-1">
              <ol className="relative space-y-8 pl-6 before:absolute before:left-0 before:h-full before:border-l-2 before:border-purple-300 before:content-['']">
                <li className="relative pl-8">
                  <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white -translate-x-3">1</span>
                  <h3 className="text-lg font-semibold mb-1">Complete the Assessments</h3>
                  <p className="text-gray-600">
                    Answer questions about your personality traits, emotional well-being, and career preferences. This takes about 15-20 minutes.
                  </p>
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white -translate-x-3">2</span>
                  <h3 className="text-lg font-semibold mb-1">Receive Your Analysis</h3>
                  <p className="text-gray-600">
                    Our algorithm analyzes your answers and generates personalized insights about your personality and mental well-being.
                  </p>
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white -translate-x-3">3</span>
                  <h3 className="text-lg font-semibold mb-1">Explore Career Matches</h3>
                  <p className="text-gray-600">
                    Discover careers that align with your personality, skills, and preferences, complete with match scores and growth potential.
                  </p>
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white -translate-x-3">4</span>
                  <h3 className="text-lg font-semibold mb-1">Download Your Report</h3>
                  <p className="text-gray-600">
                    Get a comprehensive PDF report containing all your results, insights, and recommendations to reference anytime.
                  </p>
                </li>
              </ol>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Assessment process" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Self-Discovery Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward understanding yourself better and finding your ideal career path.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-purple-700 hover:bg-gray-100">
            <Link to="/tests">Start Free Assessment</Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
