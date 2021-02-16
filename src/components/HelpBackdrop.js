import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    helpContainer: {
        width: "70%"
    },
    helpEntry: {
        marginTop: 5,
        marginBottom: 5,
    },
    helpButton: {
        position: "absolute",
        top: 5,
        right: 10,
    }
}));

const helpTextTitle = "Welcome!";
const helpTextDesc = "This is a timer for making schedules of tasks of specified durations. It is great for Pomodoro, HIIT, and many situations where interval timers are needed. Once a task is done, a notification will be made.";
const helpStart = "To begin, try the currently loaded schedule by pressing start, or click Schedule at the bottom to make your own task list. Note that you can set periods such as 90s and not worry about converting to minutes, the app will do that for you.";
const helpPageDescHeader = "What the three pages do";
const helpTimerDesc = "Timer: countdown of current task and display of current/next tasks.";
const helpScheduleDesc = "Schedule: customization of schedule of tasks is done.";
const helpSummaryDesc = "Summary: total time and breakdown of time use.";
const helpText = "Click anywhere to exit help";

export default function HelpBackdrop() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true); // Defaults to being opened
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button variant="text" color="primary" onClick={handleToggle} className={classes.helpButton} size="small">
                Help
            </Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <Grid className={classes.helpContainer} container direction="column" justify="center" alignItems="flex-start">
                    <Typography className={classes.helpEntry} item variant="h3">{helpTextTitle}</Typography>
                    <Typography className={classes.helpEntry} item variant="h6">{helpTextDesc}</Typography>
                    <Typography className={classes.helpEntry} item variant="h6">{helpStart}</Typography>
                    <Typography className={classes.helpEntry} item variant="h5">{helpPageDescHeader}</Typography>
                    <Typography className={classes.helpEntry} item variant="h6">{helpTimerDesc}</Typography>
                    <Typography className={classes.helpEntry} item variant="h6">{helpScheduleDesc}</Typography>
                    <Typography className={classes.helpEntry} item variant="h6">{helpSummaryDesc}</Typography>
                    <Typography className={classes.helpEntry} item variant="h5">{helpText}</Typography>
                </Grid>
            </Backdrop>
        </div>
    );
}