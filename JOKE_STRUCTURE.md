# Dota 2 Joke Structure and Templates

## Joke Generation Approach

Our joke generator will use a template-based system with variable substitution based on:
1. Selected heroes
2. Hero attributes (strength, agility, intelligence)
3. Hero abilities
4. Hero roles (carry, support, etc.)
5. Game mechanics

## Template Structure

Templates will follow this basic structure:
```
{setup} + {hero_reference} + {punchline}
```

Where:
- `{setup}`: Sets the context for the joke
- `{hero_reference}`: References one or more selected heroes
- `{punchline}`: Delivers the humor, often with a twist related to the hero or game mechanic

## Template Categories

### 1. Hero Interactions
Jokes about how heroes interact with each other in-game.

Example:
```
When {hero1} and {hero2} walk into a bar, {hero1} orders a drink while {hero2} {hero2_signature_move}.
```

### 2. Game Mechanics
Jokes referencing game mechanics like farming, warding, or team fights.

Example:
```
Why did {hero} cross the river? To {hero_common_action} and then blame the support!
```

### 3. Meta References
Jokes about the current game meta, patches, or professional play.

Example:
```
{hero} would make a great financial advisor. They're always saying "{hero_catchphrase}" while managing their {hero_resource}.
```

### 4. Role-based Jokes
Jokes based on the traditional roles in Dota 2.

Example:
```
How many {role} players does it take to change a lightbulb? None, they expect the {opposite_role} to do it.
```

## Sample Templates with Hero Variations

### Template 1:
Base: "Why couldn't {hero} secure the bounty rune? Because they were too busy {action}!"

With Pudge: "Why couldn't Pudge secure the bounty rune? Because they were too busy missing hooks!"

With Crystal Maiden: "Why couldn't Crystal Maiden secure the bounty rune? Because they were too busy being slower than a courier with broken legs!"

### Template 2:
Base: "What does {hero} say to their team after losing a teamfight? {punchline}"

With Invoker: "What does Invoker say to their team after losing a teamfight? 'I would have landed my combo if you all didn't get in the way!'"

With Anti-Mage: "What does Anti-Mage say to their team after losing a teamfight? 'I told you I needed 30 more minutes of farming!'"

## Hero-specific Attributes for Joke Generation

For each hero, we'll store:
- Signature abilities
- Common phrases or voice lines
- Stereotypical player behaviors
- Hero relationships
- Common community memes

## User Selection Interface

The user interface will allow for:
1. Selecting 1-3 heroes for the joke
2. Choosing a joke category/theme
3. Setting a tone (friendly, sarcastic, etc.)
4. Optional: Specify game scenario (laning, teamfight, etc.)

## Algorithm Flowchart

1. User selects heroes and parameters
2. System selects appropriate templates based on:
   - Number of heroes selected
   - Hero roles
   - Selected category/theme
3. System fills in template variables with:
   - Hero names
   - Hero-specific attributes
   - Contextual game references
4. Final joke is displayed to user
5. Option to regenerate with same parameters

## Future Enhancements

- Dynamic joke rating to improve template selection over time
- User-submitted templates with moderation
- Integration with recent patch notes for timely references
- Voice line audio clips paired with jokes 