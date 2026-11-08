import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from '../data/portfolio';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timeline.map((entry, index) => (
            <VerticalTimelineElement
              key={`${entry.organization}-${entry.date}`}
              className={`vertical-timeline-element--${entry.kind}${index === 0 ? ' current-role' : ''}`}
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={entry.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={entry.kind === 'education' ? faGraduationCap : faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.organization} · {entry.location}</h4>
              {entry.summary && <p className="timeline-summary">{entry.summary}</p>}
              <ul className="timeline-highlights">
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
