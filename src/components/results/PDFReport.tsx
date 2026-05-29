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
    }).format(new Date(date));
  };

  // SECTION CARD LAYOUT
  const SectionCard: React.FC<{ children: React.ReactNode; className?: string; refObj?: any }> = ({
    children,
    className,
    refObj,
  }) => (
    <div
      ref={refObj}
      className={`mb-10 rounded-2xl shadow-lg border border-purple-100 bg-gradient-to-br from-white via-purple-50 to-purple-100 px-8 py-7 ${className ?? ""}`}
    >
      {children}
    </div>
  );

  const renderResultSection = (
    title: string,
    results: TestResult[],
    emoji: string,
    refObj: any
  ) => (
    <SectionCard refObj={refObj}>
      <h3 className="flex items-center gap-2 text-2xl font-extrabold text-purple-900 mb-5">
        <span>{emoji}</span> {title}
      </h3>
      <div className="space-y-7">
        {results.map((result, idx) => (
          <div key={idx} className="rounded-xl bg-white/80 border border-purple-200 p-5 shadow">
            <div className="flex items-baseline justify-between mb-2">
              <h4 className="font-semibold capitalize text-purple-800 text-lg">{result.category}</h4>
              <span className="text-xs rounded-full bg-purple-200 text-purple-800 px-3 py-1">
                Score: {result.score !== undefined ? result.score : "--"}
              </span>
            </div>
            <p className="text-gray-700 italic mb-2">{result.interpretation}</p>
            <ul className="list-disc ml-6 text-sm text-purple-900 space-y-1">
              {result.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );

  const renderCareerSection = (careers: CareerRecommendation[]) => (
    <SectionCard refObj={careersRef} className="print:page-break-before">
      <h3 className="flex items-center gap-2 text-2xl font-extrabold text-indigo-900 mb-7">
        <span>🧑‍💼</span> Career Recommendations
      </h3>
      <div className="space-y-6">
        {careers.map((career, idx) => (
          <div key={idx} className="p-6 mb-2 rounded-xl shadow bg-white border border-indigo-100">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold text-lg text-indigo-700">{career.career}</h4>
              <span className="bg-purple-100 text-purple-800 font-bold px-4 py-1 rounded-full shadow">
                {career.matchScore}% Match
              </span>
            </div>
            <p className="text-gray-700 mb-3">{career.description}</p>
            <div className="mb-2">
              <span className="font-semibold text-purple-700 mr-2">Required Skills:</span>
              <span className="flex flex-wrap items-center gap-2 mt-1">
                {career.requiredSkills.map((skill, idx2) => (
                  <span key={idx2} className="bg-indigo-50 text-indigo-800 px-2 py-1 rounded-full text-xs">{skill}</span>
                ))}
              </span>
            </div>
            <div>
              <span className="font-semibold text-purple-700 mr-2">Growth Potential:</span>
              <span className="text-sm">{career.growthPotential}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );

  const handleDownload = async () => {
    await generatePdf(
      report,
      [summaryRef, personalityRef, mentalRef, careersRef, disclaimerRef],
      () => setIsGenerating(true),
      () => setIsGenerating(false)
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-purple-50 via-white to-indigo-50 pb-24">
      {/* Download Button */}
      <div className="flex justify-center mb-6 pt-6">
        <Button
          onClick={handleDownload}
          disabled={isGenerating}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg"
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

      {/* Executive Summary */}
      <SectionCard refObj={summaryRef}>
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-4 rounded-xl mb-6 shadow">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
              🧭 Soul Compass Report
            </h1>
            <p className="text-lg opacity-90">Personalized Assessment Results</p>
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
                <span className="font-semibold">Report Date:</span> {formatDate(report.completedAt)}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Report ID:</span> SC-
                {Math.random().toString(36).substring(2, 9).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-900">Executive Summary</h2>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-lg">{report.overallSummary}</p>
          </div>
        </section>
      </SectionCard>

      {/* Results */}
      {renderResultSection("Personality Assessment", report.personalityResults, "🌈", personalityRef)}
      {renderResultSection("Mental Health Insights", report.mentalHealthResults, "🧠", mentalRef)}
      {renderCareerSection(report.careerRecommendations)}

      {/* Disclaimer */}
      <SectionCard refObj={disclaimerRef} className="mt-12 pt-4 border-t-2 border-purple-100 bg-white/80 shadow-none">
        <h3 className="font-semibold mb-2 text-gray-700 text-lg">Disclaimer:</h3>
        <p className="text-gray-600 mb-4">
          This report is generated based on self-reported data and is intended for informational purposes only.
          It is not a clinical assessment and should not be used as a substitute for professional advice, diagnosis, or treatment.
          Always consult with qualified healthcare or career professionals before making any major decisions based on this report.
        </p>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Soul Compass. All rights reserved.</p>
          <p>Generated on {formatDate(new Date())}</p>
        </div>
      </SectionCard>
    </div>
  );
};

export default PDFReport;
