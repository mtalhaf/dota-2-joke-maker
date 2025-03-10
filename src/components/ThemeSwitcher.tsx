'use client';

import { useState, useEffect } from 'react';

// Theme definitions
const themes = [
  {
    id: 'default',
    name: 'Radiant (Default)',
    icon: '🌿',
    background: 'bg-gradient-to-b from-gray-900 to-red-900',
    accent: 'bg-red-700 hover:bg-red-600',
    border: 'border-red-800'
  },
  {
    id: 'dire',
    name: 'Dire',
    icon: '🔥',
    background: 'bg-gradient-to-b from-gray-900 to-green-900',
    accent: 'bg-green-700 hover:bg-green-600',
    border: 'border-green-800'
  },
  {
    id: 'arcana',
    name: 'Arcana',
    icon: '✨',
    background: 'bg-gradient-to-b from-blue-900 to-purple-900',
    accent: 'bg-purple-700 hover:bg-purple-600',
    border: 'border-purple-800'
  },
  {
    id: 'international',
    name: 'The International',
    icon: '🏆',
    background: 'bg-gradient-to-b from-gray-900 to-yellow-900',
    accent: 'bg-yellow-700 hover:bg-yellow-600',
    border: 'border-yellow-800'
  }
];

interface ThemeSwitcherProps {
  onThemeChange: (theme: typeof themes[0]) => void;
}

export default function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage on component mount
    const savedThemeId = localStorage.getItem('selectedTheme');
    if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
        onThemeChange(theme);
      }
    }
  }, [onThemeChange]);

  const changeTheme = (theme: typeof themes[0]) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme.id);
    onThemeChange(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-gray-800 hover:bg-gray-700 rounded-full px-3 py-1 text-sm border border-gray-700"
      >
        <span className="mr-2">{currentTheme.icon}</span>
        <span>{currentTheme.name}</span>
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10 border border-gray-700">
          <div className="py-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => changeTheme(theme)}
                className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-700 ${
                  currentTheme.id === theme.id ? 'bg-gray-700' : ''
                }`}
              >
                <span className="mr-2">{theme.icon}</span>
                {theme.name}
                {currentTheme.id === theme.id && (
                  <svg
                    className="ml-auto h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 