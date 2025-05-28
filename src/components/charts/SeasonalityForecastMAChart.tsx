
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface SeasonalityForecastMAChartProps {
  jobTitle: string;
}

export const SeasonalityForecastMAChart = ({ jobTitle }: SeasonalityForecastMAChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', historical: 25, forecast: null, movingAverage: 30 },
    { date: 'Jan 15', historical: 35, forecast: null, movingAverage: 32 },
    { date: 'Feb 1', historical: 45, forecast: null, movingAverage: 35 },
    { date: 'Feb 15', historical: 55, forecast: null, movingAverage: 40 },
    { date: 'Mar 1', historical: 65, forecast: null, movingAverage: 45 },
    { date: 'Mar 15', historical: 75, forecast: null, movingAverage: 55 },
    { date: 'Apr 1', historical: 85, forecast: null, movingAverage: 65 },
    { date: 'Apr 15', historical: 95, forecast: null, movingAverage: 75 },
    { date: 'May 1', historical: 90, forecast: null, movingAverage: 85 },
    { date: 'May 15', historical: null, forecast: 92, movingAverage: 88 },
    { date: 'Jun 1', historical: null, forecast: 94, movingAverage: 90 },
    { date: 'Jun 15', historical: null, forecast: 96, movingAverage: 92 },
    { date: 'Jul 1', historical: null, forecast: 95, movingAverage: 94 },
    { date: 'Jul 15', historical: null, forecast: 93, movingAverage: 95 },
    { date: 'Aug 1', historical: null, forecast: 91, movingAverage: 94 },
    { date: 'Aug 15', historical: null, forecast: 89, movingAverage: 93 },
    { date: 'Sep 1', historical: null, forecast: 87, movingAverage: 91 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-cyan-400" />
        <h3 className="text-lg font-semibold">Daily Seasonality Trend with Forecast and MA</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Seasonality Trend with 4-Month Forecast and 20-Day MA ({jobTitle})
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
            <Line 
              type="monotone" 
              dataKey="movingAverage" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="20-day MA"
              dot={{ fill: '#F59E0B', r: 3 }}
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
