import { Hero } from '../types';

/**
 * Mock data for Dota 2 heroes
 */
export const heroes: Hero[] = [
  {
    id: 'pudge',
    name: 'Pudge',
    attribute: 'strength',
    roles: ['Offlane', 'Support'],
    abilities: [
      {
        name: 'Meat Hook',
        description: 'Throws a bloody hook at a unit or location, dragging the target back to Pudge.',
        isSignature: true,
      },
      {
        name: 'Dismember',
        description: 'Pudge chows down on an enemy unit, disabling it and dealing damage over time.',
        isSignature: true,
      },
      {
        name: 'Rot',
        description: 'Pudge causes himself and nearby enemies to take damage from a toxic cloud.',
        isSignature: false,
      },
    ],
    phrases: [
      'Fresh meat!',
      'Get over here!',
      'Mmm, finger-licking good!',
      'You\'ll make a fine addition to my collection.',
      'Time for a little butchery!'
    ],
    behaviors: [
      'Misses hooks constantly',
      'Buys Blink Dagger just to miss hooks from closer',
      'Thinks they\'re Dendi',
      'Hooks allies "accidentally"',
      'Stands next to enemies with Rot on'
    ],
    relationships: [
      {
        heroId: 'windranger',
        type: 'enemy',
        description: 'Difficult to hook due to Windrun'
      },
      {
        heroId: 'clockwerk',
        type: 'friend',
        description: 'Hook buddies'
      }
    ],
    memes: [
      'Missing middle? No, just Pudge missing hooks.',
      'The enemy Pudge lands every hook, but yours misses standing targets.',
      'Pudge is actually a support because he creates space... in the jungle.'
    ],
    imageUrl: '/images/heroes/pudge.jpg'
  },
  {
    id: 'axe',
    name: 'Axe',
    attribute: 'strength',
    roles: ['Offlane', 'Initiator'],
    abilities: [
      {
        name: 'Berserker\'s Call',
        description: 'Axe taunts nearby enemy units, forcing them to attack him.',
        isSignature: true,
      },
      {
        name: 'Culling Blade',
        description: 'Axe spots weakness and delivers a killing blow to an enemy unit.',
        isSignature: true,
      },
      {
        name: 'Counter Helix',
        description: 'Axe performs a helix counter attack when attacked.',
        isSignature: false,
      },
    ],
    phrases: [
      'Axe is Axe!',
      'Good day, sir!',
      'Axe brings the axe!',
      'You get nothing. Good day, sir!',
      'Axe chops!'
    ],
    behaviors: [
      'Yells in third person',
      'Blinks into five enemies alone',
      'Always says "Axe happens" after dying',
      'Spins to win',
      'Culls at full health'
    ],
    relationships: [
      {
        heroId: 'dazzle',
        type: 'enemy',
        description: 'Culling Blade vs. Shallow Grave'
      },
      {
        heroId: 'legion_commander',
        type: 'rival',
        description: 'Fellow duelists'
      }
    ],
    memes: [
      'Axe doesn\'t need a team, Axe is a team!',
      'There are only two types of Axe players: those who get 5-man calls and those who call creeps.',
      'Call, spin, dunk, repeat.'
    ],
    imageUrl: '/images/heroes/axe.jpg'
  },
  {
    id: 'anti_mage',
    name: 'Anti-Mage',
    attribute: 'agility',
    roles: ['Carry', 'Escape'],
    abilities: [
      {
        name: 'Mana Break',
        description: 'Anti-Mage\'s attacks burn an opponent\'s mana on hit.',
        isSignature: false,
      },
      {
        name: 'Blink',
        description: 'Anti-Mage teleports short distances.',
        isSignature: true,
      },
      {
        name: 'Mana Void',
        description: 'Anti-Mage unleashes a powerful blast that damages enemies based on missing mana.',
        isSignature: true,
      },
    ],
    phrases: [
      'Magic is an abomination!',
      'Magic thyself out of that!',
      'The magic ends here.',
      'Begone magic!',
      'I bring anti-magic.'
    ],
    behaviors: [
      'Farms for 40 minutes',
      'Blinks away from teamfights',
      'Split pushes the entire game',
      'Blames team while AFK farming',
      'Gets a 10-minute Battlefury or gives up'
    ],
    relationships: [
      {
        heroId: 'invoker',
        type: 'enemy',
        description: 'Hates magic users'
      },
      {
        heroId: 'silencer',
        type: 'friend',
        description: 'Both like to silence spellcasters'
      }
    ],
    memes: [
      'AM stands for "Almost Manta"',
      'AM farming pattern: jungle, lane, jungle, lane, fountain, repeat for 40 minutes',
      'Fun ends when AM gets a Manta Style'
    ],
    imageUrl: '/images/heroes/anti_mage.jpg'
  }
]; 