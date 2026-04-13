import './SkillBar.css';

/**
 * Single animated progress bar representing one skill and its proficiency level.
 *
 * @param {string} name  - Display name of the skill.
 * @param {number} level - Proficiency percentage (0–100).
 */
function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency`}>
        <div
          className="skill-bar__fill"
          style={{ '--target-width': `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
