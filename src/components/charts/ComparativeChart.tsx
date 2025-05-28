
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { BarChart3 } from 'lucide-react';

interface ComparativeChartProps {
  compareJobs: string;
}

export const ComparativeChart = ({ compareJobs }: ComparativeChartProps) => {
  // Mock daily data - will be replaced with API data
  const data = [
    { date: 'Jan 1', dataScience: 55, machineLearning: 32 },
    { date: 'Jan 5', dataScience: 58, machineLearning: 35 },
    { date: 'Jan 10', dataScience: 62, machineLearning: 38 },
    { date: 'Jan 15', dataScience: 65, machineLearning: 42 },
    { date: 'Jan 20', dataScience: 68, machineLearning: 45 },
    { date: 'Jan 25', dataScience: 72, machineLearning: 48 },
    { date: 'Jan 30', dataScience: 75, machineLearning: 52 },
    { date: 'Feb 5', dataScience: 78, machineLearning: 55 },
    { date: 'Feb 10', dataScience: 82, machineLearning: 58 },
    { date: 'Feb 15', dataScience: 85, machineLearning: 62 },
    { date: 'Feb 20', dataScience: 88, machineLearning: 65 },
    { date: 'Feb 25', dataScience: 92, machineLearning: 68 },
    { date: 'Mar 1', dataScience: 95, machineLearning: 72 },
    { date: 'Mar 5', dataScience: 98, machineLearning: 75 },
    { date: 'Mar 10', dataScience: 85, machineLearning: 78 },
    { date: 'Mar 15', dataScience: 88, machineLearning: 82 },
    { date: 'Mar 20', dataScience: 85, machineLearning: 85 },
    { date: 'Mar 25', dataScience: 82, machineLearning: 88 },
    { date: 'Mar 30', dataScience: 78, machineLearning: 92 },
    { date: 'Apr 5', dataScience: 75, machineLearning: 95 },
    { date: 'Apr 10', dataScience: 72, machineLearning: 98 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-5 w-5 text-green-400" />
        <h3 className="text-lg font-semibold">Daily Comparative Trends for Jobs/Skills</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Daily Comparative Trends for {compareJobs}
      </h4>
      
      <div className="h-80">
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
              domain={[30, 100]}
              label={{ value: 'Interest', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="dataScience" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Data Science"
              dot={{ fill: '#3B82F6', r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="machineLearning" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Machine Learning Engineer"
              dot={{ fill: '#EF4444', r: 3 }}
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
