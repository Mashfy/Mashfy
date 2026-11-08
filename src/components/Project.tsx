import type { ReactNode } from 'react';
import Chip from '@mui/material/Chip';
import { projects, ProjectEntry } from '../data/portfolio';
import '../assets/styles/Project.scss';

function MaybeLink({ href, children }: { href?: string; children: ReactNode }) {
    if (!href) return <>{children}</>;
    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function ProjectCard({ project }: { project: ProjectEntry }) {
    return (
        <div className="project">
            <MaybeLink href={project.link}>
                {project.image ? (
                    <img src={project.image} className="project-cover-image zoom" alt={`${project.name} cover`} loading="lazy" />
                ) : (
                    <div className="project-cover zoom">
                        <span className="project-category">{project.category}</span>
                        <span className="project-cover-title">{project.name}</span>
                    </div>
                )}
            </MaybeLink>
            <MaybeLink href={project.link}>
                <h2 className={project.link ? 'linked' : undefined}>{project.name}</h2>
            </MaybeLink>
            <p className="project-meta">{project.context} · {project.period}</p>
            <p>{project.description}</p>
            <div className="flex-chips">
                {project.stack.map((label) => (
                    <Chip key={label} className='chip' label={label} />
                ))}
            </div>
        </div>
    );
}

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Notable Projects</h1>
        <div className="projects-grid">
            {projects.filter((project) => !project.hidden).map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    </div>
    );
}

export default Project;
