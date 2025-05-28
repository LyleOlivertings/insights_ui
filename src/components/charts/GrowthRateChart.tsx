
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface GrowthRateChartProps {
  jobTitle: string;
}

export const GrowthRateChart = ({ jobTitle }: GrowthRateChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', growthRate: 5 },
    { date: 'Jan 3', growthRate: 2 },
    { date: 'Jan 5', growthRate: -1 },
    { date: 'Jan 7', growthRate: 3 },
    { date: 'Jan 9', growthRate: 6 },
    { date: 'Jan 11', growthRate: 4 },
    { date: 'Jan 13', growthRate: 1 },
    { date: 'Jan 15', growthRate: -2 },
    { date: 'Jan 17', growthRate: 7 },
    { date: 'Jan 19', growthRate: 3 },
    { date: 'Jan 21', growthRate: 22 },
    { date: 'Jan 23', growthRate: 8 },
    { date: 'Jan 25', growthRate: -3 },
    { date: 'Jan 27', growthRate: 5 },
    { date: 'Jan 29', growthRate: 4 },
    { date: 'Jan 31', growthRate: 1 },
    { date: 'Feb 2', growthRate: -1 },
    { date: 'Feb 4', growthRate: 2 },
    { date: 'Feb 6', growthRate: 8 },
    { date: 'Feb 8', growthRate: 3 },
    { date: 'Feb 10', growthRate: -5 },
    { date: 'Feb 12', growthRate: 2 },
    { date: 'Feb 14', growthRate: 1 },
    { date: 'Feb 16', growthRate: -2 },
    { date: 'Feb 18', growthRate: 3 },
    { date: 'Feb 20', growthRate: 10 },
    { date: 'Feb 22', growthRate: 1 },
    { date: 'Feb 24', growthRate: -1 },
    { date: 'Feb 26', growthRate: 2 },
    { date: 'Feb 28', growthRate: -3 },
    { date: 'Mar 2', growthRate: 6 },
    { date: 'Mar 4', growthRate: 2 },
    { date: 'Mar 6', growthRate: -2 },
    { date: 'Mar 8', growthRate: 1 },
    { date: 'Mar 10', growthRate: 4 },
    { date: 'Mar 12', growthRate: -1 },
    { date: 'Mar 14', growthRate: 2 },
    { date: 'Mar 16', growthRate: 3 },
    { date: 'Mar 18', growthRate: -4 },
    { date: 'Mar 20', growthRate: 6 },
    { date: 'Mar 22', growthRate: 1 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-red-400" />
        <h3 className="text-lg font-semibold">Daily Growth Rate of Interest</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Growth Rate of Interest in {jobTitle}
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
              domain={[-10, 25]}
              label={{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
            />
            <ReferenceLine y={0} stroke="#6B7280" strokeDasharray="2 2" />
            <Line 
              type="monotone" 
              dataKey="growthRate" 
              stroke="#EF4444" 
              strokeWidth={2}
              dot={{ fill: '#EF4444', r: 2 }}
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
