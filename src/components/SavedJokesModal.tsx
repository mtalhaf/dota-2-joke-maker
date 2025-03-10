'use client';

import { useState, useEffect } from 'react';

interface SavedJoke {
  text: string;
  timestamp: string;
  heroes: string[];
  scenario: string;
}

interface SavedJokesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SavedJokesModal({ isOpen, onClose }: SavedJokesModalProps) {
  const [savedJokes, setSavedJokes] = useState<SavedJoke[]>([]);

  useEffect(() => {
    // Load saved jokes from localStorage when modal opens
    if (isOpen) {
      const storedJokes = localStorage.getItem('savedJokes');
      if (storedJokes) {
        try {
          setSavedJokes(JSON.parse(storedJokes));
        } catch (error) {
          console.error('Error parsing saved jokes:', error);
          setSavedJokes([]);
        }
      }
    }
  }, [isOpen]);

  const deleteJoke = (index: number) => {
    const updatedJokes = [...savedJokes];
    updatedJokes.splice(index, 1);
    setSavedJokes(updatedJokes);
    localStorage.setItem('savedJokes', JSON.stringify(updatedJokes));
  };

  const clearAllJokes = () => {
    setSavedJokes([]);
    localStorage.removeItem('savedJokes');
  };

  const formatDate = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleString();
    } catch (error) {
      return 'Unknown date';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col border border-red-800">
        <div className="bg-gray-900 p-4 flex justify-between items-center border-b border-red-800">
          <h2 className="text-xl font-bold text-red-400">Your Saved Jokes</h2>
          <div className="flex gap-2">
            {savedJokes.length > 0 && (
              <button
                onClick={clearAllJokes}
                className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded-full text-sm"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-sm"
            >
              Close
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-4 flex-grow">
          {savedJokes.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p>You haven't saved any jokes yet!</p>
              <p className="mt-2 text-sm">
                Generate some jokes and click the "Save Joke" button to save them here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedJokes.map((joke, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-red-700 transition-colors"
                >
                  <div className="flex justify-between mb-2">
                    <div className="text-sm text-gray-400">
                      {formatDate(joke.timestamp)}
                    </div>
                    <button
                      onClick={() => deleteJoke(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-lg mb-3">{joke.text}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="text-xs bg-red-800 rounded-full px-2 py-1">
                      {joke.scenario}
                    </div>
                    {joke.heroes.map((hero) => (
                      <div
                        key={hero}
                        className="text-xs bg-gray-600 rounded-full px-2 py-1"
                      >
                        {hero}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 