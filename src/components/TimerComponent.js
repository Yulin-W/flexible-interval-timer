import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TimerDisplay from './TimerDisplay.js';
import TaskDisplay from './TaskDisplay.js';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";

const useStyles = theme => ({
    timer: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    timerActual: {
        width: "70%",
        flexGrow: 0.6
    },
    taskDisplayContainer: {
        flexGrow: 0.2
    },
    timerButtonContainer: {
        flexGrow: 0.2
    }
});

class TimerComponent extends React.Component {
    render() {
        const { classes } = this.props;
        const { start, stop, reset, current, next, hr, min, sec } = this.props.data;
        return (
            <Grid container item direction="column" alignItems="center" justify="space-evenly" className={classes.timer}>
                <Box item display="flex" flexDirection="column" alignItems="center" justifyContent="center" className={classes.taskDisplayContainer}>
                    <TaskDisplay current={current} next={next}></TaskDisplay>
                </Box>
                <Box item display="flex" flexDirection="column" alignItems="center" justifyContent="center" className={classes.timerActual}>
                    <TimerDisplay
                        hr={hr}
                        min={min}
                        sec={sec}
                    >
                    </TimerDisplay>
                </Box>
                <Box item display="flex" flexDirection="column" alignItems="center" justifyContent="center" className={classes.timerButtonContainer}>
                    <ButtonGroup item color="primary" size="large" variant="contained">
                        <Button onClick={start}>Start</Button>
                        <Button onClick={stop}>Stop</Button>
                        <Button onClick={() => { stop(); reset(); }}>Reset</Button>
                    </ButtonGroup>
                </Box>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(TimerComponent);