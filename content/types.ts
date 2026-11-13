import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  location: z.string(),
  email: z.string(),
  availability: z.string().nullable(),
  workPreference: z.string().nullable(),
  links: z.object({
    linkedin: z.string(),
    github: z.string(),
    resumePdf: z.string(),
  }),
  summary: z.string(),
  originStory: z.string(),
})

export const experienceSchema = z.object({
  org: z.string(),
  title: z.string(),
  location: z.string(),
  period: z.string(),
  verified: z.boolean(),
  bullets: z.array(z.string()),
  stack: z.array(z.string()),
  whatILearned: z.string(),
})

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  status: z.string(),
  oneLiner: z.string(),
  links: z.object({
    repo: z.string(),
    preview: z.string(),
  }),
  stack: z.array(z.string()),
  highlights: z.array(z.string()),
  metrics: z.array(z.string()),
  verified: z.boolean(),
  problem: z.string().nullable(),
  constraints: z.string().nullable(),
  architecture: z.string().nullable(),
  keyDecisions: z.array(z.string()).nullable(),
  evaluation: z.string().nullable(),
  results: z.string().nullable(),
  nextSteps: z.array(z.string()).nullable(),
})

export const skillsSchema = z.object({
  languages: z.array(z.string()),
  aiMl: z.array(z.string()),
  backend: z.array(z.string()),
  frontend: z.array(z.string()),
  databases: z.array(z.string()),
  devops: z.array(z.string()),
  practices: z.array(z.string()),
  core: z.array(z.string()),
})

export type Profile = z.infer<typeof profileSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Project = z.infer<typeof projectSchema>
export type Skills = z.infer<typeof skillsSchema>
