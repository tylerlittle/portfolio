import React from 'react';
import ExperienceDescription from './ExperienceDescription';

export default function ExperienceDescriptionContainer(props) {
    let descriptionArray = [];
    for (var i = 0; i < props.description.length; i++) {
        descriptionArray.push(<ExperienceDescription key={i} description={props.description[i]} color={props.color} />);
    }
    return (
        <div style={{ display: "inline-block", width: "75%" }}>
            {descriptionArray}
            <br />
        </div>
    )
}