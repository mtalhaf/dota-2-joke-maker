# Dota 2 Joke Generator - Git Workflow

## Branching Strategy

We will follow a simplified version of the GitFlow workflow:

### Main Branches
- `main`: Production-ready code. Represents the official release history.
- `develop`: Integration branch for features. This is where features are tested before being merged to main.

### Supporting Branches
- `feature/<feature-name>`: Branch off from `develop`, merge back into `develop`
- `bugfix/<bug-name>`: Branch off from `develop`, merge back into `develop`
- `hotfix/<fix-name>`: Branch off from `main`, merge into both `main` and `develop`
- `release/<version>`: Branch off from `develop`, merge into both `main` and `develop`

### Branch Naming Conventions
- Use lowercase for all branch names
- Use hyphens to separate words
- Be descriptive but concise
- Include issue numbers when applicable

Examples:
- `feature/hero-selection-component`
- `feature/joke-generation-logic`
- `bugfix/hero-filter-not-working`
- `hotfix/security-vulnerability`
- `release/v1.0.0`

## Commit Message Style

We will follow the Conventional Commits specification:

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

### Scope
Optional, can be anything specifying the place of the commit change:
- `ui`: User interface components
- `api`: API related changes
- `hero`: Hero data or selection
- `joke`: Joke templates or generation
- `scenario`: Scenario data or selection
- `core`: Core functionality
- `deps`: Dependencies

### Description
- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

### Examples
```
feat(hero): add hero selection component
fix(joke): fix variable substitution in templates
docs(readme): update installation instructions
style(ui): improve button styling
refactor(api): simplify joke generation algorithm
perf(core): optimize hero filtering
test(joke): add tests for template engine
build(deps): update dependencies
ci(vercel): configure Vercel deployment
chore: organize file structure
```

## Pull Request Process

1. Create a feature branch from `develop`
2. Implement your changes
3. Write or update tests as needed
4. Ensure tests pass
5. Update documentation if needed
6. Submit a pull request to merge into `develop`
7. Request code review
8. Address review comments
9. Once approved, merge into `develop`

## Release Process

1. Create a release branch from `develop`
2. Perform final testing
3. Update version numbers
4. Create a pull request to merge into `main`
5. Once merged, tag the release in `main`
6. Merge changes back into `develop`

## GitHub Issues

Use GitHub issues to track tasks, bugs, and feature requests. Label issues appropriately:
- `bug`: Something isn't working
- `feature`: New feature request
- `enhancement`: Improvement to existing functionality
- `documentation`: Documentation improvements
- `question`: Further information is needed
- `good first issue`: Good for newcomers 