import React from 'react';
import './projects.css';
import projectList from './projectList';
import Header from './Header';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';

export default function Projects() {

    let projects = [];
    for (var i=0; i < projectList.length; i++) {
        projects.push(
            <div key={i}>
                <ProjectTitle title={projectList[i].title} />
                <ProjectDescription description={projectList[i].description} />
            </div>
        )
    }

    return (
        <div className="projectsContainer">
            <Header title="Projects" />
            {projects}
        </div>
    )
}