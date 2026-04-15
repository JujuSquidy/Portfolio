import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

/**
 * Card component representing a single project.
 * Displays the project title, description, technology tags,
 * and links to the live demo and source repository.
 *
 * @param {Object}      project          - Project data object.
 * @param {string}      project.title    - Project title.
 * @param {string}      project.description - Short project description.
 * @param {string[]}    project.tags     - Technology tags used in the project.
 * @param {string|null} project.liveUrl  - Link to the deployed application, or null.
 * @param {string|null} project.repoUrl  - Link to the source repository, or null.
 * @param {boolean}     project.featured - Whether to apply a featured highlight.
 */
const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const { title, description, tags, liveUrl, repoUrl, featured } = project;

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      {featured && <span className="project-card__badge">{t('projects.featured')}</span>}

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      <ul className="project-card__tags" aria-label={t('projects.tagsAria')}>
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="project-card__links">
        {liveUrl && (
          <a
            href={liveUrl}
            className="project-card__link"
            target="_blank"
            rel="noreferrer"
            aria-label={t('projects.liveDemoAria', { title })}
          >
            {t('projects.liveDemo')}
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            className="project-card__link project-card__link--ghost"
            target="_blank"
            rel="noreferrer"
            aria-label={t('projects.sourceCodeAria', { title })}
          >
            {t('projects.sourceCode')}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
