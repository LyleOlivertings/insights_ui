
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface TrendChartProps {
  jobTitle: string;
}

export const TrendChart = ({ jobTitle }: TrendChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', trend: 65, movingAverage: 67 },
    { date: 'Jan 15', trend: 68, movingAverage: 68 },
    { date: 'Feb 1', trend: 70, movingAverage: 69 },
    { date: 'Feb 15', trend: 73, movingAverage: 70 },
    { date: 'Mar 1', trend: 75, movingAverage: 72 },
    { date: 'Mar 15', trend: 78, movingAverage: 75 },
    { date: 'Apr 1', trend: 85, movingAverage: 77 },
    { date: 'Apr 15', trend: 88, movingAverage: 80 },
    { date: 'May 1', trend: 90, movingAverage: 83 },
    { date: 'May 15', trend: 87, movingAverage: 87 },
    { date: 'Jun 1', trend: 85, movingAverage: 87 },
    { date: 'Jun 15', trend: 80, movingAverage: 85 },
    { date: 'Jul 1', trend: 75, movingAverage: 80 },
    { date: 'Jul 15', trend: 70, movingAverage: 75 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Daily Trend with Moving Average</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Trend Over Time with Moving Average ({jobTitle})
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
              domain={[60, 100]}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="trend" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Daily Trend"
              dot={{ fill: '#3B82F6', r: 3 }}
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
    </div>
  );
};
