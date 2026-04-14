/**
 * Static skills data used by the Skills section.
 * Skills are grouped by category so they can be rendered in separate columns.
 */

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML & CSS', level: 80 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'Symfony (PHP)', level: 90 },
    ],
  },
  {
    category: 'Tools & Ops',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 90 },
      { name: 'Linux / CLI', level: 85 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 70 },
    ],
  },
];

export default skills;
