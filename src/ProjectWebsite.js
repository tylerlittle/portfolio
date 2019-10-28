import React from 'react';

export default function ProjectWebsite(props) {
    return (
        <h4 style={{ color: props.color }}>
            <a href={props.website} style={{ color: props.color }}>{props.website}</a>
        </h4>
    )
}