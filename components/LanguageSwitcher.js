import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage, t } = useLanguage();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => switchLanguage(language === 'en' ? 'si' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-sm font-medium"
        title={t('language')}
      >
        {/* Globe Icon */}
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
        
        {/* Language Toggle */}
        <div className="flex items-center space-x-1">
          <span className={`text-xs ${language === 'en' ? 'opacity-100' : 'opacity-60'}`}>
            EN
          </span>
          <div className="relative">
            <div className={`w-8 h-4 bg-white bg-opacity-30 rounded-full transition-all duration-300 ${language === 'si' ? 'bg-opacity-50' : ''}`}>
              <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-300 ${language === 'si' ? 'transform translate-x-4' : 'translate-x-0.5'}`}></div>
            </div>
          </div>
          <span className={`text-xs ${language === 'si' ? 'opacity-100' : 'opacity-60'}`}>
            සි
          </span>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
