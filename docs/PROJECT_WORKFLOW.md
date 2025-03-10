# Dota 2 Joke Generator - Project Workflow

## Ways of Working

This document outlines our agreed ways of working for the Dota 2 Joke Generator project. It covers our development process, use of MCP servers, task management, and communication protocols.

## Development Process

### 1. Setup and Planning
- We follow the planning documents outlined in PROJECT_PLAN.md
- Technical implementation follows TECHNICAL_ROADMAP.md
- Git workflow follows the conventions in WORKFLOW.md

### 2. Task Management
- Tasks are tracked in TASKS.md
- Each task should be assigned to a team member
- Tasks should be updated at the end of each work session
- When a task is completed, move it from "Current Sprint" to "Completed Tasks" and update the date

### 3. Code Review Process
- All code changes require at least one review
- Code reviews should focus on:
  - Code quality and adherence to standards
  - Functionality testing
  - Performance considerations
  - Security implications
- Reviewers should provide constructive feedback
- Reviews should be completed within 24 hours when possible

## MCP Server Usage

### 1. MCP Server Integration
- We will use MCP servers for deployment and hosting where possible
- All production deployments will be done via MCP
- Development environments can be set up locally or on MCP

### 2. MCP Deployment Process
1. Code is pushed to the appropriate branch (develop or main)
2. CI/CD pipeline is triggered automatically
3. Automated tests are run
4. Upon successful tests, deployment to MCP servers is initiated
5. Post-deployment checks are performed

### 3. MCP Resources
- Project will be set up on Vercel via MCP
- Environment variables will be managed through MCP
- Domain configuration will be handled through MCP
- Analytics and monitoring will utilize MCP tools

## Task Completion Workflow

When completing a task, follow this process:

1. **Implement the Task**
   - Follow the technical specifications
   - Ensure code meets quality standards
   - Add appropriate tests

2. **Test Your Implementation**
   - Run local tests
   - Verify functionality works as expected
   - Check for any regressions

3. **Submit for Review**
   - Create a pull request
   - Link to relevant issues
   - Provide a clear description of changes

4. **Update Task List**
   - Move task from "Current Sprint" to "Completed Tasks" in TASKS.md
   - Add the completion date
   - Add any notes or lessons learned

5. **Deployment (if applicable)**
   - Deploy to development/staging environment
   - Verify deployment was successful
   - Document any deployment-specific steps

## Communication

- Regular team check-ins will occur weekly
- Project updates will be shared through Discord
- Technical discussions should be documented in GitHub discussions or issues
- Major decisions should be documented in the appropriate markdown files

## Quality Standards

- All code must follow the TypeScript and React best practices
- UI components should be responsive and accessible
- Code should include appropriate comments and documentation
- Performance should be a consideration in all implementations

## Continuous Improvement

We are committed to continuous improvement in our process:

- Retrospectives will be held at the end of each sprint
- Process improvements will be documented and implemented
- Team members are encouraged to suggest improvements at any time

---

*This document is subject to updates as our process evolves. Last updated: March 10, 2023* 