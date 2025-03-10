/**
 * Interface for joke scenarios
 */
export interface Scenario {
  id: string;
  name: string;
  description: string;
  difficulty: ScenarioDifficulty;
  heroCount: number | null; // Null means any number of heroes
  tags: string[];
  contextVariables: string[]; // Additional variables that can be used in templates
  imageUrl?: string;
}

/**
 * Type for scenario difficulty
 */
export type ScenarioDifficulty = 'beginner' | 'intermediate' | 'advanced'; 