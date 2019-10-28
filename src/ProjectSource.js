import React from 'react';

export default function ProjectSource(props) {
    return (
        <h4 style={{ color: props.color }}>
            <a href={props.source} style={{ color: props.color }}>View Repo</a>
        </h4>
    )
}