import { useState } from 'react';
import { Hero, Joke, JokeTemplate, Scenario } from '../types';
import { generateJoke, generateJokeVariables } from '../utils/openai';
import { heroes, jokeTemplates, scenarios } from '../data';

interface JokeGeneratorHook {
  joke: Joke | null;
  loading: boolean;
  error: string | null;
  selectedHeroes: Hero[];
  selectedScenario: Scenario | null;
  generateRandomJoke: () => Promise<void>;
  generateJokeWithTemplate: (template: JokeTemplate) => Promise<void>;
  selectHero: (heroId: string) => void;
  unselectHero: (heroId: string) => void;
  selectScenario: (scenarioId: string | null) => void;
}

/**
 * Custom hook for joke generation functionality
 */
export function useJokeGenerator(): JokeGeneratorHook {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  /**
   * Generate a random joke using OpenAI
   */
  const generateRandomJoke = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Ensure we have at least one hero selected
      if (selectedHeroes.length === 0) {
        setError('Please select at least one hero');
        setLoading(false);
        return;
      }

      // Generate the joke text using OpenAI
      const jokeText = await generateJoke(selectedHeroes, selectedScenario || undefined);

      // Create a new joke object
      const newJoke: Joke = {
        id: `joke_${Date.now()}`,
        text: jokeText,
        heroes: selectedHeroes.map(h => h.id),
        scenario: selectedScenario?.id,
        template: 'openai_generated',
        timestamp: new Date().toISOString()
      };

      setJoke(newJoke);
    } catch (err) {
      setError('Failed to generate a joke. Please try again.');
      console.error('Error generating joke:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Generate a joke using a specific template
   */
  const generateJokeWithTemplate = async (template: JokeTemplate): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Check if we have the right number of heroes for this template
      if (selectedHeroes.length !== template.heroCount) {
        setError(`This template requires exactly ${template.heroCount} heroes.`);
        setLoading(false);
        return;
      }

      // Generate variable values using OpenAI
      const variables = await generateJokeVariables(
        template.text,
        template.variables,
        selectedHeroes
      );

      // Replace variables in the template
      let jokeText = template.text;
      Object.entries(variables).forEach(([key, value]) => {
        jokeText = jokeText.replace(`{${key}}`, value);
      });

      // Create a new joke object
      const newJoke: Joke = {
        id: `joke_${Date.now()}`,
        text: jokeText,
        heroes: selectedHeroes.map(h => h.id),
        scenario: selectedScenario?.id,
        template: template.id,
        timestamp: new Date().toISOString()
      };

      setJoke(newJoke);
    } catch (err) {
      setError('Failed to generate a joke. Please try again.');
      console.error('Error generating joke with template:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Select a hero
   */
  const selectHero = (heroId: string): void => {
    const hero = heroes.find(h => h.id === heroId);
    if (!hero) return;

    // Don't add duplicates
    if (selectedHeroes.some(h => h.id === heroId)) return;

    setSelectedHeroes([...selectedHeroes, hero]);
  };

  /**
   * Unselect a hero
   */
  const unselectHero = (heroId: string): void => {
    setSelectedHeroes(selectedHeroes.filter(h => h.id !== heroId));
  };

  /**
   * Select a scenario
   */
  const selectScenario = (scenarioId: string | null): void => {
    if (!scenarioId) {
      setSelectedScenario(null);
      return;
    }

    const scenario = scenarios.find(s => s.id === scenarioId);
    setSelectedScenario(scenario || null);
  };

  return {
    joke,
    loading,
    error,
    selectedHeroes,
    selectedScenario,
    generateRandomJoke,
    generateJokeWithTemplate,
    selectHero,
    unselectHero,
    selectScenario
  };
} 