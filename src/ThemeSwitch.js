import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = { darkTheme: false }
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
  }

  handleThemeToggle() {
    this.setState({ darkTheme: !this.state.darkTheme })
  }

  render() {
    const darkTheme = this.state.darkTheme;

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={darkTheme}
                        onChange={this.handleThemeToggle}
                        value="darkTheme"
                        color="primary"
                    />
                }
                label="Dark Theme"
            />
        </div>
    );
  }
}

export default ThemeSwitch;
