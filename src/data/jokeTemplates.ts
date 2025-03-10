import { JokeTemplate } from '../types';

/**
 * Mock data for joke templates
 */
export const jokeTemplates: JokeTemplate[] = [
  // Single Hero Jokes
  {
    id: 's1',
    text: 'Why was {hero1} kicked out of the library?\nBecause they kept {hero1_signature_move} the books!',
    heroCount: 1,
    scenarios: ['general', 'misplaced_ability'],
    category: 'mechanics',
    difficulty: 'beginner',
    variables: ['{hero1}', '{hero1_signature_move}']
  },
  {
    id: 's2',
    text: 'If {hero1} wasn\'t a Dota hero, they\'d be a {profession} because they\'re always {hero1_behavior}!',
    heroCount: 1,
    scenarios: ['alternate_universe', 'real_world'],
    category: 'meta',
    difficulty: 'beginner',
    variables: ['{hero1}', '{profession}', '{hero1_behavior}']
  },
  {
    id: 's3',
    text: '{hero1} walks into a shop and asks for {item}. The shopkeeper says, "That\'ll be 5000 gold." {hero1} replies, "{hero1_catchphrase}" and then {hero1_typical_behavior}.',
    heroCount: 1,
    scenarios: ['shop', 'item_purchase'],
    category: 'interaction',
    difficulty: 'beginner',
    variables: ['{hero1}', '{item}', '{hero1_catchphrase}', '{hero1_typical_behavior}']
  },
  {
    id: 's4',
    text: 'How do you know when {hero1} is in your lane?\nThe {lane_indication_based_on_hero1}!',
    heroCount: 1,
    scenarios: ['laning', 'observation'],
    category: 'mechanics',
    difficulty: 'beginner',
    variables: ['{hero1}', '{lane_indication_based_on_hero1}']
  },
  {
    id: 's5',
    text: '{hero1} is like {real_world_comparison} - {punchline_based_on_hero1_traits}.',
    heroCount: 1,
    scenarios: ['comparison', 'real_world'],
    category: 'meta',
    difficulty: 'beginner',
    variables: ['{hero1}', '{real_world_comparison}', '{punchline_based_on_hero1_traits}']
  },
  
  // Two Hero Jokes
  {
    id: 'd1',
    text: 'What happens when {hero1} and {hero2} go to a bar?\n{hero1} says, "{hero1_catchphrase}" and {hero2} responds, "{hero2_catchphrase}" Then they both {punchline_based_on_heroes}!',
    heroCount: 2,
    scenarios: ['bar', 'meeting'],
    category: 'interaction',
    difficulty: 'beginner',
    variables: ['{hero1}', '{hero2}', '{hero1_catchphrase}', '{hero2_catchphrase}', '{punchline_based_on_heroes}']
  },
  {
    id: 'd2',
    text: '{hero1}: "I hate playing against {hero2}!"\nFriend: "Why?"\n{hero1}: "Because they always {hero2_annoying_behavior} when I\'m trying to {hero1_typical_objective}!"',
    heroCount: 2,
    scenarios: ['rivalry', 'counter'],
    category: 'mechanics',
    difficulty: 'advanced',
    variables: ['{hero1}', '{hero2}', '{hero2_annoying_behavior}', '{hero1_typical_objective}']
  },
  {
    id: 'd3',
    text: 'A {hero1} and a {hero2} walk into Roshan\'s pit. {hero1} says, "{hero1_catchphrase}". Roshan looks at them both and says, "{punchline_based_on_both_heroes}"',
    heroCount: 2,
    scenarios: ['roshan', 'encounter'],
    category: 'interaction',
    difficulty: 'beginner',
    variables: ['{hero1}', '{hero2}', '{hero1_catchphrase}', '{punchline_based_on_both_heroes}']
  },
  
  // Three Hero Jokes
  {
    id: 't1',
    text: '{hero1}, {hero2}, and {hero3} are in a team fight. {hero1} {hero1_signature_move}, {hero2} {hero2_signature_move}, and {hero3} just {hero3_typical_behavior}. The enemy team says, "{punchline_based_on_heroes_combination}"',
    heroCount: 3,
    scenarios: ['teamfight', 'combo'],
    category: 'mechanics',
    difficulty: 'advanced',
    variables: ['{hero1}', '{hero2}', '{hero3}', '{hero1_signature_move}', '{hero2_signature_move}', '{hero3_typical_behavior}', '{punchline_based_on_heroes_combination}']
  },
  {
    id: 't2',
    text: 'Why did {hero1}, {hero2}, and {hero3} lose the game?\nBecause {hero1} was busy {hero1_typical_behavior}, {hero2} kept {hero2_typical_behavior}, and {hero3} was convinced that {hero3_mistaken_belief}!',
    heroCount: 3,
    scenarios: ['losing', 'mistake'],
    category: 'role',
    difficulty: 'advanced',
    variables: ['{hero1}', '{hero2}', '{hero3}', '{hero1_typical_behavior}', '{hero2_typical_behavior}', '{hero3_mistaken_belief}']
  }
]; 