import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Projects section that renders a responsive grid of project cards
 * sourced from translations, with category filters.
 */
const Projects = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('schoolProfessional');
  const projectsData = t('projects.items', { returnObjects: true });

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.category === activeCategory),
    [projectsData, activeCategory]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          {t('projects.titleBefore')} <span className="highlight">{t('projects.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>

        <div className="projects__tabs" role="tablist" aria-label={t('projects.filterAria')}>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'schoolProfessional'}
            className={`projects__tab${activeCategory === 'schoolProfessional' ? ' projects__tab--active' : ''}`}
            onClick={() => setActiveCategory('schoolProfessional')}
          >
            {t('projects.filters.schoolProfessional')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'personal'}
            className={`projects__tab${activeCategory === 'personal' ? ' projects__tab--active' : ''}`}
            onClick={() => setActiveCategory('personal')}
          >
            {t('projects.filters.personal')}
          </button>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
