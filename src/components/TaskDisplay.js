import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    // Reserved in case of use
}));

export default function TaskDisplay({current, next}) {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center">
            <Typography item variant="h2">{current}</Typography>
            <Typography item variant="h5">Next: {next}</Typography>
        </Grid>
    );
}