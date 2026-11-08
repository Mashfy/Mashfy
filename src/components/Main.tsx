import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import avatar from '../assets/images/me.jpg';
import { profile } from '../data/portfolio';
import '../assets/styles/Main.scss';

function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><EmailIcon/></a>
    </div>
  );
}

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt={profile.name} />
        </div>
        <div className="content">
          <SocialLinks className="social_icons" />
          <h1>{profile.name}</h1>
          <p className="role">{profile.title} · <span className="org">{profile.organization}</span></p>
          <p className="tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="hero-button primary" href="#contact">Get in touch</a>
            <a className="hero-button" href={profile.resumeUrl} target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <SocialLinks className="mobile_social_icons" />
        </div>
      </div>
    </div>
  );
}

export default Main;
