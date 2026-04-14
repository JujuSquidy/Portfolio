/**
 * Static project data used by the Projects section.
 * Each entry describes one project card displayed in the grid.
 */

const projects = [
  {
    id: 1,
    title: 'Monitoring Dashboard',
    description:
      'A full-stack web application built with React and Node.js that lets users manage tasks with real-time collaboration features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Beta',
    description:
      'A responsive e-commerce storefront powered by a REST API, featuring cart management, product filtering, and secure checkout flow.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Gamma',
    description:
      'A CLI tool written in Python that automates deployment pipelines and generates structured release notes from Git history.',
    tags: ['Python', 'Click', 'Git', 'Docker'],
    liveUrl: null,
    repoUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Project Delta',
    description:
      'A data-visualisation dashboard that ingests CSV files and renders interactive charts using D3.js and a lightweight Flask backend.',
    tags: ['D3.js', 'Flask', 'Pandas', 'CSS Grid'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
];

export default projects;
