import React from 'react';

export default function ExperienceDuration(props) {
    return (
        <h3 style={{ color: props.color }}>
            {props.duration}
        </h3>
    )
}