'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Hero } from '../types';
import { heroes } from '../data';

interface HeroSelectionProps {
  onHeroSelect: (hero: Hero) => void;
  onHeroDeselect: (heroId: string) => void;
  selectedHeroes: Hero[];
}

export default function HeroSelection({ onHeroSelect, onHeroDeselect, selectedHeroes }: HeroSelectionProps) {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter heroes by attribute and search term
  const filteredHeroes = heroes.filter(hero => {
    const matchesAttribute = filter === 'all' || hero.attribute === filter;
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesAttribute && matchesSearch;
  });

  // Check if a hero is already selected
  const isHeroSelected = (heroId: string) => {
    return selectedHeroes.some(hero => hero.id === heroId);
  };

  // Group heroes by attribute for the filter UI
  const attributeCounts = {
    all: heroes.length,
    strength: heroes.filter(h => h.attribute === 'strength').length,
    agility: heroes.filter(h => h.attribute === 'agility').length,
    intelligence: heroes.filter(h => h.attribute === 'intelligence').length,
    universal: heroes.filter(h => h.attribute === 'universal').length,
  };

  // Get a random hero that isn't already selected
  const getRandomHero = () => {
    const availableHeroes = heroes.filter(hero => !isHeroSelected(hero.id));
    if (availableHeroes.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableHeroes.length);
    onHeroSelect(availableHeroes[randomIndex]);
  };

  // Use hero's first letter as a placeholder
  const getHeroInitial = (heroName: string) => {
    return heroName.charAt(0);
  };

  // Get the background color for hero avatar based on attribute
  const getHeroBgColor = (attribute: string) => {
    switch(attribute) {
      case 'strength': return 'bg-red-800';
      case 'agility': return 'bg-green-800';
      case 'intelligence': return 'bg-blue-800';
      case 'universal': return 'bg-purple-800';
      default: return 'bg-gray-800';
    }
  };

  // Get attribute color
  const getAttributeColor = (attribute: string) => {
    switch(attribute) {
      case 'strength': return 'bg-red-900 text-red-300';
      case 'agility': return 'bg-green-900 text-green-300';
      case 'intelligence': return 'bg-blue-900 text-blue-300';
      case 'universal': return 'bg-purple-900 text-purple-300';
      default: return 'bg-gray-800 text-gray-300';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-red-400">Select Heroes</h2>

      {/* Search and filter controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search heroes..."
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={getRandomHero}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white flex items-center"
          >
            <span className="mr-2">🎲</span> Random Hero
          </button>
        </div>
      </div>

      {/* Attribute filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-lg ${filter === 'all' ? 'bg-red-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          All ({attributeCounts.all})
        </button>
        <button
          onClick={() => setFilter('strength')}
          className={`px-3 py-1 rounded-lg ${filter === 'strength' ? 'bg-red-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          STR ({attributeCounts.strength})
        </button>
        <button
          onClick={() => setFilter('agility')}
          className={`px-3 py-1 rounded-lg ${filter === 'agility' ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          AGI ({attributeCounts.agility})
        </button>
        <button
          onClick={() => setFilter('intelligence')}
          className={`px-3 py-1 rounded-lg ${filter === 'intelligence' ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          INT ({attributeCounts.intelligence})
        </button>
        <button
          onClick={() => setFilter('universal')}
          className={`px-3 py-1 rounded-lg ${filter === 'universal' ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          UNI ({attributeCounts.universal})
        </button>
      </div>

      {/* Selected heroes display */}
      {selectedHeroes.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-300">Selected Heroes:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedHeroes.map(hero => (
              <div key={hero.id} className="relative inline-block">
                <div 
                  className={`w-16 h-16 ${getHeroBgColor(hero.attribute)} rounded-md flex items-center justify-center overflow-hidden border-2 border-red-500`}
                  onClick={() => onHeroDeselect(hero.id)}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-white opacity-70">{getHeroInitial(hero.name)}</div>
                    <div className="text-xs text-white opacity-90">{hero.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Heroes grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredHeroes.map(hero => (
          <div
            key={hero.id}
            onClick={() => !isHeroSelected(hero.id) && onHeroSelect(hero)}
            className={`
              cursor-pointer bg-gray-900 rounded-md overflow-hidden transition-all
              hover:transform hover:scale-105 hover:shadow-lg
              ${isHeroSelected(hero.id) ? 'ring-2 ring-red-500' : 'ring-1 ring-gray-700'}
            `}
          >
            <div className={`relative h-24 overflow-hidden ${getHeroBgColor(hero.attribute)}`}>
              {/* Hero placeholder with initial */}
              <div className="flex items-center justify-center h-full">
                <span className="text-3xl font-bold text-white opacity-50">
                  {getHeroInitial(hero.name)}
                </span>
              </div>
              
              {isHeroSelected(hero.id) && (
                <div className="absolute inset-0 bg-red-900 bg-opacity-30 flex items-center justify-center">
                  <div className="bg-red-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold">{hero.name}</h3>
              <div className="flex justify-center gap-1 text-xs mt-1">
                <span className={`px-1 rounded ${getAttributeColor(hero.attribute)}`}>
                  {hero.attribute.substring(0, 3).toUpperCase()}
                </span>
                <span className="bg-gray-800 px-1 rounded">
                  {hero.roles[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredHeroes.length === 0 && (
        <div className="text-center text-gray-400 my-8">
          No heroes found matching your criteria.
        </div>
      )}
    </div>
  );
} 