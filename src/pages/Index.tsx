
import { useState } from "react";
import { TrendChart } from "@/components/charts/TrendChart";
import { SeasonalityChart } from "@/components/charts/SeasonalityChart";
import { SeasonalityForecastChart } from "@/components/charts/SeasonalityForecastChart";
import { SeasonalityForecastMAChart } from "@/components/charts/SeasonalityForecastMAChart";
import { VolatilityChart } from "@/components/charts/VolatilityChart";
import { GrowthRateChart } from "@/components/charts/GrowthRateChart";
import { ComparativeChart } from "@/components/charts/ComparativeChart";
import { InsightsPanel } from "@/components/InsightsPanel";
import { ControlPanel } from "@/components/ControlPanel"; // Import ControlPanel
import { useQuery } from "@tanstack/react-query";
import { analyzeJobSkill, compareJobSkills } from "@/services/api"; 
import { TrendAnalysisRequest, ComparativeTrendRequest } from "@/types/api";

const Index = () => {
  // State for single job/skill analysis
  const [currentJobTitle, setCurrentJobTitle] = useState<string>("Software Engineer");
  const [geo, setGeo] = useState<string | undefined>("US");
  const [maWindow, setMaWindow] = useState<number>(20);
  const [volatilityWindow, setVolatilityWindow] = useState<number>(4);
  const [smoothingWindow, setSmoothingWindow] = useState<number>(4);
  const [anomalyThreshold, setAnomalyThreshold] = useState<number>(2.0);

  // Consolidate parameters for TrendAnalysisRequest
  const analysisRequestParams: TrendAnalysisRequest = {
    skill_or_job: currentJobTitle,
    geo: geo,
    ma_window: maWindow,
    volatility_window: volatilityWindow,
    smoothing_window: smoothingWindow,
    anomaly_threshold: anomalyThreshold,
  };

  const analysisQuery = useQuery({
    queryKey: ['jobSkillAnalysis', analysisRequestParams], // Use the whole object
    queryFn: () => analyzeJobSkill(analysisRequestParams),
    enabled: false, 
  });
  const analyzedData = analysisQuery.data;

  // State for comparative analysis
  const [compareJobTitles, setCompareJobTitles] = useState<string[]>(["Data Scientist", "Machine Learning Engineer"]);
  const [compareGeo, setCompareGeo] = useState<string | undefined>("US");

  // Consolidate parameters for ComparativeTrendRequest
  const comparativeRequestParams: ComparativeTrendRequest = {
    skills: compareJobTitles,
    geo: compareGeo,
  };

  const comparativeQuery = useQuery({
    queryKey: ['jobSkillComparison', comparativeRequestParams], // Use the whole object
    queryFn: () => compareJobSkills(comparativeRequestParams),
    enabled: false,
  });
  const comparativeData = comparativeQuery.data;

  // Search callback for single analysis
  const handleSearchSingle = () => {
    if (currentJobTitle.trim() !== "") {
      analysisQuery.refetch();
    }
  };

  // Search callback for comparative analysis
  const handleSearchComparative = () => {
    if (compareJobTitles.length > 0 && compareJobTitles.length <= 2 && compareJobTitles.every(title => title.trim() !== "")) {
      comparativeQuery.refetch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-full mx-auto space-y-8"> {/* Changed max-w-7xl to max-w-full */}
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Job Trend Analyzer</h1>
          <p className="text-gray-400 text-lg">Analyzing trends for: {currentJobTitle}</p>
        </div>

        {/* Control Panel */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Analysis Controls</h2>
          <ControlPanel
            jobTitle={currentJobTitle}
            setJobTitle={setCurrentJobTitle}
            geo={geo}
            setGeo={setGeo}
            maWindow={maWindow}
            setMaWindow={setMaWindow}
            volatilityWindow={volatilityWindow}
            setVolatilityWindow={setVolatilityWindow}
            smoothingWindow={smoothingWindow}
            setSmoothingWindow={setSmoothingWindow}
            anomalyThreshold={anomalyThreshold}
            setAnomalyThreshold={setAnomalyThreshold}
            compareJobTitles={compareJobTitles}
            setCompareJobTitles={setCompareJobTitles}
            compareGeo={compareGeo}
            setCompareGeo={setCompareGeo}
            onSearchSingle={handleSearchSingle} // Pass the new handler
            onSearchComparative={handleSearchComparative} // Pass the new handler
          />
        </div>
        
        {/* Insights Panel */}
        <div className="w-full">
          {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Insights...</p>}
          {analysisQuery.isError && <p className="text-center text-red-400">Error loading Insights: {analysisQuery.error.message}</p>}
          {analyzedData && <InsightsPanel jobTitle={currentJobTitle} insights={analyzedData.insights} />}
        </div>

        {/* Charts Grid */}
        <div className="space-y-6">
          {/* Top Row - Trend and Seasonality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Trend Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Trend Data: {analysisQuery.error.message}</p>}
              {analyzedData?.trend_data && 
                <TrendChart 
                  jobTitle={currentJobTitle} 
                  data={analyzedData.trend_data} 
                  movingAverageData={analyzedData.moving_average} // Pass MA data to TrendChart
                />}
            </div>
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Seasonality Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Seasonality Data: {analysisQuery.error.message}</p>}
              {analyzedData?.seasonality_data && <SeasonalityChart jobTitle={currentJobTitle} data={analyzedData.seasonality_data} />}
            </div>
          </div>

          {/* Second Row - Forecast Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Forecast Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Forecast Data: {analysisQuery.error.message}</p>}
              {analyzedData?.forecast_data && <SeasonalityForecastChart jobTitle={currentJobTitle} data={analyzedData.forecast_data} />}
            </div>
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Forecast & MA Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Forecast & MA Data: {analysisQuery.error.message}</p>}
              {analyzedData && (
                <SeasonalityForecastMAChart 
                  jobTitle={currentJobTitle} 
                  forecast_data={analyzedData.forecast_data} 
                  moving_average_data={analyzedData.moving_average} 
                />
              )}
            </div>
          </div>

          {/* Third Row - Volatility and Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Volatility Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Volatility Data: {analysisQuery.error.message}</p>}
              {analyzedData?.volatility && <VolatilityChart jobTitle={currentJobTitle} data={analyzedData.volatility} />}
            </div>
            <div>
              {analysisQuery.isLoading && <p className="text-center text-gray-400">Loading Growth Rate Data...</p>}
              {analysisQuery.isError && <p className="text-center text-red-400">Error loading Growth Rate Data: {analysisQuery.error.message}</p>}
              {analyzedData?.growth_rate && <GrowthRateChart jobTitle={currentJobTitle} data={analyzedData.growth_rate} />}
            </div>
          </div>

          {/* Bottom Row - Comparative Chart */}
          <div className="w-full">
            <div>
              {comparativeQuery.isLoading && <p className="text-center text-gray-400">Loading Comparative Data...</p>}
              {comparativeQuery.isError && <p className="text-center text-red-400">Error loading Comparative Data: {comparativeQuery.error.message}</p>}
              {comparativeData && <ComparativeChart jobTitles={compareJobTitles} data={comparativeData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
