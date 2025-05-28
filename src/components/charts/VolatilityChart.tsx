
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

interface VolatilityChartProps {
  jobTitle: string;
}

export const VolatilityChart = ({ jobTitle }: VolatilityChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', volatility: 2.5 },
    { date: 'Jan 8', volatility: 1.8 },
    { date: 'Jan 15', volatility: 3.2 },
    { date: 'Jan 22', volatility: 2.1 },
    { date: 'Jan 29', volatility: 4.5 },
    { date: 'Feb 5', volatility: 13.8 },
    { date: 'Feb 12', volatility: 3.1 },
    { date: 'Feb 19', volatility: 2.8 },
    { date: 'Feb 26', volatility: 5.2 },
    { date: 'Mar 5', volatility: 7.1 },
    { date: 'Mar 12', volatility: 9.3 },
    { date: 'Mar 19', volatility: 6.8 },
    { date: 'Mar 26', volatility: 4.2 },
    { date: 'Apr 2', volatility: 3.5 },
    { date: 'Apr 9', volatility: 5.8 },
    { date: 'Apr 16', volatility: 12.4 },
    { date: 'Apr 23', volatility: 4.1 },
    { date: 'Apr 30', volatility: 3.8 },
    { date: 'May 7', volatility: 6.2 },
    { date: 'May 14', volatility: 5.5 },
    { date: 'May 21', volatility: 10.1 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold">Daily Volatility of Interest</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Volatility of Interest in {jobTitle}
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
              domain={[0, 16]}
              label={{ value: 'Volatility (Standard Deviation)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
            />
            <Line 
              type="monotone" 
              dataKey="volatility" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', r: 3 }}
              fill="#8B5CF6"
              fillOpacity={0.1}
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
