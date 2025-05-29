// --- Request Payloads ---

export interface TrendAnalysisRequest {
  skill_or_job: string;
  geo?: string;
  ma_window?: number; // Default: 20
  volatility_window?: number; // Default: 4
  smoothing_window?: number; // Default: 4
  anomaly_threshold?: number; // Default: 2.0
}

export interface ComparativeTrendRequest {
  skills: string[]; // Max 2 items
  geo?: string;
}

// --- Response Data Structures ---

export interface TimeseriesData {
  dates: string[];
  values: (number | null)[]; // Allow null for missing MA/volatility/growth values
}

export interface AnomalyPoint {
  dates: string[];
  values: number[];
}

// For the direct anomalies_json in /analyze response
export interface AnomaliesData {
  dates: string[]; 
  values: number[];
}

// For /anomalies/{skill_or_job} endpoint response
export interface AnomaliesResponse {
  skill_or_job: string;
  threshold: number;
  anomalies: {
    zscore: AnomalyPoint;
    iqr: AnomalyPoint;
  };
}

export interface SeasonalityData {
  months: number[]; // Representing months (e.g., 1 for Jan, 2 for Feb)
  values: number[];
}

// For /forecast/{skill_or_job} endpoint and nested in /analyze response
export interface ForecastResponse {
  dates: string[];
  values: number[];
}

export interface Insights {
  trend_status_5y: string;
  average_trend_5y: number;
  average_trend_3m: number;
  growth_rate_5y: number;
  growth_rate_3m: number;
  peak_value: number;
  low_value: number;
  trend_variability_5y: number;
}

// For POST /analyze response
export interface AnalyzeJobSkillResponse {
  skill_or_job: string;
  insights: Insights;
  trend_data: TimeseriesData;
  seasonality_data: SeasonalityData;
  forecast_data: ForecastResponse; // Re-using ForecastResponse
  moving_average: TimeseriesData;
  volatility: TimeseriesData;
  growth_rate: TimeseriesData;
  anomalies: AnomaliesData; // Direct structure from /analyze
}

// For individual skill entry in /compare response
export interface ComparedSkillDataEntry {
  insights: Insights | null; // Insights can be null if analysis fails
  trend_data: TimeseriesData;
}

// For POST /compare response
export interface CompareJobSkillsResponse {
  skills: string[];
  comparison: Record<string, ComparedSkillDataEntry>; // Keyed by skill name
}

// --- Placeholder types to be removed or updated ---
// The following are the old types. They are effectively replaced by the more detailed types above.
// No need to explicitly remove them as this file will be overwritten.

// export interface JobTrendDataPoint {
//   date: string;
//   interest: number;
// }
//
// export interface ComparativeDataPoint {
//   date:string;
//   jobA_interest: number;
//   jobB_interest: number;
// }
//
// export interface VolatilityDataPoint {
//   date: string;
//   volatility_score: number;
// }
//
// export interface GrowthRateDataPoint {
//   period: string;
//   growth_rate: number;
// }
//
// export interface SeasonalityDataPoint {
//   month: string;
//   interest_score: number;
// }
//
// export interface ForecastDataPoint {
//   date: string;
//   forecast_interest: number;
//   moving_average?: number;
// }
//
// export interface InsightsData {
//   overallTrend: string;
//   seasonalPeak: string;
//   growthOutlook: string;
// }
