import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function TaskDisplay({current, next}) {
    return (
        <Grid container direction="column" alignItems="center">
            <Typography item variant="h2">{current}</Typography>
            <Typography item variant="h5">Next: {next}</Typography>
        </Grid>
    );
}