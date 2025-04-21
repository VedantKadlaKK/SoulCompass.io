
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TestResult } from "@/types";

interface ResultsChartProps {
  results: TestResult[];
  title: string;
  colorScheme?: string[];
}

const ResultsChart = ({ 
  results, 
  title,
  colorScheme = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe"]
}: ResultsChartProps) => {
  // Prepare data for chart
  const data = results.map((result) => ({
    name: result.category.charAt(0).toUpperCase() + result.category.slice(1),
    value: result.score,
    fullResult: result,
  }));

  // Ensure we have enough colors
  while (colorScheme.length < data.length) {
    colorScheme = [...colorScheme, ...colorScheme];
  }

  return (
    <div className="w-full h-[300px] flex flex-col">
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `Score: ${value}`,
              props.payload.fullResult.category.charAt(0).toUpperCase() + props.payload.fullResult.category.slice(1),
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
