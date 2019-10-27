import React, { Component } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

class ExperienceDescription extends Component {
    render() {
        return (
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <ArrowRightIcon style={{ color: '#f2f2f2'}} />
                </Grid>
                <Grid>
                    <span style={{ color: '#f2f2f2' }}>{this.props.description}</span>
                </Grid>
            </Grid>
        )
    }
}

export default ExperienceDescription;