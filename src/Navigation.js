import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-scroll';

export default function Navigation() {
    return (
        <AppBar>
            <Tabs variant="scrollable" centered value={false}>
                <Link to="experience" smooth={true}>
                    <Tab label='Experience' />
                </Link>
                <Link to="education" smooth={true}>
                    <Tab label='Education' />
                </Link>
                <Link to="skills" smooth={true}>
                    <Tab label='Skills' />
                </Link>
                <Link to="projects" smooth={true}>
                    <Tab label='Projects' />
                </Link>
                <Link to="contact" smooth={true}>
                    <Tab label='Contact' />
                </Link>
            </Tabs>
        </AppBar>
    )
}