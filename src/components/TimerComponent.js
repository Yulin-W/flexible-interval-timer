import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Timer from 'react-compound-timer';
import TimerDisplay from './TimerDisplay.js';
import TaskDisplay from './TaskDisplay.js';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = theme => ({
    timer: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    timerActual: {
        width: "60%",
        flexGrow: 0.6
    },
});

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: "Current Task",
            nextTask: "Next Task",
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column" alignItems="center" justify="space-evenly" className={classes.timer}>
                <TaskDisplay item current="Current task" next="Next task"></TaskDisplay>
                <Timer
                    initialTime={10*60*1000} // This is in ms as that is what this imported component uses
                    direction="backward"
                    lastUnit="h" // Only compute time upto hours (not days)
                    startImmediately={false} // Defaults to paused
                    onReset={() => console.log('onReset hook')}
                    formatValue={(value) => (value.toString().padStart(2, '0'))}
                    checkpoints={[
                        {
                            time: 0,
                            callback: () => {console.log("Need to put go to next task function here, i think it shoudl be a function that is passed down from parent");}
                        }
                    ]}
                >
                    {({ start, stop, reset }) => (
                        <Grid container item direction="column" alignItems="center" justify="space-evenly" className={classes.timerActual}>
                            <TimerDisplay
                                item
                                hr={<Timer.Hours />}
                                min={<Timer.Minutes />}
                                sec={<Timer.Seconds />}
                            >
                            </TimerDisplay>
                            <ButtonGroup color="primary" size="large" variant="contained" item>
                                <Button onClick={start}>Start</Button>
                                <Button onClick={stop}>Stop</Button>
                                <Button onClick={reset}>Reset</Button>
                            </ButtonGroup>
                        </Grid>
                    )}
                </Timer>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(TimerComponent);