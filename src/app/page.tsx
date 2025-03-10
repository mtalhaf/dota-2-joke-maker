'use client';

import Image from "next/image";
import { useState } from "react";
import HeroSelection from "@/components/HeroSelection";
import ScenarioSelection from "@/components/ScenarioSelection";
import { Hero, Scenario } from "@/types";
import { heroes } from "@/data";

export default function Home() {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleHeroSelect = (hero: Hero) => {
    setSelectedHeroes([...selectedHeroes, hero]);
  };

  const handleHeroDeselect = (heroId: string) => {
    setSelectedHeroes(selectedHeroes.filter(hero => hero.id !== heroId));
  };

  const handleScenarioSelect = (scenario: Scenario | null) => {
    setSelectedScenario(scenario);
  };

  const generateJoke = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Ensure we have at least one hero selected
      if (selectedHeroes.length === 0) {
        setError("Please select at least one hero first");
        setLoading(false);
        return;
      }
      
      const response = await fetch('/api/generate-joke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heroes: selectedHeroes,
          scenario: selectedScenario,
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

  const saveJoke = () => {
    if (!joke) return;
    
    // Create saved jokes array in localStorage if it doesn't exist
    const savedJokes = JSON.parse(localStorage.getItem('savedJokes') || '[]');
    
    // Add the current joke with timestamp and hero info
    savedJokes.push({
      text: joke,
      timestamp: new Date().toISOString(),
      heroes: selectedHeroes.map(h => h.name),
      scenario: selectedScenario?.name || 'General',
    });
    
    // Save back to localStorage
    localStorage.setItem('savedJokes', JSON.stringify(savedJokes));
    
    // Show a brief confirmation
    alert('Joke saved to your favorites!');
  };

  const shareJoke = () => {
    if (!joke) return;
    
    // Create a shareable text that includes the joke and hero names
    const heroNames = selectedHeroes.map(h => h.name).join(', ');
    const shareText = `Check out this Dota 2 joke about ${heroNames}:\n\n"${joke}"\n\nGenerated at dota-2-joke-maker-mtalhaf.vercel.app`;
    
    // Use the navigator share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Dota 2 Joke',
        text: shareText,
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback to clipboard copy
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Joke copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
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
          {/* Hero Selection */}
          <HeroSelection 
            onHeroSelect={handleHeroSelect} 
            selectedHeroes={selectedHeroes} 
          />

          {/* Selected Heroes Bar */}
          {selectedHeroes.length > 0 && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6 flex flex-wrap items-center">
              <div className="mr-2 text-gray-400">Selected:</div>
              {selectedHeroes.map(hero => (
                <div 
                  key={hero.id} 
                  className="bg-gray-700 rounded-full px-3 py-1 m-1 text-sm flex items-center"
                >
                  {hero.name}
                  <button 
                    onClick={() => handleHeroDeselect(hero.id)}
                    className="ml-2 text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Scenario Selection */}
          <ScenarioSelection
            onScenarioSelect={handleScenarioSelect}
            selectedScenario={selectedScenario}
            heroCount={selectedHeroes.length}
          />

          {/* Joke display area */}
          <div className="min-h-[200px] bg-gray-900 rounded-lg p-6 mb-6 flex flex-col items-center justify-center text-center">
            {loading ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4"></div>
                <p className="text-xl">Generating your joke...</p>
              </div>
            ) : error ? (
              <p className="text-red-400">{error}</p>
            ) : joke ? (
              <>
                <p className="text-xl mb-4">{joke}</p>
                <div className="flex space-x-4">
                  <button 
                    onClick={saveJoke}
                    className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center"
                  >
                    <span className="mr-2">💾</span> Save Joke
                  </button>
                  <button 
                    onClick={shareJoke}
                    className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center"
                  >
                    <span className="mr-2">📱</span> Share Joke
                  </button>
                </div>
              </>
            ) : (
              <p className="text-xl italic">
                Select heroes and a scenario, then generate a joke!
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex justify-center">
            <button 
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={generateJoke}
              disabled={loading || selectedHeroes.length === 0}
            >
              {loading ? 'Generating...' : 'Generate Joke'}
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
