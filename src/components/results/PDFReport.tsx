import { useRef, useState } from "react";
import { TestReport, TestResult, CareerRecommendation } from "@/types";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { usePdfReport } from "@/hooks/usePdfReport";

interface PDFReportProps {
  report: TestReport;
}

const PDFReport = ({ report }: PDFReportProps) => {
  const summaryRef = useRef<HTMLDivElement>(null);
  const personalityRef = useRef<HTMLDivElement>(null);
  const mentalRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLDivElement>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const { generatePdf } = usePdfReport();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const renderResultSection = (
    title: string,
    results: TestResult[],
    testType: "personality" | "mental"
  ) => (
    <div className="mb-8" ref={testType === "personality" ? personalityRef : mentalRef}>
      <h3 className="text-xl font-bold mb-4 text-purple-800 pb-2 border-b border-purple-200">
        {title}
      </h3>
      <div className="space-y-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <h4 className="text-lg font-semibold mb-2 capitalize">
              {result.category}
            </h4>
            <p className="mb-4 text-gray-700">{result.interpretation}</p>
            <div>
              <h5 className="font-medium text-sm text-purple-700 mb-1">
                Recommendations:
              </h5>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCareerSection = (careers: CareerRecommendation[]) => (
    <div className="mb-8" ref={careersRef}>
      <h3 className="text-xl font-bold mb-4 text-purple-800 pb-2 border-b border-purple-200">
        Career Recommendations
      </h3>
      <div className="space-y-6">
        {careers.map((career, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">{career.career}</h4>
              <span className="text-purple-700 font-medium">
                {career.matchScore}% Match
              </span>
            </div>
            <p className="mb-3 text-gray-700">{career.description}</p>
            <div className="mb-3">
              <h5 className="font-medium text-sm text-purple-700 mb-1">
                Required Skills:
              </h5>
              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-medium text-sm text-purple-700 mb-1">
                Growth Potential:
              </h5>
              <p className="text-sm text-gray-600">{career.growthPotential}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const handleDownload = async () => {
    await generatePdf(
      report,
      [
        summaryRef,
        personalityRef,
        mentalRef,
        careersRef,
        disclaimerRef
      ],
      () => setIsGenerating(true),
      () => setIsGenerating(false)
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <Button
          onClick={handleDownload}
          disabled={isGenerating}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2"
        >
          {isGenerating ? (
            <>Generating PDF...</>
          ) : (
            <>
              <Download className="h-5 w-5" />
              Download PDF Report
            </>
          )}
        </Button>
      </div>
      <div
        ref={summaryRef}
        className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto mb-8"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-4 rounded-lg mb-6">
            <h1 className="text-3xl font-bold mb-2">Soul Compass Report</h1>
            <p>Personalized Assessment Results</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {report.user.name}
              </p>
              {report.user.age && (
                <p className="text-gray-600">
                  <span className="font-semibold">Age:</span> {report.user.age}
                </p>
              )}
              {report.user.gender && (
                <p className="text-gray-600">
                  <span className="font-semibold">Gender:</span> {report.user.gender}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-gray-600">
                <span className="font-semibold">Report Date:</span>{" "}
                {formatDate(report.completedAt)}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Report ID:</span> SC-
                {Math.random().toString(36).substring(2, 9).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-900">
            Executive Summary
          </h2>
          <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed">{report.overallSummary}</p>
          </div>
        </div>
      </div>
      {renderResultSection("Personality Assessment", report.personalityResults, "personality")}
      {renderResultSection("Mental Health Insights", report.mentalHealthResults, "mental")}
      {renderCareerSection(report.careerRecommendations)}
      <div ref={disclaimerRef} className="mt-12 pt-4 border-t border-gray-200 text-sm text-gray-500 max-w-4xl mx-auto">
        <h3 className="font-semibold mb-2">Disclaimer:</h3>
        <p>
          This report is generated based on self-reported data and is intended for
          informational purposes only. It is not a clinical assessment and should not
          be used as a substitute for professional advice, diagnosis, or treatment.
          Always consult with qualified healthcare or career professionals before
          making any major decisions based on this report.
        </p>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Soul Compass. All rights reserved.</p>
          <p>Generated on {formatDate(new Date())}</p>
        </div>
      </div>
    </div>
  );
};

export default PDFReport;
