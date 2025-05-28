
import { useState } from "react";
import { TrendChart } from "@/components/charts/TrendChart";
import { SeasonalityChart } from "@/components/charts/SeasonalityChart";
import { SeasonalityForecastChart } from "@/components/charts/SeasonalityForecastChart";
import { SeasonalityForecastMAChart } from "@/components/charts/SeasonalityForecastMAChart";
import { VolatilityChart } from "@/components/charts/VolatilityChart";
import { GrowthRateChart } from "@/components/charts/GrowthRateChart";
import { ComparativeChart } from "@/components/charts/ComparativeChart";
import { InsightsPanel } from "@/components/InsightsPanel";

const Index = () => {
  const [jobTitle] = useState("Front-End Web Developer (React)");
  const [compareJobs] = useState("Data Science, Machine Learning Engineer");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Job Trend Analyzer</h1>
          <p className="text-gray-400 text-lg">Analyzing trends for: {jobTitle}</p>
        </div>

        {/* Insights Panel at the top - full width */}
        <div className="w-full">
          <InsightsPanel jobTitle={jobTitle} />
        </div>

        {/* Charts Grid */}
        <div className="space-y-6">
          {/* Top Row - Trend and Seasonality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrendChart jobTitle={jobTitle} />
            <SeasonalityChart jobTitle={jobTitle} />
          </div>

          {/* Second Row - Forecast Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SeasonalityForecastChart jobTitle={jobTitle} />
            <SeasonalityForecastMAChart jobTitle={jobTitle} />
          </div>

          {/* Third Row - Volatility and Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VolatilityChart jobTitle={jobTitle} />
            <GrowthRateChart jobTitle={jobTitle} />
          </div>

          {/* Bottom Row - Comparative Chart */}
          <div className="w-full">
            <ComparativeChart compareJobs={compareJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
