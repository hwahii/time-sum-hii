
import React, { useState } from 'react';
import { calculateTotalDuration, formatDuration } from '../utils/timeParser';

const Calculator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<{ totalMinutes: number; rangesFound: number } | null>(null);

  const handleCalculate = () => {
    const calculation = calculateTotalDuration(inputText);
    setResult({
      totalMinutes: calculation.totalMinutes,
      rangesFound: calculation.rangesFound
    });
  };

  const handleClear = () => {
    setInputText('');
    setResult(null);
  };

  const decimalHours = result ? (Math.round((result.totalMinutes / 60) * 10) / 10).toFixed(1) : '0.0';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <label htmlFor="timeInput" className="block text-sm font-medium text-gray-700 mb-2">
          輸入包含時間範圍的文字
        </label>
        <textarea
          id="timeInput"
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 font-medium placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="例如：&#10;0600-0700&#10;下午 09:00 - 11:30 工作時間"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-blue-100 transition-all duration-200 active:scale-[0.98]"
        >
          <i className="fa-solid fa-calculator mr-2"></i>
          計算總時長
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border border-gray-200 text-gray-500 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
        >
          清除
        </button>
      </div>

      {result && (
        <div className={`p-6 rounded-2xl border transition-all duration-300 ${result.rangesFound > 0 ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-700">計算結果</span>
            <span className="text-xs text-blue-500 font-medium bg-white px-2 py-1 rounded-full border border-blue-100">
              偵測到 {result.rangesFound} 個時段
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">
              {formatDuration(result.totalMinutes)}
            </div>
            {result.totalMinutes > 0 && (
              <div className="text-lg md:text-xl font-medium text-blue-600">
                ({decimalHours} 小時)
              </div>
            )}
          </div>
          {result.rangesFound === 0 && inputText.trim() !== '' && (
            <p className="mt-2 text-sm text-amber-600">
              <i className="fa-solid fa-triangle-exclamation mr-1"></i>
              未在輸入文字中找到有效的時間格式。
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calculator;
