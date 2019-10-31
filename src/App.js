import React, { Component } from 'react';
import Navigation from './Navigation';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Element } from 'react-scroll';
import { Grid } from '@material-ui/core';
import Logo from './Logo';
import './App.css';
import './logo.css';

class App extends Component {

  render() {
    return (
      <Grid container direction='column' alignItems='center'>
        <Navigation />
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Element name="experience">
            <Experience />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="education">
            <Education />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="skills">
            <Skills />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="projects">
            <Projects />
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="contact">
            <Contact />
          </Element>
        </Grid>
      </Grid>
    );
  }
}

export default App;
