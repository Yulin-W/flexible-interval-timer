import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PieChart } from 'react-minimal-pie-chart';
import pieChartTheme from '../pieChartTheme.js';
import ReactTooltip from 'react-tooltip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import secondsToHmsString from '../scripts/secondsToHmsString'

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    chartContainer: {
        height: 350,
        width: 350,
    },
}));

// Function for converting the data passed as prop from App into the format the PieChart component requires
const dataToPieChartdata = data => {
    let chartData = []
    let index = 0;
    for (const [key, value] of Object.entries(data)) {
        // Only include in chart if entry's time value > 0, i.e. task has been done for some time
        if (value > 0) {
            chartData.push({
                title: key,
                value: value,
                color: pieChartTheme[index % pieChartTheme.length]
            });
            index++;
        }
    }
    // Return chartData only if it has more than 1 entry with value > 0, else return null to signal no chartable data
    return chartData.length > 0 ? chartData : null
}

// Function for generating tooltip content
const tooltipContent = (index, chartData) => {
    return secondsToHmsString(chartData[index].value);
}

export default function PieChartDisplay({data, func}) {
    const [hovered, setHovered] = React.useState(0);
    const classes = useStyles();
    const chartData = dataToPieChartdata(data);
    const lineWidth = 30;
    if (chartData) {
        return (
            <Grid container direction="column" justify="center" alignItems="center" data-tip="" data-for="chart" className={classes.chartContainer}>
                <PieChart
                    item
                    data={chartData}
                    lineWidth={lineWidth}
                    paddingAngle={1}
                    radius={40}
                    labelPosition={100 - 3 * lineWidth / 2}
                    label={({ dataEntry }) => (dataEntry.title)}
                    labelStyle={(index) => ({
                        fontSize: '3px',
                        fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
                        pointerEvents: 'none',
                    })}
                    className={classes.pieChart}
                    animate
                    onMouseOver={(_, index) => {
                        setHovered(index);
                    }}
                    onMouseOut={() => {
                        setHovered(null);
                    }}
                />
                <ReactTooltip
                    id="chart"
                    getContent={() =>
                        typeof(hovered) === "number" ? tooltipContent(hovered, chartData) : null
                    }
                />
            </Grid>
        );
    } else {
        return (
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.summary}>
                <Typography variant="h5">No tasks have been done</Typography>
            </Grid>
        )
    }
}