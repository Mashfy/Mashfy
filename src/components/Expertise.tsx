import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faUsersGear, faSitemap, faDatabase, faChartLine, faServer } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { expertise, ExpertiseArea } from '../data/portfolio';
import '../assets/styles/Expertise.scss';

const icons: Record<ExpertiseArea['icon'], IconDefinition> = {
    leadership: faUsersGear,
    architecture: faSitemap,
    database: faDatabase,
    data: faChartLine,
    backend: faServer,
    devops: faDocker,
};

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {expertise.map((area) => (
                    <div className="skill" key={area.title}>
                        <FontAwesomeIcon icon={icons[area.icon]} size="3x"/>
                        <h3>{area.title}</h3>
                        <p>{area.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Toolkit:</span>
                            {area.stack.map((label) => (
                                <Chip key={label} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
