import React from 'react';

export default function EducationGraduation(props) {
    return (
        <h4 style={{ color: props.color }}>
            {props.graduation}
        </h4>
    )
}