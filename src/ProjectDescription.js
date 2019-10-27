import React from 'react';

export default function ProjectDescription(props) {
    return (
        <h4 style={{ color: props.color }}>
            {props.description}
        </h4>
    )
}