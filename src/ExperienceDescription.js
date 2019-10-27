import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';

export default function ExperienceDescription(props) {
    return (
        <Grid container direction="row" alignItems="center" style={{ paddingBottom: "1em" }}>
            <Grid item>
                <CodeIcon style={{ color: props.color, paddingRight: ".5em" }} />
                <span style={{ color: props.color }}>{props.description}</span>
            </Grid>
        </Grid>
    )
}