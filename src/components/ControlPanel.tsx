
import { Input } from "@/components/ui/input"; // Assuming Input component exists
import { Label } from "@/components/ui/label"; // Assuming Label component exists

interface ControlPanelProps {
  jobTitle: string;
  setJobTitle: (value: string) => void;
  geo: string | undefined;
  setGeo: (value: string | undefined) => void;
  maWindow: number;
  setMaWindow: (value: number) => void;
  volatilityWindow: number;
  setVolatilityWindow: (value: number) => void;
  smoothingWindow: number;
  setSmoothingWindow: (value: number) => void;
  anomalyThreshold: number;
  setAnomalyThreshold: (value: number) => void;
  compareJobTitles: string[];
  setCompareJobTitles: (value: string[]) => void;
  compareGeo: string | undefined;
  setCompareGeo: (value: string | undefined) => void;
}

export const ControlPanel = (props: ControlPanelProps) => {
  const {
    jobTitle, setJobTitle,
    geo, setGeo,
    maWindow, setMaWindow,
    volatilityWindow, setVolatilityWindow,
    smoothingWindow, setSmoothingWindow,
    anomalyThreshold, setAnomalyThreshold,
    compareJobTitles, setCompareJobTitles,
    compareGeo, setCompareGeo
  } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Single Job/Skill Analysis Controls */}
      <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-3">Single Analysis</h3>
        <div>
          <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-300">Job Title/Skill</Label>
          <Input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g., Software Engineer"
            className="mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500"
          />
        </div>
        <div>
          <Label htmlFor="geo" className="text-sm font-medium text-gray-300">Geography (e.g., US, GB)</Label>
          <Input
            id="geo"
            type="text"
            value={geo || ""}
            onChange={(e) => setGeo(e.target.value || undefined)}
            placeholder="e.g., US"
            className="mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500"
          />
        </div>

        {/* MA Window Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label htmlFor="maWindow" className="text-sm font-medium text-gray-300">MA Window (weeks)</Label>
            <span className="text-sm text-gray-400">{maWindow}</span>
          </div>
          <Input
            id="maWindow"
            type="range" min="2" max="52" value={maWindow}
            onChange={(e) => setMaWindow(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        {/* Volatility Window Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label htmlFor="volatilityWindow" className="text-sm font-medium text-gray-300">Volatility Window (weeks)</Label>
            <span className="text-sm text-gray-400">{volatilityWindow}</span>
          </div>
          <Input
            id="volatilityWindow"
            type="range" min="2" max="52" value={volatilityWindow}
            onChange={(e) => setVolatilityWindow(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        {/* Smoothing Window Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label htmlFor="smoothingWindow" className="text-sm font-medium text-gray-300">Smoothing Window (weeks)</Label>
            <span className="text-sm text-gray-400">{smoothingWindow}</span>
          </div>
          <Input
            id="smoothingWindow"
            type="range" min="2" max="52" value={smoothingWindow}
            onChange={(e) => setSmoothingWindow(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        {/* Anomaly Threshold Slider */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <Label htmlFor="anomalyThreshold" className="text-sm font-medium text-gray-300">Anomaly Threshold</Label>
            <span className="text-sm text-gray-400">{anomalyThreshold.toFixed(1)}</span>
          </div>
          <Input
            id="anomalyThreshold"
            type="range" min="1" max="5" step="0.1" value={anomalyThreshold}
            onChange={(e) => setAnomalyThreshold(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Comparative Analysis Controls */}
      <div className="space-y-4 p-4 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-3">Comparative Analysis</h3>
        <div>
          <Label htmlFor="compareJobTitles" className="text-sm font-medium text-gray-300">Job Titles/Skills (comma-separated, max 2)</Label>
          <Input
            id="compareJobTitles"
            type="text"
            value={compareJobTitles.join(', ')}
            onChange={(e) => {
              const titles = e.target.value.split(',').map(s => s.trim()).filter(s => s);
              if (titles.length <= 2) {
                setCompareJobTitles(titles);
              }
            }}
            placeholder="e.g., Data Scientist, ML Engineer"
            className="mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500"
          />
           {compareJobTitles.length > 2 && <p className="text-xs text-red-400 mt-1">Maximum of 2 skills allowed for comparison.</p>}
        </div>
        <div>
          <Label htmlFor="compareGeo" className="text-sm font-medium text-gray-300">Comparison Geography</Label>
          <Input
            id="compareGeo"
            type="text"
            value={compareGeo || ""}
            onChange={(e) => setCompareGeo(e.target.value || undefined)}
            placeholder="e.g., US"
            className="mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
};
