/**
 * Interface for a generated joke
 */
export interface Joke {
  id: string;
  text: string;
  heroes: string[]; // Hero IDs
  scenario?: string; // Scenario ID
  template: string; // Template ID
  timestamp: string;
}

/**
 * Interface for a joke template
 */
export interface JokeTemplate {
  id: string;
  text: string;
  heroCount: number;
  scenarios: string[]; // Scenario IDs
  category: JokeCategory;
  difficulty: JokeDifficulty;
  variables: string[]; // Variables that need replacement
}

/**
 * Type for joke categories
 */
export type JokeCategory = 'interaction' | 'mechanics' | 'meta' | 'role';

/**
 * Type for joke difficulty levels
 */
export type JokeDifficulty = 'beginner' | 'advanced';

/**
 * Interface for template variable replacement
 */
export interface TemplateVariable {
  key: string;
  value: string;
} 