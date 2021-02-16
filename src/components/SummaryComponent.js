import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import secondsToHmsString from '../scripts/secondsToHmsString';
import PieChartDisplay from './PieChartDisplay';

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    summary: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
}));

// Function to extract total elapsed time from data passed as prop from App, returns totalTime in seconds
const dataToTotalTime = data => {
    let totalTime = 0;
    for (const value of Object.values(data)) {
        totalTime += value;
    }
    return totalTime;
}

export default function SummaryComponent({data, func}) {
    const classes = useStyles();
    const hmsTotalTimeString = secondsToHmsString(dataToTotalTime(data));
    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center" data-tip="" data-for="chart" className={classes.summary}>
            <Typography variant="h4">Total Time: {hmsTotalTimeString}</Typography>
            <PieChartDisplay data={data} func={func}></PieChartDisplay>
        </Grid>
    );
}