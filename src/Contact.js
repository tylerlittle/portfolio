import React from 'react';
import Header from './Header';
import './contact.css';

export default function Contact(props) {
    let color = '#f2f2f2';
    return (
        <div className='contactContainer'>
            <Header title='Contact Me' color={color} />
            <a href={"mailto:tylerlittledev@gmail.com"} style={{ color: color }}><h3>tylerlittledev@gmail.com</h3></a>
            <a href="https://github.com/tylerlittle" style={{ color: color }}><h3>Github</h3></a>
        </div>
    )
}