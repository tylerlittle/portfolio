import React from 'react';

export default function SkillsDetails(props) {
    return (
        <h3 style={{ color: props.color}}>
            {props.skills}
        </h3>
    )
}