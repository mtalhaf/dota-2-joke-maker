# Dota 2 Joke Templates

This document contains actual joke templates that will be implemented in our joke generation system. Each template has placeholders that will be dynamically replaced with hero-specific content.

## Single Hero Jokes

### Template S1: Signature Move
```
Why was {hero} kicked out of the library? 
Because they kept {signature_move} the books!
```

### Template S2: Profession
```
If {hero} wasn't a Dota hero, they'd be a {profession} because they're always {hero_behavior}!
```

### Template S3: Item Build
```
{hero} walks into a shop and asks for {item}. The shopkeeper says, "That'll be 5000 gold." {hero} replies, "{catchphrase}" and then {typical_behavior}.
```

### Template S4: Lane Behavior
```
How do you know when {hero} is in your lane? 
The {lane_indication_based_on_hero}!
```

### Template S5: Pick Rate
```
{hero} is like {real_world_comparison} - {punchline_based_on_hero_traits}.
```

### Template S6: Ultimate Ability
```
{hero}'s ultimate ability isn't actually {ultimate_name}, it's {joke_ultimate_based_on_stereotype}!
```

### Template S7: Meta Reference
```
Why doesn't {hero} need a teleport scroll? 
Because they're already {hero_meme_reference}!
```

### Template S8: Player Stereotype
```
You know you're playing with a {hero} main when {typical_player_behavior}.
```

### Template S9: Counters
```
{hero} is great against everything except {hero_weakness}, {punchline_about_weakness}.
```

### Template S10: Farm Priority
```
What's {hero}'s favorite place? 
The {map_location} because {reason_based_on_hero_behavior}!
```

## Two Hero Jokes

### Template D1: Duo Lane
```
When {hero1} and {hero2} lane together, it's like {analogy} - {punchline_based_on_hero_combination}.
```

### Template D2: Rivalry
```
{hero1} and {hero2} walk into a bar. {hero1} says "{hero1_catchphrase}" and {hero2} responds by {hero2_signature_move}!
```

### Template D3: Teamfight
```
In a team fight between {hero1} and {hero2}, {hero1} will always {hero1_behavior} while {hero2} is busy {hero2_behavior}.
```

### Template D4: Hero Comparison
```
The difference between {hero1} and {hero2} is that one {hero1_trait} while the other {hero2_trait}!
```

### Template D5: Hero Combo
```
What do you get when you combine {hero1} and {hero2}? 
A {punchline_combining_heroes}!
```

## Three Hero Jokes

### Template T1: Team Composition
```
{hero1}, {hero2}, and {hero3} walk into Roshan's pit. 
{hero1} {hero1_action}, {hero2} {hero2_action}, and {hero3} just {hero3_typical_behavior}!
```

### Template T2: Role Distribution
```
In a team with {hero1}, {hero2}, and {hero3}, guess who's buying the wards? 
{punchline_based_on_support_stereotype}!
```

### Template T3: Pub Match
```
When your team picks {hero1}, {hero2}, and {hero3}, the enemy team knows {funny_conclusion}.
```

## Scenario-Based Jokes

### Template SC1: Early Game
```
During the laning phase, {hero} players are known for {early_game_behavior}, and then they blame {blame_target} when it goes wrong!
```

### Template SC2: Mid Game
```
At the 20-minute mark, {hero} is usually {mid_game_activity} while everyone else is {team_activity}.
```

### Template SC3: Late Game
```
In the late game, the scariest words you can hear are "{hero} has {key_item}" because that means {consequence}!
```

### Template SC4: Teamfight
```
During a teamfight at Roshan, {hero} will {teamfight_behavior} and then type "{typical_chat_message}" in all chat.
```

### Template SC5: Push Strategy
```
When {hero} is pushing your high ground, don't worry about the towers. Worry about {actual_threat_related_to_hero}!
```

## Attribute-Based Jokes

### Template A1: Strength Heroes
```
You know you're playing a strength hero like {hero} when your strategy is {strength_hero_stereotype}.
```

### Template A2: Agility Heroes
```
The problem with agility heroes like {hero} is they {agility_hero_issue} and then expect {unreasonable_expectation}.
```

### Template A3: Intelligence Heroes
```
Intelligence heroes like {hero} think they're so smart until {intelligence_hero_reality_check}.
```

## Implementation Details

Each template will be stored in our system with the following metadata:

```typescript
{
  id: "S1", // Template ID
  text: "Why was {hero} kicked out of the library? Because they kept {signature_move} the books!",
  heroCount: 1,
  scenarios: ["general"],
  category: "behavior",
  difficulty: "beginner",
  variables: ["hero", "signature_move"],
  filters: {
    requiresSignatureMove: true
  }
}
```

## Variable Substitution Rules

For each template variable, we'll define substitution rules:

1. `{hero}`, `{hero1}`, `{hero2}`, `{hero3}` - Direct substitution with hero name
2. `{signature_move}` - Random selection from hero's signature abilities
3. `{catchphrase}` - Random selection from hero's voice lines
4. `{hero_behavior}` - Random selection from hero's stereotypical behaviors
5. `{profession}` - Selected based on hero attributes and role
6. `{punchline_*}` - Complex substitution based on multiple hero attributes
7. `{typical_behavior}` - Selected from behavior database with hero-specific weights
8. `{item}` - Common or signature item for the hero

## Example Filled Templates

### Example 1:
Template: "Why was {hero} kicked out of the library? Because they kept {signature_move} the books!"

With Pudge: "Why was Pudge kicked out of the library? Because they kept hooking the books!"

### Example 2:
Template: "You know you're playing with a {hero} main when {typical_player_behavior}."

With Invoker: "You know you're playing with an Invoker main when they blame the team for not following up on their 'perfect' combo."

### Example 3:
Template: "In a team with {hero1}, {hero2}, and {hero3}, guess who's buying the wards? {punchline_based_on_support_stereotype}!"

With Faceless Void, Anti-Mage, and Crystal Maiden: "In a team with Faceless Void, Anti-Mage, and Crystal Maiden, guess who's buying the wards? Crystal Maiden, with what little gold she can find between deaths!" 