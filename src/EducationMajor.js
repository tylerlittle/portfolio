import React from 'react';

export default function EducationMajor(props) {
    return (
        <h3 style={{ color: props.color }}>
            {props.major}
        </h3>
    )
}