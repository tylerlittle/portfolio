import React from 'react';

export default function ProjectTools(props) {
    return (
        <h4 style={{ color: props.color }}>
            Built with: {props.tools}
        </h4>
    )
}