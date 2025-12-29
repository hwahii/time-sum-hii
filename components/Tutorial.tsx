
import React from 'react';

const Tutorial: React.FC = () => {
  const examples = [
    { format: "標準格式", text: "0800-1030", desc: "小時與分鐘相連" },
    { format: "間隔格式", text: "09:00 - 11:30", desc: "使用冒號與空格" },
    { format: "波浪號", text: "13:30 ~ 15:00", desc: "常用範圍符號" },
    { format: "混合文字", text: "週一加班 1900至2130 研討會", desc: "在句子中自動偵測" }
  ];

  return (
    <div className="mt-12 space-y-8">
      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm">?</span>
          使用教學
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">貼上您的內容</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  將任何包含時間區段的文字貼入上方輸入框。不論是筆記、訊息或是清單都可以。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">自動格式識別</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  系統會自動掃描文字中的時間點，並配對成「開始-結束」的區間。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">取得總時長</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  點擊計算後，系統會加總所有時段，並以「幾小時幾分」的清晰格式呈現。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">支援格式範例</h3>
            <div className="space-y-3">
              {examples.map((ex, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 flex justify-between items-center group hover:border-blue-300 transition-colors">
                  <div>
                    <span className="block text-xs font-semibold text-blue-600 mb-1">{ex.format}</span>
                    <code className="text-gray-900 font-medium">{ex.text}</code>
                  </div>
                  <span className="text-xs text-gray-400">{ex.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
