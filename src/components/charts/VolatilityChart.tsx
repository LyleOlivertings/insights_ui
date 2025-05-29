
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Activity } from 'lucide-react';
import { TimeseriesData } from '../../types/api'; // Import new type

interface VolatilityChartProps {
  data?: TimeseriesData; // Data is now TimeseriesData and optional
  jobTitle: string; 
}

export const VolatilityChart = ({ data, jobTitle }: VolatilityChartProps) => {
  const chartData = useMemo(() => {
    if (!data?.dates || !data?.values) return [];
    return data.dates.map((date, index) => ({
      date: new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      value: data.values[index], // 'volatility_score' is now 'value'
    }));
  }, [data]);

  if (!data || chartData.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400">No volatility data available for {jobTitle}.</p>
      </div>
    );
  }
  
  const yDomain = useMemo(() => {
    if (chartData.length === 0) return [0, 1]; // Default for volatility scores (e.g. 0 to 1 or based on expected range)
    const values = chartData.map(item => item.value).filter(v => v !== null) as number[];
    if (values.length === 0) return [0, 1];
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    // Adjust padding based on typical volatility score range. If it can be negative, adjust minVal.
    return [Math.max(0, Math.floor(minVal * 0.9)), Math.ceil(maxVal * 1.1)]; 
  }, [chartData]);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold">Volatility of Interest</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Volatility of Interest in {jobTitle}
      </h4>
      
      <div className="h-64"> {/* Ensure this has a defined height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              domain={yDomain}
              label={{ value: 'Volatility Score', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
              allowDataOverflow={false}
            />
            <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '0.5px solid #374151', borderRadius: '0.1rem' }}
                itemStyle={{ color: '#9CA3AF' }}
                labelStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" // Updated dataKey
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', r: 3 }}
              name="Volatility"
              connectNulls // Handle potential nulls
              // fill and fillOpacity are typically for Area components, removed for Line
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
