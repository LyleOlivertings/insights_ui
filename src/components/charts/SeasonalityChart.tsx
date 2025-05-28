
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';

interface SeasonalityChartProps {
  jobTitle: string;
}

export const SeasonalityChart = ({ jobTitle }: SeasonalityChartProps) => {
  // Mock data - will be replaced with API data
  const data = [
    { month: '1', interest: 75 },
    { month: '2', interest: 78 },
    { month: '3', interest: 82 },
    { month: '4', interest: 80 },
    { month: '5', interest: 85 },
    { month: '6', interest: 88 },
    { month: '7', interest: 90 },
    { month: '8', interest: 85 },
    { month: '9', interest: 87 },
    { month: '10', interest: 83 },
    { month: '11', interest: 78 },
    { month: '12', interest: 75 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Seasonality Index</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Seasonality Index ({jobTitle})
      </h4>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              domain={[0, 100]}
              label={{ value: 'Average Interest', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
            />
            <Bar 
              dataKey="interest" 
              fill="#6366F1"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-400">Month</span>
      </div>
    </div>
  );
};
