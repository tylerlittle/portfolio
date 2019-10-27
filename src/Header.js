import React from 'react';

export default function Header(props) {
    return (
        <h1 style={{ display: 'inline-block', width: '75%', borderBottom: '1px solid', marginTop: '3em', paddingBottom: '1em', color: props.color }}>
            {props.title}
        </h1>
    )
}