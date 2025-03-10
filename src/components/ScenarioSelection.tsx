import { useState, useEffect } from 'react';
import { Scenario } from '@/types';
import { scenarios } from '@/data';

interface ScenarioSelectionProps {
  onScenarioSelect: (scenario: Scenario | null) => void;
  selectedScenario: Scenario | null;
  heroCount: number;
}

// Get background color based on difficulty
const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-800';
    case 'intermediate':
      return 'bg-yellow-700';
    case 'advanced':
      return 'bg-red-700';
    default:
      return 'bg-gray-700';
  }
};

// Get the first letter of the scenario name
const getScenarioInitial = (name: string): string => {
  return name.charAt(0).toUpperCase();
};

export default function ScenarioSelection({ 
  onScenarioSelect, 
  selectedScenario, 
  heroCount 
}: ScenarioSelectionProps) {
  const [filter, setFilter] = useState<string>('all');
  const [filteredScenarios, setFilteredScenarios] = useState<Scenario[]>(scenarios);

  // Filter scenarios based on hero count and difficulty level
  useEffect(() => {
    let filtered = scenarios;
    
    // Filter by hero count compatibility (null means any number of heroes is okay)
    filtered = filtered.filter(scenario => 
      scenario.heroCount === null || scenario.heroCount <= heroCount
    );
    
    // Filter by difficulty
    if (filter !== 'all') {
      filtered = filtered.filter(scenario => scenario.difficulty === filter);
    }
    
    setFilteredScenarios(filtered);
  }, [filter, heroCount]);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Select a Scenario</h2>
        
        {/* Difficulty filter */}
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'all' ? 'bg-red-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'beginner' ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setFilter('beginner')}
          >
            Beginner
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'intermediate' ? 'bg-yellow-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setFilter('intermediate')}
          >
            Intermediate
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              filter === 'advanced' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setFilter('advanced')}
          >
            Advanced
          </button>
        </div>
      </div>

      {/* Random scenario button */}
      <div className="mb-4">
        <button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * filteredScenarios.length);
            onScenarioSelect(filteredScenarios[randomIndex]);
          }}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center w-full justify-center"
        >
          <span className="mr-2">🎲</span> Random Scenario
        </button>
      </div>

      {/* Scenario grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredScenarios.map(scenario => (
          <div
            key={scenario.id}
            className={`
              p-4 rounded-lg cursor-pointer transition-all duration-300
              ${selectedScenario?.id === scenario.id 
                ? 'bg-gray-800 border-2 border-red-500' 
                : 'bg-gray-700 hover:bg-gray-600 border-2 border-transparent'}
            `}
            onClick={() => onScenarioSelect(scenario)}
          >
            <div className="flex items-start">
              <div 
                className={`w-10 h-10 flex items-center justify-center rounded-full mr-3 ${getDifficultyColor(scenario.difficulty)}`}
              >
                <span className="text-white font-semibold">{getScenarioInitial(scenario.name)}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{scenario.name}</h3>
                  <div className="flex">
                    {scenario.heroCount !== null && (
                      <span className="bg-blue-800 text-xs px-2 py-1 rounded text-blue-100">
                        {scenario.heroCount} {scenario.heroCount === 1 ? 'hero' : 'heroes'}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-1">{scenario.description}</p>
                <div className="flex flex-wrap mt-2">
                  {scenario.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300 mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Clear selection button */}
      {selectedScenario && (
        <div className="mt-4 text-center">
          <button
            onClick={() => onScenarioSelect(null)}
            className="text-gray-400 hover:text-red-400 text-sm underline"
          >
            Clear scenario selection
          </button>
        </div>
      )}
    </div>
  );
} 