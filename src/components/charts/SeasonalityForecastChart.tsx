
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface SeasonalityForecastChartProps {
  jobTitle: string;
}

export const SeasonalityForecastChart = ({ jobTitle }: SeasonalityForecastChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', historical: 25, forecast: null },
    { date: 'Jan 15', historical: 35, forecast: null },
    { date: 'Feb 1', historical: 45, forecast: null },
    { date: 'Feb 15', historical: 55, forecast: null },
    { date: 'Mar 1', historical: 65, forecast: null },
    { date: 'Mar 15', historical: 75, forecast: null },
    { date: 'Apr 1', historical: 85, forecast: null },
    { date: 'Apr 15', historical: 95, forecast: null },
    { date: 'May 1', historical: 90, forecast: null },
    { date: 'May 15', historical: null, forecast: 92 },
    { date: 'Jun 1', historical: null, forecast: 94 },
    { date: 'Jun 15', historical: null, forecast: 96 },
    { date: 'Jul 1', historical: null, forecast: 95 },
    { date: 'Jul 15', historical: null, forecast: 93 },
    { date: 'Aug 1', historical: null, forecast: 91 },
    { date: 'Aug 15', historical: null, forecast: 89 },
    { date: 'Sep 1', historical: null, forecast: 87 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-cyan-400" />
        <h3 className="text-lg font-semibold">Daily Seasonality Trend with Forecast</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Seasonality Trend with 4-Month Forecast ({jobTitle})
      </h4>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              domain={[20, 100]}
              label={{ value: 'Interest', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="historical" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Historical Trend"
              dot={{ fill: '#3B82F6', r: 3 }}
              connectNulls={false}
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="4-Month Forecast"
              dot={{ fill: '#06B6D4', r: 3 }}
              strokeDasharray="5 5"
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-400">Date</span>
      </div>
    </div>
  );
};
