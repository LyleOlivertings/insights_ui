
// Removed useQuery and fetchInsightsData as data is now passed via props
import { Insights } from '@/types/api'; // Updated to use the new Insights type

interface InsightsPanelProps {
  jobTitle?: string; // Make jobTitle optional as it's part of insights
  insights?: Insights; // Data is now passed as 'insights' prop
  // isLoading and isError can also be passed as props if needed for consistency
  // For now, Index.tsx handles the top-level loading/error for the whole analysis.
}

export const InsightsPanel = ({ jobTitle, insights }: InsightsPanelProps) => {
  // Loading and error states are now handled by the parent component (Index.tsx)

  if (!insights) {
    // This will be shown if Index.tsx passes no insights (e.g. initial state, or error in parent)
    // Index.tsx already shows "Loading Insights..." or "Error loading Insights."
    // So this specific message might only appear if insights is explicitly undefined but parent isn't loading/erroring.
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Insights</h2>
        <p className="text-gray-400">No insights data available for {jobTitle || "the selected skill"}.</p>
      </div>
    );
  }
  
  // Helper to format numbers to 2 decimal places
  const formatNum = (num: number | undefined) => num?.toFixed(2) ?? 'N/A';
  // Helper to determine text color based on value (positive/negative)
  const getValueColor = (value: number | undefined) => {
    if (value === undefined) return 'text-white';
    return value >= 0 ? 'text-green-400' : 'text-red-400';
  };


  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Insights for {jobTitle}</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Key Metrics:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Trend Status (5Y):</span>
              <span className={getValueColor(insights.trend_status_5y === "Trending Up" ? 1 : insights.trend_status_5y === "Trending Down" ? -1 : 0)}>
                {insights.trend_status_5y ?? 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Trend (5Y):</span>
              <span className="text-white">{formatNum(insights.average_trend_5y)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Trend (3M):</span>
              <span className="text-white">{formatNum(insights.average_trend_3m)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Growth Rate (5Y):</span>
              <span className={getValueColor(insights.growth_rate_5y)}>
                {formatNum(insights.growth_rate_5y)}%
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Growth Rate (3M):</span>
              <span className={getValueColor(insights.growth_rate_3m)}>
                {formatNum(insights.growth_rate_3m)}%
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Peak Value:</span>
              <span className="text-white">{formatNum(insights.peak_value)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Low Value:</span>
              <span className="text-white">{formatNum(insights.low_value)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Trend Variability (5Y):</span>
              <span className="text-white">{formatNum(insights.trend_variability_5y)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
