/**
 * Static skills data used by the Skills section.
 * Skills are grouped by category so they can be rendered in separate columns.
 */

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES2022+)', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 60 },
    ],
  },
  {
    category: 'Tools & Ops',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 65 },
      { name: 'Linux / CLI', level: 75 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'MongoDB', level: 70 },
    ],
  },
];

export default skills;
