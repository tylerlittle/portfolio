import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

export default function ExperienceDescription(props) {
    return (
        <Grid container direction="row" alignItems="center">
            <Grid item>
                <ArrowRightIcon style={{ color: props.color }} />
            </Grid>
            <Grid>
                <span style={{ color: props.color }}>{props.description}</span>
            </Grid>
        </Grid>
    )
}