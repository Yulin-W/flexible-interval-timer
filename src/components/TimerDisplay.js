import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    // Reserved in case of use
    timeText: {
        userSelect: "none" // so that you cannot highlight the time, did so for personal aesthetics
    },
    timerContainer: {
        width: "100%",
        borderRadius: 200 // Placed a very large number so that borders are round
    }
}));

export default function TimerDisplay({hr, min, sec}) {
    const classes = useStyles();
    return (
        <Button variant="outlined" color="primary" size="large" className={classes.timerContainer}>
            <Grid container direction="row" justify="center">
                <Typography item variant="h3" className={classes.timeText}>{hr}</Typography>
                <Typography item variant="h3" className={classes.timeText}>:</Typography>
                <Typography item variant="h3" className={classes.timeText}>{min}</Typography>
                <Typography item variant="h3" className={classes.timeText}>:</Typography>
                <Typography item variant="h3" className={classes.timeText}>{sec}</Typography>
            </Grid>
        </Button>
    );
}