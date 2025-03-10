'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateJoke = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/generate-joke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heroes: [
            {
              id: 'pudge',
              name: 'Pudge',
              attribute: 'STR',
              roles: ['Disabler', 'Durable', 'Nuker'],
              abilities: [
                { name: 'Meat Hook', isSignature: true },
                { name: 'Rot', isSignature: true }
              ],
              phrases: ["Fresh meat!"],
              behaviors: ["Hook and rot combo", "Missing hooks"]
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate joke');
      }

      const data = await response.json();
      setJoke(data.jokeText);
    } catch (err) {
      console.error('Error generating joke:', err);
      setError('Failed to generate a joke. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white">
      {/* Dota 2 themed header */}
      <header className="pt-8 pb-6 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
          Dota 2 Joke Generator
        </h1>
        <p className="text-lg text-gray-300">
          Generating hilarious Dota 2 jokes powered by AI
        </p>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 shadow-2xl border border-red-800">
          {/* Joke display area */}
          <div className="min-h-[200px] bg-gray-900 rounded-lg p-6 mb-6 flex items-center justify-center text-center">
            {loading ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4"></div>
                <p className="text-xl">Generating your joke...</p>
              </div>
            ) : error ? (
              <p className="text-red-400">{error}</p>
            ) : joke ? (
              <p className="text-xl">{joke}</p>
            ) : (
              <p className="text-xl italic">
                Your Dota 2 joke will appear here...
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex justify-center">
            <button 
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={generateJoke}
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Random Joke'}
            </button>
          </div>
        </div>

        {/* Dota 2 logo */}
        <div className="mt-12 text-center">
          <Image
            src="/dota2-logo.png"
            alt="Dota 2 Logo"
            width={150}
            height={150}
            className="mx-auto opacity-70"
          />
          <p className="mt-4 text-sm text-gray-400">
            Not affiliated with Valve Corporation
          </p>
        </div>
      </main>
    </div>
  );
}
