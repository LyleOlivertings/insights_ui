import axios from 'axios';
import {
  TrendAnalysisRequest,
  AnalyzeJobSkillResponse,
  ComparativeTrendRequest,
  CompareJobSkillsResponse,
  // The following types might be needed if we decide to keep/refactor other specific fetch functions
  // For now, the main task is to implement analyzeJobSkill and compareJobSkills.
  // We will comment out the old types and functions for clarity.
  // JobTrendDataPoint,
  // ComparativeDataPoint,
  // VolatilityDataPoint,
  // GrowthRateDataPoint,
  // SeasonalityDataPoint,
  // ForecastDataPoint,
  // InsightsData,
} from '../types/api';

const API_BASE_URL = "http://localhost:8000/v1"; // Using the specified base URL

export const analyzeJobSkill = async (requestBody: TrendAnalysisRequest): Promise<AnalyzeJobSkillResponse> => {
  try {
    const response = await axios.post<AnalyzeJobSkillResponse>(`${API_BASE_URL}/analyze`, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error fetching job skill analysis:", error);
    if (axios.isAxiosError(error) && error.response) {
      // Attempt to parse and throw backend error message if available
      const errorDetail = error.response.data?.detail || 'Failed to fetch job skill analysis';
      throw new Error(errorDetail);
    }
    throw new Error('Failed to fetch job skill analysis due to an unexpected error.');
  }
};

export const compareJobSkills = async (requestBody: ComparativeTrendRequest): Promise<CompareJobSkillsResponse> => {
  try {
    const response = await axios.post<CompareJobSkillsResponse>(`${API_BASE_URL}/compare`, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error fetching job skill comparison:", error);
    if (axios.isAxiosError(error) && error.response) {
      const errorDetail = error.response.data?.detail || 'Failed to fetch job skill comparison';
      throw new Error(errorDetail);
    }
    throw new Error('Failed to fetch job skill comparison due to an unexpected error.');
  }
};

// --- Mock functions to be removed or refactored ---
// The following functions are the old mock implementations.
// They are being replaced by the more comprehensive `analyzeJobSkill` and `compareJobSkills`
// which will return all necessary data for the charts.
// Individual fetch functions for each chart type may no longer be needed if
// the frontend adapts to use the structured responses from /analyze and /compare.

/*
export const fetchTrendData = async (jobTitle: string): Promise<JobTrendDataPoint[]> => {
  console.log(`Fetching trend data for ${jobTitle}`);
  // Mock data for now
  return [
    { date: '2023-01-01', interest: 60 },
    { date: '2023-02-01', interest: 65 },
    { date: '2023-03-01', interest: 70 },
    { date: '2023-04-01', interest: 75 },
    { date: '2023-05-01', interest: 80 },
  ];
};

export const fetchComparativeData = async (jobTitles: string[]): Promise<ComparativeDataPoint[]> => {
  console.log(`Fetching comparative data for ${jobTitles.join(', ')}`);
  // Mock data for now
  return [
    { date: '2023-01-01', jobA_interest: 60, jobB_interest: 50 },
    { date: '2023-02-01', jobA_interest: 65, jobB_interest: 55 },
    { date: '2023-03-01', jobA_interest: 70, jobB_interest: 60 },
    { date: '2023-04-01', jobA_interest: 75, jobB_interest: 65 },
    { date: '2023-05-01', jobA_interest: 80, jobB_interest: 70 },
  ];
};

export const fetchVolatilityData = async (jobTitle: string): Promise<VolatilityDataPoint[]> => {
  console.log(`Fetching volatility data for ${jobTitle}`);
  // Mock data for now
  return [
    { date: '2023-01-01', volatility_score: 0.5 },
    { date: '2023-02-01', volatility_score: 0.6 },
    { date: '2023-03-01', volatility_score: 0.4 },
    { date: '2023-04-01', volatility_score: 0.7 },
    { date: '2023-05-01', volatility_score: 0.5 },
  ];
};

export const fetchGrowthRateData = async (jobTitle: string): Promise<GrowthRateDataPoint[]> => {
  console.log(`Fetching growth rate data for ${jobTitle}`);
  // Mock data for now
  return [
    { period: 'Last Month', growth_rate: 0.1 },
    { period: 'Last 3 Months', growth_rate: 0.08 },
    { period: 'Last 6 Months', growth_rate: 0.12 },
    { period: 'Last Year', growth_rate: 0.15 },
  ];
};

export const fetchSeasonalityData = async (jobTitle: string): Promise<SeasonalityDataPoint[]> => {
  console.log(`Fetching seasonality data for ${jobTitle}`);
  // Mock data for now
  return [
    { month: 'January', interest_score: 70 },
    { month: 'February', interest_score: 65 },
    { month: 'March', interest_score: 75 },
    { month: 'April', interest_score: 80 },
    { month: 'May', interest_score: 85 },
    { month: 'June', interest_score: 90 },
    { month: 'July', interest_score: 80 },
    { month: 'August', interest_score: 75 },
    { month: 'September', interest_score: 70 },
    { month: 'October', interest_score: 65 },
    { month: 'November', interest_score: 60 },
    { month: 'December', interest_score: 55 },
  ];
};

export const fetchForecastData = async (jobTitle: string): Promise<ForecastDataPoint[]> => {
  console.log(`Fetching forecast data for ${jobTitle}`);
  // Mock data for now
  return [
    { date: '2023-06-01', forecast_interest: 85, moving_average: 82 },
    { date: '2023-07-01', forecast_interest: 88, moving_average: 84 },
    { date: '2023-08-01', forecast_interest: 90, moving_average: 86 },
    { date: '2023-09-01', forecast_interest: 87, moving_average: 88 },
    { date: '2023-10-01', forecast_interest: 82, moving_average: 85 },
  ];
};

export const fetchInsightsData = async (jobTitle: string): Promise<InsightsData> => {
  console.log(`Fetching insights data for ${jobTitle}`);
  // Mock data for now
  return {
    overallTrend: 'Positive',
    seasonalPeak: 'June',
    growthOutlook: 'Strong',
  };
};

// Example of using axios for a real API call (replace with actual implementation)
export const fetchRealDataExample = async (endpoint: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
*/
