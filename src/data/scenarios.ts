import { Scenario } from '../types';

/**
 * Mock data for joke scenarios
 */
export const scenarios: Scenario[] = [
  {
    id: 'general',
    name: 'General',
    description: 'Generic Dota 2 scenarios applicable to most heroes',
    difficulty: 'beginner',
    heroCount: null, // Works with any number of heroes
    tags: ['all', 'generic'],
    contextVariables: []
  },
  {
    id: 'laning',
    name: 'Laning Phase',
    description: 'Jokes about the early game laning phase',
    difficulty: 'beginner',
    heroCount: 1,
    tags: ['early game', 'farm'],
    contextVariables: ['lane_indication_based_on_hero1']
  },
  {
    id: 'item_purchase',
    name: 'Item Shopping',
    description: 'Jokes about heroes buying items',
    difficulty: 'beginner',
    heroCount: 1,
    tags: ['items', 'gold', 'shop'],
    contextVariables: ['item', 'typical_behavior']
  },
  {
    id: 'teamfight',
    name: 'Team Fight',
    description: 'Jokes about heroes in team fights',
    difficulty: 'advanced',
    heroCount: 3,
    tags: ['combat', 'abilities', 'coordination'],
    contextVariables: [
      'hero1_signature_move',
      'hero2_signature_move',
      'hero3_typical_behavior',
      'punchline_based_on_heroes_combination'
    ]
  },
  {
    id: 'rivalry',
    name: 'Hero Rivalry',
    description: 'Jokes about hero counters and matchups',
    difficulty: 'advanced',
    heroCount: 2,
    tags: ['counter', 'matchup', 'mechanics'],
    contextVariables: [
      'hero2_annoying_behavior',
      'hero1_typical_objective'
    ]
  },
  {
    id: 'roshan',
    name: 'Roshan Encounter',
    description: 'Jokes involving heroes and Roshan',
    difficulty: 'beginner',
    heroCount: 2,
    tags: ['objective', 'roshan'],
    contextVariables: [
      'hero1_catchphrase',
      'punchline_based_on_both_heroes'
    ]
  },
  {
    id: 'misplaced_ability',
    name: 'Misplaced Abilities',
    description: 'Jokes about using abilities in inappropriate contexts',
    difficulty: 'beginner',
    heroCount: 1,
    tags: ['abilities', 'misuse'],
    contextVariables: ['hero1_signature_move']
  },
  {
    id: 'losing',
    name: 'Losing the Game',
    description: 'Jokes about how heroes lose games',
    difficulty: 'advanced',
    heroCount: 3,
    tags: ['fail', 'loss', 'blame'],
    contextVariables: [
      'hero1_typical_behavior',
      'hero2_typical_behavior',
      'hero3_mistaken_belief'
    ]
  },
  {
    id: 'real_world',
    name: 'Real World Comparison',
    description: 'Jokes comparing heroes to real-world situations',
    difficulty: 'beginner',
    heroCount: 1,
    tags: ['comparison', 'real life'],
    contextVariables: [
      'real_world_comparison',
      'punchline_based_on_hero1_traits'
    ]
  }
]; 