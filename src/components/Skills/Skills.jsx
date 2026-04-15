import { useTranslation } from 'react-i18next';
import SkillBar from './SkillBar';
import './Skills.css';

/**
 * Skills section that displays grouped proficiency bars for each category
 * defined in translations.
 */
const Skills = () => {
  const { t } = useTranslation();
  const skillsData = t('skills.groups', { returnObjects: true });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          {t('skills.titleBefore')} <span className="highlight">{t('skills.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">{t('skills.subtitle')}</p>

        <div className="skills__grid">
          {skillsData.map(({ category, items }) => (
            <div key={category} className="skills__group">
              <h3 className="skills__group-title">{category}</h3>
              <div className="skills__bars">
                {items.map(({ name, level }) => (
                  <SkillBar key={name} name={name} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
