# Technical Roadmap: Dota 2 Joke Generator

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│  User Interface │───▶│  Joke Generator │───▶│   Data Store    │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Project Setup

### Initialize Next.js Application

```bash
# Create Next.js app with TypeScript
npx create-next-app dota-2-joke-maker --typescript
cd dota-2-joke-maker

# Install dependencies
npm install tailwindcss postcss autoprefixer framer-motion
npm install @heroicons/react
npm install @vercel/analytics

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Directory Structure

```
dota-2-joke-maker/
├── public/
│   ├── images/
│   │   ├── heroes/
│   │   └── backgrounds/
├── src/
│   ├── components/
│   │   ├── HeroSelector.tsx
│   │   ├── JokeDisplay.tsx
│   │   ├── ScenarioSelector.tsx
│   │   ├── Button.tsx
│   │   └── Layout.tsx
│   ├── data/
│   │   ├── heroes.ts
│   │   ├── scenarios.ts
│   │   └── jokeTemplates.ts
│   ├── hooks/
│   │   └── useJokeGenerator.ts
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── _app.tsx
│   │   └── api/
│   │       └── generateJoke.ts
│   └── utils/
│       ├── templateEngine.ts
│       └── heroAttributes.ts
├── styles/
│   └── globals.css
└── types/
    ├── Hero.ts
    ├── Joke.ts
    └── Scenario.ts
```

## Development Milestones

### Milestone 1: Project Setup and Basic Structure
- [x] Create project plan documents
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Create basic layout component
- [ ] Setup GitHub repository
- [ ] Configure Vercel deployment

### Milestone 2: Data Modeling and State Management
- [ ] Define TypeScript interfaces for heroes, jokes, scenarios
- [ ] Create mock data for heroes
- [ ] Implement joke templates
- [ ] Create scenarios data
- [ ] Build state management for joke generation

### Milestone 3: Core UI Components
- [ ] Implement hero selection component
- [ ] Create scenario selection component
- [ ] Build joke display component
- [ ] Develop main page layout
- [ ] Implement responsive design

### Milestone 4: Joke Generation Logic
- [ ] Create template engine for joke generation
- [ ] Build joke randomization algorithm
- [ ] Implement hero attribute lookup
- [ ] Develop scenario matching system
- [ ] Create API endpoint for joke generation

### Milestone 5: Enhanced Features and Styling
- [ ] Add animations with Framer Motion
- [ ] Implement social sharing functionality
- [ ] Add Dota 2 themed styling
- [ ] Create loading states
- [ ] Implement PWA capabilities

### Milestone 6: Testing and Deployment
- [ ] Write unit tests for joke generation
- [ ] Conduct usability testing
- [ ] Optimize for performance
- [ ] Deploy to Vercel production
- [ ] Setup analytics

## Technical Implementation Details

### Hero Selection Component

The Hero Selection component will:
1. Display a grid of hero avatars
2. Allow filtering by attribute (STR/AGI/INT)
3. Support searching by name
4. Track selected heroes (1-3 max)
5. Show selected hero details

```tsx
// Simplified component structure
const HeroSelector = ({ 
  selectedHeroes, 
  onHeroSelect, 
  onHeroDeselect 
}: HeroSelectorProps) => {
  const [filter, setFilter] = useState<HeroAttribute | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter and search logic
  
  return (
    <div>
      {/* Search & Filter UI */}
      <div className="hero-grid">
        {filteredHeroes.map(hero => (
          <HeroCard 
            key={hero.id}
            hero={hero}
            isSelected={selectedHeroes.includes(hero.id)}
            onSelect={() => onHeroSelect(hero.id)}
            onDeselect={() => onHeroDeselect(hero.id)}
          />
        ))}
      </div>
      {/* Selected heroes display */}
    </div>
  );
};
```

### Joke Generation Logic

The joke generation will follow these steps:
1. Get user selections (heroes, scenario)
2. Filter appropriate templates based on selections
3. Select a random template from filtered options
4. Fill in template variables using hero attributes
5. Return formatted joke

```typescript
// Template engine
function generateJoke(
  selectedHeroes: Hero[], 
  selectedScenario: Scenario | null
): Joke {
  // Filter templates by scenario and number of heroes
  const eligibleTemplates = jokeTemplates.filter(template => 
    template.heroCount === selectedHeroes.length &&
    (!selectedScenario || template.scenarios.includes(selectedScenario.id))
  );
  
  // Select random template
  const template = getRandomItem(eligibleTemplates);
  
  // Process template variables
  let jokeText = template.text;
  
  // Replace hero variables
  selectedHeroes.forEach((hero, index) => {
    jokeText = jokeText
      .replace(`{hero${index+1}}`, hero.name)
      .replace(`{hero${index+1}_signature_move}`, getRandomItem(hero.signatureAbilities))
      .replace(`{hero${index+1}_catchphrase}`, getRandomItem(hero.phrases));
  });
  
  // Replace scenario variables if applicable
  if (selectedScenario) {
    jokeText = jokeText.replace('{scenario}', selectedScenario.name);
    // More scenario-specific replacements
  }
  
  // Return joke object
  return {
    id: generateId(),
    text: jokeText,
    heroes: selectedHeroes.map(h => h.id),
    scenario: selectedScenario?.id || null,
    template: template.id,
    timestamp: new Date().toISOString()
  };
}
```

## Data Schema

### Hero
```typescript
interface Hero {
  id: string;
  name: string;
  attribute: 'strength' | 'agility' | 'intelligence';
  roles: string[];
  abilities: {
    name: string;
    description: string;
    isSignature: boolean;
  }[];
  phrases: string[];
  behaviors: string[];
  relationships: {
    heroId: string;
    type: 'friend' | 'enemy' | 'rival';
    description: string;
  }[];
  memes: string[];
  imageUrl: string;
}
```

### Joke Template
```typescript
interface JokeTemplate {
  id: string;
  text: string;
  heroCount: number;
  scenarios: string[];
  category: 'interaction' | 'mechanics' | 'meta' | 'role';
  difficulty: 'beginner' | 'advanced';
  variables: string[]; // Variables that need replacement
}
```

### Scenario
```typescript
interface Scenario {
  id: string;
  name: string;
  description: string;
  gamePhase: 'early' | 'mid' | 'late';
  variables?: {
    name: string;
    possibleValues: string[];
  }[];
}
```

## Deployment and CI/CD

1. GitHub repository setup with main and development branches
2. Vercel project configuration:
   - Production: Connected to main branch
   - Preview: Connected to development branch and PRs
3. GitHub Actions for:
   - Running tests
   - Linting
   - Type checking

## Future Technical Considerations

1. **Data Storage**:
   - Initially: Static JSON files
   - Future: MongoDB for user favorites and custom templates

2. **Authentication**:
   - Next-Auth integration for social login
   - User profiles for saved jokes and preferences

3. **API Integration**:
   - OpenDota API for real-time hero data
   - Steam API for Dota 2 news integration

4. **Performance Optimization**:
   - Image optimization with next/image
   - Static generation for hero data
   - Client-side rendering for joke generation

5. **Accessibility**:
   - ARIA attributes
   - Keyboard navigation
   - Color contrast compliance 