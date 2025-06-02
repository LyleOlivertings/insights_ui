
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { TimeseriesData } from '../../../types/api'; // Import new type

interface GrowthRateChartProps {
  data?: TimeseriesData; // Data is now TimeseriesData and optional
  jobTitle: string; 
}

export const GrowthRateChart = ({ data, jobTitle }: GrowthRateChartProps) => {
  const chartData = useMemo(() => {
    if (!data?.dates || !data?.values) return [];
    return data.dates.map((date, index) => ({
      date: new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      value: data.values[index], // 'growth_rate' is now 'value'
    }));
  }, [data]);

  if (!data || chartData.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400">No growth rate data available for {jobTitle}.</p>
      </div>
    );
  }
  
  const yDomain = useMemo(() => {
    if (chartData.length === 0) return [-5, 5]; // Default for growth rates (e.g. -5% to 5%)
    const values = chartData.map(item => item.value).filter(v => v !== null) as number[];
    if (values.length === 0) return [-5, 5];
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    // Determine padding, ensure 0 is visible if values cross it
    const absMax = Math.max(Math.abs(minVal), Math.abs(maxVal));
    return [Math.floor(Math.min(0, minVal) - absMax * 0.1), Math.ceil(Math.max(0, maxVal) + absMax * 0.1)];
  }, [chartData]);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-red-400" />
        <h3 className="text-lg font-semibold">Growth Rate of Interest</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Growth Rate of Interest in {jobTitle}
      </h4>
      
      <div className="h-64"> {/* Ensure this has a defined height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" // Changed from 'period' to 'date'
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              domain={yDomain}
              label={{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
              allowDataOverflow={false}
              tickFormatter={(value) => `${value.toFixed(1)}%`} // Format Y-axis ticks as percentages
            />
            <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#9CA3AF' }}
                labelStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
                formatter={(value: number) => `${value.toFixed(2)}%`} // Format tooltip value as percentage
            />
            <ReferenceLine y={0} stroke="#6B7280" strokeDasharray="2 2" />
            <Line 
              type="monotone" 
              dataKey="value" // Changed from 'growth_rate' to 'value'
              stroke="#EF4444" 
              strokeWidth={2}
              dot={{ fill: '#EF4444', r: 2 }}
              name="Growth Rate"
              connectNulls // Handle potential nulls
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
