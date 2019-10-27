import React from 'react';
import EducationTitle from './EducationTitle';
import EducationMajor from './EducationMajor';
import EducationGraduation from './EducationGraduation';
import './education.css';
import educationList from './educationList';
import Header from './Header';

export default function Education() {

    let education = [];
    for (var i=0; i < educationList.length; i++) {
        education.push(
            <div key={i}>
                <EducationTitle title={educationList[i].title} />
                <EducationMajor major={educationList[i].major} />
                <EducationGraduation graduation={educationList[i].graduation} />
            </div>
        )
    }

    return (
        <div className="educationContainer">
            <Header title="Education" />
            {education}
        </div>
    )
}