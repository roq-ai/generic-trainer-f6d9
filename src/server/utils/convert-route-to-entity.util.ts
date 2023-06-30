const mapping: Record<string, string> = {
  courses: 'course',
  exercises: 'exercise',
  quizzes: 'quiz',
  topics: 'topic',
  trainers: 'trainer',
  'use-cases': 'use_case',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
