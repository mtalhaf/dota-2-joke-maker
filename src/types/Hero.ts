/**
 * Hero interface defining the structure for Dota 2 heroes
 */
export interface Hero {
  id: string;
  name: string;
  attribute: 'strength' | 'agility' | 'intelligence' | 'universal';
  roles: string[];
  abilities: Ability[];
  phrases: string[];
  behaviors: string[];
  relationships: Relationship[];
  memes: string[];
  imageUrl: string;
}

/**
 * Hero ability interface
 */
export interface Ability {
  name: string;
  description: string;
  isSignature: boolean;
}

/**
 * Hero relationship interface
 */
export interface Relationship {
  heroId: string;
  type: 'friend' | 'enemy' | 'rival';
  description: string;
}

/**
 * Hero attribute type
 */
export type HeroAttribute = 'strength' | 'agility' | 'intelligence' | 'universal';

/**
 * Hero role type
 */
export type HeroRole = 
  | 'Carry'
  | 'Support'
  | 'Nuker'
  | 'Disabler'
  | 'Jungler'
  | 'Durable'
  | 'Escape'
  | 'Pusher'
  | 'Initiator'; 