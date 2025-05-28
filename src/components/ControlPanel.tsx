
interface ControlPanelProps {
  parameters: {
    movingAverage: number;
    volatility: number;
    growthSmoothing: number;
    anomalyThreshold: number;
  };
  setParameters: (params: any) => void;
}

export const ControlPanel = ({ parameters, setParameters }: ControlPanelProps) => {
  const updateParameter = (key: string, value: number) => {
    setParameters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-4">
      {/* Moving Average Window */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Moving Average Window (weeks)</label>
          <span className="text-sm text-gray-400">{parameters.movingAverage}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="2"
            max="52"
            value={parameters.movingAverage}
            onChange={(e) => updateParameter('movingAverage', Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer 
                     [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-700
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 
                     [&::-moz-range-thumb]:border-blue-700 [&::-moz-range-thumb]:border-none"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>2</span>
            <span>52</span>
          </div>
        </div>
      </div>

      {/* Volatility Window */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Volatility Window (weeks)</label>
          <span className="text-sm text-gray-400">{parameters.volatility}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="2"
            max="52"
            value={parameters.volatility}
            onChange={(e) => updateParameter('volatility', Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer 
                     [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-700
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 
                     [&::-moz-range-thumb]:border-blue-700 [&::-moz-range-thumb]:border-none"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>2</span>
            <span>52</span>
          </div>
        </div>
      </div>

      {/* Growth Rate Smoothing */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Growth Rate Smoothing Window (weeks)</label>
          <span className="text-sm text-gray-400">{parameters.growthSmoothing}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="2"
            max="52"
            value={parameters.growthSmoothing}
            onChange={(e) => updateParameter('growthSmoothing', Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer 
                     [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-700
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 
                     [&::-moz-range-thumb]:border-blue-700 [&::-moz-range-thumb]:border-none"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>2</span>
            <span>52</span>
          </div>
        </div>
      </div>

      {/* Anomaly Detection */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Anomaly Detection Threshold</label>
          <span className="text-sm text-gray-400">{parameters.anomalyThreshold}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={parameters.anomalyThreshold}
            onChange={(e) => updateParameter('anomalyThreshold', Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer 
                     [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-700
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-2 
                     [&::-moz-range-thumb]:border-blue-700 [&::-moz-range-thumb]:border-none"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
