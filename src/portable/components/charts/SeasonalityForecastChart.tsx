
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { ForecastResponse } from '../../../types/api'; // Import the new data type

interface SeasonalityForecastChartProps {
  data?: ForecastResponse; // Data is now ForecastResponse and optional
  jobTitle: string; 
}

export const SeasonalityForecastChart = ({ data, jobTitle }: SeasonalityForecastChartProps) => {
  const chartData = useMemo(() => {
    if (!data?.dates || !data?.values) return [];
    return data.dates.map((date, index) => ({
      date: new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      forecastValue: data.values[index], // Renamed from forecast_interest
    }));
  }, [data]);

  if (!data || chartData.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 h-96 flex items-center justify-center">
        <p className="text-gray-400">No forecast data available for {jobTitle}.</p>
      </div>
    );
  }
  
  const yDomain = useMemo(() => {
    if (chartData.length === 0) return [0, 100];
    const values = chartData.map(item => item.forecastValue).filter(v => v !== null) as number[];
    if (values.length === 0) return [0, 100];
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    return [Math.floor(minVal * 0.95), Math.ceil(maxVal * 1.05)];
  }, [chartData]);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-cyan-400" />
        <h3 className="text-lg font-semibold">Seasonality Trend with Forecast</h3>
      </div>
      
      <h4 className="text-md mb-4 text-gray-300">
        Seasonality Trend with Forecast ({jobTitle})
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
              label={{ value: 'Interest', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
              allowDataOverflow={false}
            />
            <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#9CA3AF' }}
                labelStyle={{ color: '#FFFFFF', fontWeight: 'bold' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="forecastValue" // Updated dataKey
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Forecast" // Updated name
              dot={{ fill: '#06B6D4', r: 3 }}
              strokeDasharray="5 5" 
              connectNulls // Handle potential nulls
            />
            {/* The original component had a line for moving_average from ForecastDataPoint. 
                The new ForecastResponse type doesn't have a separate moving_average field.
                If MA needs to be displayed here, it would come from a different prop or the API response needs to include it.
                For now, removing the MA line from this specific chart as per current ForecastResponse type.
            */}
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-400">Date</span>
      </div>
    </div>
  );
};
