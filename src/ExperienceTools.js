import React from 'react';

export default function ExperienceTools(props) {
    return (
        <h4 style={{ color: props.color }}>
            Primary Tools/Technologies Used: {props.tools}
        </h4>
    )
}