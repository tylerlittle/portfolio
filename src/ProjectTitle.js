import React from 'react';

export default function ProjectTitle(props) {
    return (
        <h2 style={{ color: props.color }}>
            {props.title}
        </h2>
    )
}