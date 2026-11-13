import { profile, experiences, projects, skills } from './index'

export const portfolioContext = `
IDENTITY:
Name: ${profile.name}
Headline: ${profile.headline}
Location: ${profile.location}
Email: ${profile.email}
Summary: ${profile.summary}
Origin Story: ${profile.originStory}

EXPERIENCE:
${experiences.map(e => `- ${e.title} at ${e.org} (${e.period}): ${e.bullets.join(' ')} Stack: ${e.stack.join(', ')}. What I learned: ${e.whatILearned}`).join('\n')}

PROJECTS:
${projects.map(p => `- ${p.title} (${p.subtitle}) [Status: ${p.status}]: ${p.oneLiner} Highlights: ${p.highlights.join(' ')} Stack: ${p.stack.join(', ')}`).join('\n')}

SKILLS:
- Core: ${skills.core.join(', ')}
- AI/ML: ${skills.aiMl.join(', ')}
- Languages: ${skills.languages.join(', ')}
- Backend: ${skills.backend.join(', ')}
- Frontend: ${skills.frontend.join(', ')}
- Databases: ${skills.databases.join(', ')}
- DevOps: ${skills.devops.join(', ')}
- Practices: ${skills.practices.join(', ')}
`
