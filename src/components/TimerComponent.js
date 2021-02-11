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
        width: "100%",
        flexGrow: 0.6
    },
    taskDisplayContainer: {
        flexGrow: 0.2
    }
});

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const { start, stop, reset, current, next, hr, min, sec } = this.props.data;
        return (
            <Grid container item direction="column" alignItems="center" justify="space-evenly" className={classes.timer}>
                <Box item className={classes.taskDisplayContainer}>
                    <TaskDisplay current={current} next={next}></TaskDisplay>
                </Box>
                <Box item className={classes.timerActual}>
                    <TimerDisplay
                        hr={hr}
                        min={min}
                        sec={sec}
                    >
                    </TimerDisplay>
                </Box>
                <ButtonGroup item color="primary" size="large" variant="contained" item>
                    <Button onClick={start}>Start</Button>
                    <Button onClick={stop}>Stop</Button>
                    <Button onClick={() => { stop(); reset(); }}>Reset</Button>
                </ButtonGroup>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(TimerComponent);