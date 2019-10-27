import React, { Component } from 'react';
import './App.css';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import { Grid } from '@material-ui/core';
import Logo from './Logo';
import './logo.css';

class App extends Component {

  render() {
    return (
      <Grid container direction='column' alignItems='center'>
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
      </Grid>
    );
  }
}

export default App;
