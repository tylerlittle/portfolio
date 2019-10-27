import React from 'react';
import ExperienceTitle from './ExperienceTitle';
import ExperienceDuration from './ExperienceDuration';
import ExperienceDescriptionContainer from './ExperienceDescriptionContainer';
import './experience.css';
import experienceList from './experienceList';
import Header from './Header';

export default function Experience() {
    const color="#f2f2f2";
    let experiences = [];
    for (var i=0; i < experienceList.length; i++) {
        experiences.push(
            <div key={experienceList[i].title} style={{ paddingBottom: "3em" }}>
                <ExperienceTitle title={experienceList[i].title} color={color} />
                <ExperienceDuration duration={experienceList[i].duration} color={color} />
                <ExperienceDescriptionContainer description={experienceList[i].description} color={color} />
            </div>
        )
    }

    return (
        <div className="experienceContainer">
            <Header title="Experience" color={color} />
            {experiences}
        </div>
    )
}