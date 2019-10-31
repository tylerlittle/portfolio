import React from 'react';

export default function SkillsTitle(props) {
    return (
        <h2 style={{ color: props.color, borderBottom: 'solid 1px #f2f2f2', display: 'inline-block' }}>
            {props.title}
        </h2>
    )
}