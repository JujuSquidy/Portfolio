import skillsData from '../../data/skills';
import SkillBar from './SkillBar';
import './Skills.css';

/**
 * Skills section that displays grouped proficiency bars for each category
 * defined in the skills data file.
 */
const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="highlight">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies I work with regularly</p>

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
