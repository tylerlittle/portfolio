import React from 'react';
import Header from './Header';
import skillsList from './skillsList';
import SkillsTitle from './SkillsTitle';
import SkillsDetails from './SkillsDetails';

import './skills.css';

export default function Skills() {
    const color = '#f2f2f2';

    let skills = [];
    for (var i=0; i < skillsList.length; i++) {
        skills.push(
            <div key={skillsList[i].title} style={{ paddingBottom: '1.5em'}}>
                <SkillsTitle title={skillsList[i].title} color={color} />
                <SkillsDetails skills={skillsList[i].skills} color={color} />
            </div>
        )
    }

    return(
        <div className="skillsContainer">
            <Header title='Skills' color={color} />
            {skills}
        </div>
    )
}