
import React from 'react';
import Calculator from './components/Calculator';
import Tutorial from './components/Tutorial';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 px-4 md:px-6">
      {/* Header */}
      <header className="max-w-3xl mx-auto pt-12 pb-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 mb-4">
          <i className="fa-solid fa-hourglass-half text-white text-2xl"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          TimeSumHii
        </h1>
        <p className="mt-2 text-gray-500 font-medium">
          文字轉換時間長度加總器
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto">
        <Calculator />
        <Tutorial />
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-16 text-center text-gray-400 text-xs">
        <p>
          © {new Date().getFullYear()} <a href="https://hwahii.tw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 underline decoration-dotted transition-colors">Hwahii</a> - TimeSumHii 極簡時間管理工具
        </p>
        <p className="mt-1">無須登入，無須 AI，單純的邏輯運算</p>
      </footer>
    </div>
  );
};

export default App;
