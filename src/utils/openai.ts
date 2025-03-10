import { Hero, Scenario } from '../types';

/**
 * Generate a joke using our API route
 * 
 * @param heroes - Array of heroes to include in the joke
 * @param scenario - Optional scenario for the joke
 * @returns The generated joke text
 */
export async function generateJoke(heroes: Hero[], scenario?: Scenario): Promise<string> {
  try {
    const response = await fetch('/api/generate-joke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ heroes, scenario }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate joke');
    }

    const data = await response.json();
    return data.jokeText;
  } catch (error) {
    console.error('Error generating joke:', error);
    return 'Failed to generate a joke. Please try again.';
  }
}

/**
 * Generate joke variables using our API route
 * 
 * @param templateText - The joke template text
 * @param variables - Array of variable names to fill
 * @param heroes - Array of heroes to reference
 * @returns Object with variable names and values
 */
export async function generateJokeVariables(
  templateText: string,
  variables: string[],
  heroes: Hero[]
): Promise<Record<string, string>> {
  try {
    const response = await fetch('/api/generate-joke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ templateText, variables, heroes }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate joke variables');
    }

    const data = await response.json();
    return data.variableValues || {};
  } catch (error) {
    console.error('Error generating joke variables:', error);
    return {};
  }
} 