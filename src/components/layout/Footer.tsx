
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Soul Compass</h3>
            <p className="text-gray-300">
              Guiding you to better self-understanding and career fulfillment through science-based assessments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tests" className="text-gray-300 hover:text-white transition-colors">
                  Assessments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              The assessments provided are for informational purposes only and should not be considered as
              professional medical or psychological advice. Always consult with qualified professionals for
              personal health matters.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Soul Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
