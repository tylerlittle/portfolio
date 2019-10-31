import React from 'react';
import './projects.css';
import projectList from './projectList';
import Header from './Header';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectTools from './ProjectTools';
import ProjectWebsite from './ProjectWebsite';
import ProjectSource from './ProjectSource';

export default function Projects() {
    const color="#000";
    let projects = [];
    for (var i=0; i < projectList.length; i++) {
        projects.push(
            <div key={projectList[i].title} style={{ paddingBottom: '3em' }}>
                <ProjectTitle title={projectList[i].title} color={color} />
                <ProjectDescription description={projectList[i].description} color={color} />
                <ProjectTools tools={projectList[i].tools} color={color} />
                <ProjectWebsite website={projectList[i].website} color={color} />
                {projectList[i].source ? <ProjectSource source={projectList[i].source} color={color} /> : null}
            </div>
        )
    }

    return (
        <div className="projectsContainer">
            <Header title="Projects" color={color} />
            {projects}
        </div>
    )
}