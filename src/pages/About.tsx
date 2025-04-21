
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
          About Soul Compass
        </h1>

        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Soul Compass, we believe that self-awareness is the key to personal and professional fulfillment. Our mission is to provide accessible, science-based assessments that help individuals understand their unique personality traits, emotional patterns, and career aptitudes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining insights from personality psychology, mental health research, and career development, we aim to guide users toward paths that align with their authentic selves, leading to greater satisfaction and well-being.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soul Compass assessments are built on established psychological frameworks, including the Five Factor Model of personality, validated mental health screening approaches, and Holland's occupational themes. While our assessments are not diagnostic tools, they provide valuable insights that can inform personal growth and decision-making.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to privacy, accessibility, and continuous improvement. Our assessments are regularly reviewed and updated to reflect current research and best practices in psychological assessment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Important Disclaimer</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <p className="text-gray-700 leading-relaxed mb-2">
                Soul Compass assessments are designed for informational and educational purposes only. They are not intended to diagnose any mental health condition or replace professional advice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are experiencing significant distress or symptoms of mental health disorders, please consult with a qualified healthcare professional. For career decisions, we recommend consulting with career counselors or professionals in your field of interest.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We value your feedback and questions. If you have suggestions for improving Soul Compass or need assistance, please don't hesitate to reach out to us at:
            </p>
            <p className="text-purple-700 font-medium">support@soulcompass.example.com</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
