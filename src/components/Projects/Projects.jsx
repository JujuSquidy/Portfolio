import projectsData from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Projects section that renders a responsive grid of project cards
 * sourced from the projects data file.
 */
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of work — both professional and personal
        </p>

        <div className="projects__grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
