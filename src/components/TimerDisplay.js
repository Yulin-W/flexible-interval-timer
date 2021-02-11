import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    // Reserved in case of use
    timeText: {
        color: theme.palette.primary.main,
        userSelect: "none" // so that you cannot highlight the time, did so for personal aesthetics
    },
    timerContainer: {
        width: 350,
        height: 350,
        borderRadius: "50%", // Ensures circular shape
        borderColor: theme.palette.primary.main,
    },
}));

export default function TimerDisplay({hr, min, sec}) {
    const classes = useStyles();
    return (
        <Box border={1} className={classes.timerContainer} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Grid container direction="row" justify="center">
                <Typography item variant="h3" className={classes.timeText}>{hr}</Typography>
                <Typography item variant="h3" className={classes.timeText}>:</Typography>
                <Typography item variant="h3" className={classes.timeText}>{min}</Typography>
                <Typography item variant="h3" className={classes.timeText}>:</Typography>
                <Typography item variant="h3" className={classes.timeText}>{sec}</Typography>
            </Grid>
        </Box>
    );
}