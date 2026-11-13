import { profile, experiences, projects, skills } from '../content'

function scanForTodo(obj: unknown, path = ''): void {
  if (typeof obj === 'string') {
    if (obj.includes('TODO')) {
      throw new Error(`[BUILD ERROR] Found forbidden string "TODO" at path: ${path} ("${obj}")`)
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => scanForTodo(item, `${path}[${index}]`))
  } else if (obj !== null && typeof obj === 'object') {
    Object.entries(obj).forEach(([key, value]) => {
      scanForTodo(value, path ? `${path}.${key}` : key)
    })
  }
}

try {
  scanForTodo({ profile, experiences, projects, skills })
  console.log('[CONTENT CHECK] PASSED: Zero "TODO" strings found in validated content.')
} catch (err: any) {
  console.error(err.message)
  process.exit(1)
}
