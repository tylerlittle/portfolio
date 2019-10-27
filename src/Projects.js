import React from 'react';
import './projects.css';
import projectList from './projectList';
import Header from './Header';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';

export default function Projects() {
    const color="#f2f2f2";
    let projects = [];
    for (var i=0; i < projectList.length; i++) {
        projects.push(
            <div key={projectList[i].title}>
                <ProjectTitle title={projectList[i].title} color={color} />
                <ProjectDescription description={projectList[i].description} color={color} />
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