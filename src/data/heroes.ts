import { Hero } from '../types';

/**
 * Data for Dota 2 heroes
 */
export const heroes: Hero[] = [
  // STRENGTH HEROES
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
    id: 'dragon_knight',
    name: 'Dragon Knight',
    attribute: 'strength',
    roles: ['Carry', 'Durable', 'Initiator', 'Pusher'],
    abilities: [
      {
        name: 'Breathe Fire',
        description: 'Dragon Knight breathes fire at enemies, dealing damage and reducing their attack damage.',
        isSignature: false,
      },
      {
        name: 'Dragon Tail',
        description: 'Dragon Knight stuns an enemy unit with his shield bash.',
        isSignature: false,
      },
      {
        name: 'Elder Dragon Form',
        description: 'Dragon Knight transforms into an elder dragon, gaining ranged attack and special abilities.',
        isSignature: true,
      },
    ],
    phrases: [
      'For the Dragon\'s honor!',
      'Death brings honor!',
      'By my shield!'
    ],
    behaviors: [
      'Farms for hours to get Black King Bar',
      'Always forgets to use Dragon Form in fights',
      'Stunlocks a single target for eternity'
    ],
    memes: [
      'Dragon Knight: the hero that turns from a knight into an actual dragon, yet somehow remains one of the most boring heroes.',
      'DK players: The most reliable, least dramatic people in Dota.',
      'Press R to win lane.'
    ],
    imageUrl: '/images/heroes/dragon_knight.jpg'
  },
  {
    id: 'sven',
    name: 'Sven',
    attribute: 'strength',
    roles: ['Carry', 'Disabler', 'Initiator', 'Durable'],
    abilities: [
      {
        name: 'Storm Hammer',
        description: 'Sven unleashes his magical gauntlet to stun enemy units.',
        isSignature: false,
      },
      {
        name: 'God\'s Strength',
        description: 'Sven channels his rogue knight strength, greatly increasing his damage.',
        isSignature: true,
      },
      {
        name: 'Great Cleave',
        description: 'Sven's attacks cleave to hit nearby units.',
        isSignature: false,
      },
    ],
    phrases: [
      'By the Vigil Sigil!',
      'Rogue Knight claims thee!',
      'In the name of the Vigil Knights!'
    ],
    behaviors: [
      'Uses God\'s Strength just to farm',
      'Blinks in and stuns the wrong target',
      'Wins all teamfights with one cleave'
    ],
    memes: [
      'Press R to win teamfight',
      'One-shot wonder',
      'Two-button hero: Blink + R'
    ],
    imageUrl: '/images/heroes/sven.jpg'
  },
  
  // AGILITY HEROES
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
  },
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    attribute: 'agility',
    roles: ['Carry', 'Pusher', 'Escape'],
    abilities: [
      {
        name: 'Blade Fury',
        description: 'Juggernaut spins with his blade extended, becoming immune to magic and dealing damage to nearby enemy units.',
        isSignature: true,
      },
      {
        name: 'Healing Ward',
        description: 'Summons a healing ward that heals nearby allies.',
        isSignature: false,
      },
      {
        name: 'Omnislash',
        description: 'Juggernaut leaps towards a target and slashes it and other nearby enemy units, becoming invulnerable for the duration.',
        isSignature: true,
      },
    ],
    phrases: [
      'I am the Juggernaut!',
      'You will see nothing but my blade!',
      'My blade thirsts!',
      'On the edge of my blade, balance!'
    ],
    behaviors: [
      'Omnislashes the support with full HP',
      'Uses Blade Fury to farm',
      'Forgets to use Healing Ward in fights',
      'Spins to avoid projectiles then walks into them anyway'
    ],
    memes: [
      'I\'m the Juggernaut, *beep*!',
      'Ult is ready = free kill',
      'Casually pushing: "My goals are beyond your understanding"'
    ],
    imageUrl: '/images/heroes/juggernaut.jpg'
  },
  {
    id: 'sniper',
    name: 'Sniper',
    attribute: 'agility',
    roles: ['Carry', 'Nuker'],
    abilities: [
      {
        name: 'Shrapnel',
        description: 'Launches a ball of shrapnel that showers an area, damaging and slowing enemies.',
        isSignature: false,
      },
      {
        name: 'Headshot',
        description: 'Sniper\'s attacks have a chance to slow and deal bonus damage.',
        isSignature: false,
      },
      {
        name: 'Assassinate',
        description: 'Sniper locks onto a target to fire a devastating shot that deals major damage.',
        isSignature: true,
      },
    ],
    phrases: [
      'Ho ho ha ha!',
      'Say goodbye to your head!',
      'Easy as shooting fish in a barrel!',
      'Thanks for standing still, ganker!'
    ],
    behaviors: [
      'Never buys escape items',
      'Always out of position',
      'Somehow survives anyway',
      'Claims to have "perfect positioning" while standing in front of enemy carry'
    ],
    memes: [
      'HOHO HAHA trauma flashbacks',
      'Stands in the back and does nothing but right-click',
      'The hero everyone loves to hate'
    ],
    imageUrl: '/images/heroes/sniper.jpg'
  },
  
  // INTELLIGENCE HEROES
  {
    id: 'crystal_maiden',
    name: 'Crystal Maiden',
    attribute: 'intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    abilities: [
      {
        name: 'Crystal Nova',
        description: 'A burst of damaging frost slows enemy movement and attack speed in an area.',
        isSignature: false,
      },
      {
        name: 'Frostbite',
        description: 'Encases an enemy unit in ice, preventing movement and attack, while dealing damage over time.',
        isSignature: true,
      },
      {
        name: 'Freezing Field',
        description: 'Creates a storm of ice and frost that damages enemies within a large radius.',
        isSignature: true,
      },
    ],
    phrases: [
      'Swift as the wolves of Icewrack!',
      'Stay frosty!',
      'Are you cool with that?',
      'Isn\'t it cold out here?'
    ],
    behaviors: [
      'Dies immediately in teamfights',
      'Always caught in the jungle',
      'Uses ultimate in the middle of 5 enemies',
      'Buys Glimmer Cape but forgets to use it'
    ],
    memes: [
      'CM is so slow that Techies mines expire before she crosses them',
      'The ward bot who dreams of carrying',
      'Freezing Field? More like "Please Kill Me" Field'
    ],
    imageUrl: '/images/heroes/crystal_maiden.jpg'
  },
  {
    id: 'invoker',
    name: 'Invoker',
    attribute: 'universal',
    roles: ['Carry', 'Nuker', 'Disabler', 'Escape', 'Initiator'],
    abilities: [
      {
        name: 'Quas',
        description: 'Provides regeneration and strengthens ice-based spells.',
        isSignature: false,
      },
      {
        name: 'Wex',
        description: 'Increases attack speed and movement speed and strengthens lightning-based spells.',
        isSignature: false,
      },
      {
        name: 'Exort',
        description: 'Boosts damage and strengthens fire-based spells.',
        isSignature: false,
      },
      {
        name: 'Invoke',
        description: 'Combines Quas, Wex, and Exort to create various spells.',
        isSignature: true,
      },
      {
        name: 'Sun Strike',
        description: 'Calls down a solar blast from above, dealing damage to enemies in a small area.',
        isSignature: true,
      },
      {
        name: 'Chaos Meteor',
        description: 'Summons a burning meteor that damages enemies along its path.',
        isSignature: true,
      },
    ],
    phrases: [
      'Behold the meatball!',
      'I am a beacon of knowledge blazing out across a black sea of ignorance.',
      'One of my favorites!',
      'So begins a new age of knowledge.'
    ],
    behaviors: [
      'Misses every Sun Strike',
      'Performs elaborate spell combos for minimum impact',
      'Thinks they\'re the smartest player in the game',
      'Ghost Walk escapes with 10 HP'
    ],
    memes: [
      'Invoker players have the biggest egos in Dota',
      'Types "?" after landing a basic combo',
      '"I play Invoker" = "I think I\'m Miracle-"'
    ],
    imageUrl: '/images/heroes/invoker.jpg'
  },
  {
    id: 'lion',
    name: 'Lion',
    attribute: 'intelligence',
    roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
    abilities: [
      {
        name: 'Earth Spike',
        description: 'Rock spikes burst from the earth along a straight path, damaging and stunning enemy units.',
        isSignature: false,
      },
      {
        name: 'Hex',
        description: 'Transforms an enemy unit into a harmless critter, disabling special abilities.',
        isSignature: true,
      },
      {
        name: 'Finger of Death',
        description: 'Lion drains a target\'s magical essence, dealing massive damage.',
        isSignature: true,
      },
    ],
    phrases: [
      'Go to hell and back and back to hell and back!',
      'I've been to hell and back, and back to hell and back.',
      'Ah, sweet suffering!',
      'Feel my claws in your back!'
    ],
    behaviors: [
      'Saves ultimate for kill stealing',
      'Claims to be "setting up kills" by taking them',
      'Chain disables a single enemy for 10 seconds',
      'Buys Blink Dagger just to finger enemies'
    ],
    memes: [
      'The ultimate kill stealer',
      '"It\'s not kill stealing, it\'s kill securing"',
      'Support with more kills than the carry'
    ],
    imageUrl: '/images/heroes/lion.jpg'
  },
  
  // UNIVERSAL HEROES
  {
    id: 'windranger',
    name: 'Windranger',
    attribute: 'universal',
    roles: ['Carry', 'Support', 'Disabler', 'Escape', 'Nuker'],
    abilities: [
      {
        name: 'Shackleshot',
        description: 'Windranger launches a shackle that latches a target to a tree or another enemy unit.',
        isSignature: true,
      },
      {
        name: 'Powershot',
        description: 'Windranger charges her bow for a powerful shot, damaging all enemies in its path.',
        isSignature: false,
      },
      {
        name: 'Windrun',
        description: 'Windranger runs swiftly, evading all physical attacks and increasing movement speed.',
        isSignature: false,
      },
      {
        name: 'Focus Fire',
        description: 'Windranger channels the wind to attack a single target with maximum attack speed.',
        isSignature: true,
      },
    ],
    phrases: [
      'Feel the wind in your hair!',
      'If you weren\'t so damned dead, I\'d shoot you again.',
      'Bullseye!',
      'The wind blows where it\'s needed.'
    ],
    behaviors: [
      'Takes all the farm as "support"',
      'Hits impossible shackles but misses the easy ones',
      'Buys Maelstrom before boots',
      'Always uses Focus Fire on full HP tanks'
    ],
    memes: [
      'The "support" with a Javelin at 10 minutes',
      'Core that buys one ward and claims to be a support',
      'Misses every Powershot but lands every blind Shackleshot'
    ],
    imageUrl: '/images/heroes/windranger.jpg'
  },
  {
    id: 'void_spirit',
    name: 'Void Spirit',
    attribute: 'universal',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler'],
    abilities: [
      {
        name: 'Aether Remnant',
        description: 'Creates a remnant that pulls in enemies passing in front of it.',
        isSignature: false,
      },
      {
        name: 'Dissimilate',
        description: 'Void Spirit temporarily shifts into the void, creating a ring of portals around his disappearance point.',
        isSignature: true,
      },
      {
        name: 'Astral Step',
        description: 'Void Spirit marks several points on the battlefield then dashes between them, damaging enemies along the way.',
        isSignature: true,
      },
    ],
    phrases: [
      'The void hungers!',
      'Knowledge from beyond the veil!',
      'Your fate was sealed the moment I chose you.',
      'Did you see that coming? No one ever does.'
    ],
    behaviors: [
      'Uses all mobility spells to engage but has none to escape',
      'Always tries to outplay but just dies',
      'Thinks they\'re playing a fighting game',
      'Makes flashy plays that accomplish nothing'
    ],
    memes: [
      'Too many buttons, not enough brains',
      'The epitome of "looks cool doing nothing"',
      'The hero everyone picks after watching a pro montage'
    ],
    imageUrl: '/images/heroes/void_spirit.jpg'
  }
];