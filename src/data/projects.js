/**
 * Static project data used by the Projects section.
 * Each entry describes one project card displayed in the grid.
 */

const projects = [
  {
    id: 1,
    title: 'Monitoring Dashboard',
    description:
      'A web application made with symfony that gather infos from an API that receive datas about rooms (temperature, humidity, air quality) and displays them in a dashboard with charts separated by rooms for eco-friendly monitoring of the building. Datas are gathered by some ESP32 microcontroller with connected sensors and sent to the API with simple curl requests.',
    tags: ['Symfony', 'C++', 'JavaScript', 'Twig', 'Teamwork', 'Testing'],
    liveUrl: null,
    repoUrl: '#',
    featured: false,
  },
  {
    id: 2,
    title: 'Retro video game',
    description:
      'A 2D game with upper camera view where the player has to shoot and avoid attacks of a growing number of enemies helped by power-ups and random upgrades. Made in C++ using Qt Creator, with simple graphics and animations made for free by a kind artist. Only compiled for Windows but can be compiled for macOS. Inspired by the game Vampire Survivor and made in a team of 3 people, with a product design and development time of around 3 months.',
    tags: ['C++', 'Qt', 'Git', 'Game Development', 'Teamwork', 'Testing'],
    liveUrl: null,
    repoUrl: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Mobile web app',
    description:
      'A mobile web application made for users of the previous project were they can create an account, see rooms latest datas, get notified if there is a problem with the room and be informed on what to do to fix the problem (open the window, turn off the heater, etc). A weekly leaderboard of top performers was also implemented to improve engagement of users. Made with React, a symfony API with API Platform and GitLab CI/CD with a Linter, php-cs-fixer, SonarQube, and php/js unit tests pipelines.',
    tags: ['React', 'CI/CD', 'Git', 'Docker', 'SonarQube', 'C++', 'API REST', 'Symfony', 'Testing', 'Teamwork', 'Playwright'],
    liveUrl: null,
    repoUrl: '#',
    featured: false,
  },
];

export default projects;
