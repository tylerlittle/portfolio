import React from 'react';
import ExperienceTitle from './ExperienceTitle';
import ExperienceDuration from './ExperienceDuration';
import ExperienceDescriptionContainer from './ExperienceDescriptionContainer';
import './experience.css';
import experienceList from './experienceList';
import Header from './Header';

export default function Experience() {

    let experiences = [];
    for (var i=0; i < experienceList.length; i++) {
        experiences.push(
            <div key={i}>
                <ExperienceTitle title={experienceList[i].title} />
                <ExperienceDuration duration={experienceList[i].duration} />
                <ExperienceDescriptionContainer description={experienceList[i].description} />
            </div>
        )
    }

    return (
        <div className="experienceContainer">
            <Header title="Experience" />
            {experiences}
        </div>
    )
}