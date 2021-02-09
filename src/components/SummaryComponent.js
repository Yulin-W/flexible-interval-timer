import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PieChart } from 'react-minimal-pie-chart';
import pieChartTheme from '../pieChartTheme.js';
import ReactTooltip from 'react-tooltip';
import secondsToHms from '../scripts/secondsToHms.js';
import numPadZeroToTwoPlaces from '../scripts/numPadZeroToTwoPlaces.js';

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    summary: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        overflowY: "scroll" // For some reason, having this seems to stop the pieChart from scaling beyond container, maybe because the scroll attribute enforces a limit of the container size, either way, not too sure, it works and thats what really matters at least for now, check it out later if have time TODO:
    },
    pieChart: {
        transform: "scale(0.6)"
    }
}));

// Function for converting the data passed as prop from App into the format the PieChart component requires
const dataToPieChartdata = (data) => {
    let chartData = []
    let index = 0;
    for (const [key, value] of Object.entries(data)) {
        chartData.push({
            title: key,
            value: value,
            color: pieChartTheme[index % pieChartTheme.length]
        });
        index++;
    }
    return chartData;
}

const tooltipContent = (index, chartData) => {
    let timeArr = Object.values(secondsToHms(chartData[index].value));
    timeArr = timeArr.map(x => numPadZeroToTwoPlaces(x));
    return `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
}

export default function SummaryComponent({data, func}) {
    const [hovered, setHovered] = React.useState(0);
    const classes = useStyles();
    const chartData = dataToPieChartdata(data);
    const lineWidth = 30;
    return (
        <div data-tip="" data-for="chart" className={classes.summary}>
            <PieChart
                item
                data={chartData}
                lineWidth={lineWidth}
                paddingAngle={1}
                labelPosition={100 - 3 * lineWidth / 2}
                label={({ dataEntry }) => (dataEntry.title)}
                labelStyle={(index) => ({
                    fontSize: '4px',
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
        </div>
    );
}