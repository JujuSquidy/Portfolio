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
      { name: 'HTML & CSS', level: 80 },
      { name: 'Vite', level: 80 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Symfony (PHP)', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    category: 'Tools & Ops',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'MongoDB', level: 60 },
    ],
  },
];

export default skills;
