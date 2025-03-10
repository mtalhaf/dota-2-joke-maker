import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * API route handler for generating jokes
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { heroes, scenario, templateText, variables } = body;

    // Validate request data
    if (!heroes || !Array.isArray(heroes) || heroes.length === 0) {
      return NextResponse.json(
        { error: 'At least one hero is required' },
        { status: 400 }
      );
    }

    // If templateText and variables are provided, fill in the template
    if (templateText && variables) {
      const variableValues = await generateJokeVariables(templateText, variables, heroes);
      return NextResponse.json({ variableValues });
    }

    // Otherwise, generate a complete joke
    const jokeText = await generateJoke(heroes, scenario);
    return NextResponse.json({ jokeText });
  } catch (error) {
    console.error('Error generating joke:', error);
    return NextResponse.json(
      { error: 'Failed to generate joke' },
      { status: 500 }
    );
  }
}

/**
 * Generate a joke using OpenAI API
 */
async function generateJoke(heroes: any[], scenario?: any): Promise<string> {
  // Create a prompt based on the heroes and scenario
  const prompt = createJokePrompt(heroes, scenario);
  
  // Call the OpenAI API
  const completion = await openai.chat.completions.create({
    model: 'gpt-4', // Using GPT-4 for better joke quality
    messages: [
      {
        role: 'system',
        content: 'You are a humorous Dota 2 joke generator. Create funny, clever jokes about Dota 2 heroes that capture their essence, abilities, and player behaviors. Keep jokes appropriate and avoid offensive content.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.8, // Higher temperature for more creative jokes
    max_tokens: 200, // Limit response length
  });

  // Return the joke text
  return completion.choices[0].message.content || 'Error generating joke';
}

/**
 * Create a prompt for the joke generation
 */
function createJokePrompt(heroes: any[], scenario?: any): string {
  // Extract hero information
  const heroDetails = heroes.map(hero => {
    // Get signature abilities
    const signatureAbilities = hero.abilities
      ?.filter((ability: any) => ability.isSignature)
      ?.map((ability: any) => ability.name)
      ?.join(', ') || '';
    
    // Format hero details
    return `
    - Hero: ${hero.name}
    - Attribute: ${hero.attribute}
    - Roles: ${hero.roles?.join(', ') || ''}
    - Signature Abilities: ${signatureAbilities}
    - Phrases: ${hero.phrases?.join(', ') || ''}
    - Behaviors: ${hero.behaviors?.join(', ') || ''}
    - Memes: ${hero.memes?.join(', ') || ''}
    `;
  }).join('\n');

  // Create base prompt
  let prompt = `Generate a funny Dota 2 joke involving the following heroes:\n${heroDetails}\n`;

  // Add scenario context if provided
  if (scenario) {
    prompt += `\nThe joke should be in the context of: ${scenario.name} - ${scenario.description}\n`;
    
    if (scenario.tags?.length > 0) {
      prompt += `Related themes: ${scenario.tags.join(', ')}\n`;
    }
  }

  // Add joke format requirements
  prompt += `\nThe joke should be concise, clever, and reference the hero abilities, behaviors, or player stereotypes. Make it genuinely funny for Dota 2 players.`;

  return prompt;
}

/**
 * Generate joke variables using OpenAI API
 */
async function generateJokeVariables(
  templateText: string,
  variables: string[],
  heroes: any[]
): Promise<Record<string, string>> {
  // Extract variable names without brackets
  const cleanVariables = variables.map(v => v.replace(/[{}]/g, ''));
  
  // Create hero information string
  const heroInfo = heroes.map((hero, index) => {
    const abilities = hero.abilities
      ?.filter((a: any) => a.isSignature)
      ?.map((a: any) => a.name)
      ?.join(', ') || '';
    
    return `Hero ${index + 1}: ${hero.name} (${hero.attribute}, ${hero.roles?.join(', ') || ''})
    - Signature Abilities: ${abilities}
    - Phrases: ${hero.phrases?.join(', ') || ''}
    - Behaviors: ${hero.behaviors?.join(', ') || ''}`;
  }).join('\n\n');

  // Create the prompt
  const prompt = `
  Fill in the variables for this Dota 2 joke template:
  
  Template: "${templateText}"
  
  Variables to fill:
  ${cleanVariables.join('\n')}
  
  Hero information:
  ${heroInfo}
  
  For each variable, provide a value that would make the joke funny, clever, and relevant to the heroes.
  Return ONLY a JSON object with variable names as keys and your provided values as values.
  `;

  // Call the OpenAI API
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a Dota 2 joke assistant. You help fill in variables for joke templates with funny, relevant content based on hero information.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' },
  });

  // Parse the response as JSON
  const content = completion.choices[0].message.content || '{}';
  return JSON.parse(content);
} 