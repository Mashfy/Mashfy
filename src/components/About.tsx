import { about } from '../data/portfolio';
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about">
      <div className="items-container">
        <h1>About Me</h1>
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="stats-grid">
            {about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
