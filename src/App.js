// Import css
import './App.css';

// Import React
import React from 'react';

// Import Material UI components
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Import icons
import TimerIcon from "@material-ui/icons/Timer";
import ListAltIcon from '@material-ui/icons/ListAlt';
import BarChartIcon from '@material-ui/icons/BarChart';

// Import the 3 pages' custom components
import TimerComponent from "./components/TimerComponent.js";
import ScheduleComponent from "./components/ScheduleComponent.js";
import SummaryComponent from "./components/SummaryComponent.js";

// Import Timer component and supporting output formatting script
import Timer from 'react-compound-timer';
import numPadZeroToTwoPlaces from './scripts/numPadZeroToTwoPlaces.js';

// Import custom theme
import themeDict from './themeDict.js';
const theme = createMuiTheme(themeDict);

// Defining styles
const useStyles = theme => ({
  // Covers entire viewport
  root: {
    minWidth: "100vh",
    minHeight: "100vh",
    maxHeight: "100vh",
    display: "flex",
    flexFlow: "column",
    alignItems: "stretch"
  },

  // Styling for page component if turns out necessary
  page: {
    flexGrow: 1,
  },

  // Styling for navbar if turns out necessary
  navBar: {
  },
});

// Defining a dictionary for the 3 page components
const pageComponents = {
  "timer": TimerComponent,
  "schedule": ScheduleComponent,
  "summary": SummaryComponent
};

// App component class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageValue: "timer", // Default page to display // FIXME: set the default to timer I'd imagine
      taskSchedule: [ // Default tasks in schedule, name is task name, period is task period in seconds
        { name: "Here's a task", period: 300 },
        { name: "Here's another", period: 600 },
        { name: "And a third", period: 1200 },
      ],
      taskElapsedTime: {
        "Here's a task": 0,
        "Here's another": 0,
        "And a third": 0
      },
      current: 0, // Default index for task, i.e. start by default on first task with index 0 in this.state.taskSchedule
      paused: true,
    }
    this.nextTask = this.nextTask.bind(this);
    this.fetchPageData = this.fetchPageData.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.updateScheduleElapsedTime = this.updateScheduleElapsedTime.bind(this);
  }

  updateScheduleElapsedTime(newSchedule) {
    let newTaskElapsedTime = {};
    this.state.taskSchedule.forEach((entry) => {
      newTaskElapsedTime[entry.name] = 0;
    });
    this.setState({ taskElapsedTime: newTaskElapsedTime });
  }

  updateSchedule(newSchedule) {
    // Sets the new schedule
    this.setState({ taskSchedule: newSchedule }, () => { console.log(this.state.taskSchedule) });
    // Resets the schedule summary, i.e. the scheduleElaspedTime dictionary in this.state
    this.updateScheduleElapsedTime(newSchedule);
  }

  nextTask(current) {
    // current is expected to be an integer index corresponding to the task in the taskSchedule list
    return this.state.taskSchedule[(current+1) % this.state.taskSchedule.length].name;
  }

  fetchPageData(key, extraData) {
    if (key === "timer") {
      // Extra data attribute is given as a workaround to certain data that cannot be accessed via state in the Timer component
      return {
        current : this.state.taskSchedule[this.state.current].name,
        next : this.nextTask(this.state.current),
        ...extraData
      }; //FIXME:
    } else if (key === "schedule") {
      return this.state.taskSchedule;
    } else if (key === "summary") {
      return this.state.taskElapsedTime;
    } else {
      return null;
    }
  }

  fetchPageFunc(key) {
    if (key === "timer") {
      return null; //FIXME:
    } else if (key === "schedule") {
      return this.updateSchedule;
    } else if (key === "summary") {
      return null;
    } else {
      return null;
    }
  }

  render() {
    // For allowing using our custom style
    const { classes } = this.props;
    // Dynamically specifies the pageComponent to be used depending on the currently selected page in the BottomNavigation
    const PageComponent = pageComponents[this.state.pageValue];
    const pageFunc = this.fetchPageFunc(this.state.pageValue);
    return (
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          <Timer
            initialTime={10 * 60 * 1000} // This is in ms as that is what this imported component uses
            direction="backward"
            lastUnit="h" // Only compute time upto hours (not days)
            startImmediately={false} // Defaults to paused
            onReset={() => console.log('onReset hook')}
            formatValue={numPadZeroToTwoPlaces}
            checkpoints={[
              {
                time: 0,
                callback: () => { console.log("Need to put go to next task function here, i think it shoudl be a function that is passed down from parent"); }
              }
            ]}
          >
            {({ start, stop, reset }) => (
              <PageComponent
                data={this.fetchPageData(this.state.pageValue, {
                  start : start,
                  stop : stop,
                  reset : reset,
                  hr : <Timer.Hours/>,
                  min : <Timer.Minutes/>,
                  sec : <Timer.Seconds/>,
                })}
                func={pageFunc}
              >
              </PageComponent>
            )}
          </Timer>
          <BottomNavigation
            value={this.state.pageValue}
            onChange={(event, newValue) => {
              this.setState({
                pageValue: newValue
              });
            }}
            showLabels
            className={classes.navBar}
          >
            <BottomNavigationAction label="Timer" value="timer" icon={<TimerIcon />} />
            <BottomNavigationAction label="Schedule" value="schedule" icon={<ListAltIcon />} />
            <BottomNavigationAction label="Summary" value="summary" icon={<BarChartIcon />} />
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    );
  }
}

export default withStyles(useStyles)(App);
