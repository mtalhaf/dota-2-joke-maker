'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Hero } from '../types';
import { heroes } from '../data';

interface HeroSelectionProps {
  onHeroSelect: (hero: Hero) => void;
  selectedHeroes: Hero[];
}

export default function HeroSelection({ onHeroSelect, selectedHeroes }: HeroSelectionProps) {
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
        <div className="flex space-x-2">
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
      </div>

      {/* Selected heroes display */}
      {selectedHeroes.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-300">Selected Heroes:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedHeroes.map(hero => (
              <div key={hero.id} className="relative inline-block">
                <div className="w-16 h-16 bg-gray-900 rounded-md flex items-center justify-center overflow-hidden border-2 border-red-500">
                  <div className="text-xs text-center p-1">{hero.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Heroes grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredHeroes.map(hero => (
          <div
            key={hero.id}
            onClick={() => !isHeroSelected(hero.id) && onHeroSelect(hero)}
            className={`
              cursor-pointer bg-gray-900 rounded-md overflow-hidden transition-all
              hover:transform hover:scale-105 hover:shadow-lg
              ${isHeroSelected(hero.id) ? 'opacity-50 border-2 border-red-500' : 'opacity-100 border border-gray-700'}
            `}
          >
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold mb-1">{hero.name}</h3>
              <div className="flex justify-center gap-1 text-xs">
                <span className={`
                  px-1 rounded
                  ${hero.attribute === 'strength' ? 'bg-red-900 text-red-300' : 
                    hero.attribute === 'agility' ? 'bg-green-900 text-green-300' : 
                    hero.attribute === 'intelligence' ? 'bg-blue-900 text-blue-300' : 
                    'bg-purple-900 text-purple-300'}
                `}>
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