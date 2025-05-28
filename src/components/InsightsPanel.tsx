
interface InsightsPanelProps {
  jobTitle: string;
}

export const InsightsPanel = ({ jobTitle }: InsightsPanelProps) => {
  // Mock data - will be replaced with API data
  const insights = {
    trendStatus: "Trending Up",
    trendYears: 5,
    averageTrend5Years: 76.48,
    averageTrend3Months: 68.31,
    growthRate5Years: 3.12,
    growthRate3Months: -4.35,
    peakValue: 100,
    lowValue: 59,
    trendVariability: 9.6
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Insights</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Insights:</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Trend Status ({insights.trendYears} Years):</span>
              <span className="text-green-400 font-medium">{insights.trendStatus}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Average Trend ({insights.trendYears} Years):</span>
              <span className="text-white">{insights.averageTrend5Years}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Average Trend (3 Months):</span>
              <span className="text-white">{insights.averageTrend3Months}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Growth Rate ({insights.trendYears} Years) (%):</span>
              <span className="text-green-400">{insights.growthRate5Years}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Growth Rate (3 Months) (%):</span>
              <span className="text-red-400">{insights.growthRate3Months}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Peak Value:</span>
              <span className="text-white">{insights.peakValue}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Low Value:</span>
              <span className="text-white">{insights.lowValue}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Trend Variability ({insights.trendYears} Years):</span>
              <span className="text-white">{insights.trendVariability}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
