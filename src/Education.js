import React from 'react';
import EducationTitle from './EducationTitle';
import EducationMajor from './EducationMajor';
import EducationGraduation from './EducationGraduation';
import './education.css';
import educationList from './educationList';
import Header from './Header';

export default function Education() {
    const color="#000";
    let education = [];
    for (var i=0; i < educationList.length; i++) {
        education.push(
            <div key={i}>
                <EducationTitle title={educationList[i].title} color={color} />
                <EducationMajor major={educationList[i].major} color={color} />
                <EducationGraduation graduation={educationList[i].graduation} color={color} />
            </div>
        )
    }

    return (
        <div className="educationContainer">
            <Header title="Education" color={color} />
            {education}
        </div>
    )
}