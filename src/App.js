// Import css
import './App.css';

// Import React
import React from 'react';

// Import Material UI components
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

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

    // Code for allowing parent to use the setTime method of its children
    this.timerRef = React.createRef(); // TODO: using refs is a bad pattern indeed, so maybe write own timer component to make accessing setTime easier

    // State declaration
    this.state = {
      pageValue: "schedule", // Default page to display
      taskSchedule: [ // Default tasks in schedule, name is task name, period is task period in seconds
        { name: "Here's a task", period: 5 },
        { name: "Here's another", period: 10 },
        { name: "And a third", period: 15 },
      ],
      taskElapsedTime: { // Default taskElapsedTime corresponding to default taskSchedule
        "Here's a task": 0,
        "Here's another": 0,
        "And a third": 0
      },
      current: 0, // Default index for task, i.e. start by default on first task with index 0 in this.state.taskSchedule
      settings: {
        "Repeat": true,
      }
    }

    // Binding methods to this
    this.nextTask = this.nextTask.bind(this);
    this.fetchPageData = this.fetchPageData.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.startNextTask = this.startNextTask.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.updateScheduleElapsedTime = this.updateScheduleElapsedTime.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    // Code for requesting permission to send notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  // Method to show specified content in the arguments as a notification, expects content to be a string
  showNotification(content) {
    new Notification(content);
  }

  updateScheduleElapsedTime(newSchedule) {
    let newTaskElapsedTime = {};
    this.state.taskSchedule.forEach((entry) => {
      newTaskElapsedTime[entry.name] = 0;
    });
    this.setState({ taskElapsedTime: newTaskElapsedTime });
  }

  // Update schedule alongside its settings
  updateSchedule(newSchedule, newSettings) {
    // Sets the new schedule and settings
    this.setState({ taskSchedule: newSchedule, settings : newSettings});
    // Resets the schedule summary, i.e. the scheduleElaspedTime dictionary in this.state
    this.updateScheduleElapsedTime(newSchedule);
  }

  nextTask(current) {
    // Returns name of next task in schedule given index of current task in taskSchedule
    // current is expected to be an integer index corresponding to the task in the taskSchedule list
    return this.state.taskSchedule[(current+1) % this.state.taskSchedule.length].name;
  }

  // Updates state such that the next task is started and timer has countdown set to corresponding period, also adds the time of the finished task to corresponding elapsed time entry
  startNextTask() {
    let current = this.state.current;

    // Update elapsed time for the completed current task
    let currentTaskElapsedTime = this.state.taskElapsedTime;
    currentTaskElapsedTime[this.state.taskSchedule[current].name] += this.state.taskSchedule[current].period;
    this.setState({taskElapsedTime: currentTaskElapsedTime});

    // Set up next task
    current = (current+1) % this.state.taskSchedule.length;
    this.setState({current : current});
    this.timerRef.current.setTime(1000*this.state.taskSchedule[current].period + 999); // Again, we add 999 to accomodate for how checkpoint is 999
    this.timerRef.current.start();
  }

  fetchPageData(key, extraData) {
    if (key === "timer") {
      // Extra data attribute is given as a workaround to certain data that cannot be accessed via state in the Timer component
      return {
        current : this.state.taskSchedule[this.state.current].name,
        next : this.nextTask(this.state.current),
        ...extraData
      };
    } else if (key === "schedule") {
      return ({
        taskSchedule: this.state.taskSchedule,
        settings: this.state.settings,
      });
    } else if (key === "summary") {
      return this.state.taskElapsedTime;
    } else {
      return null;
    }
  }

  fetchPageFunc(key) {
    if (key === "timer") {
      return null;
    } else if (key === "schedule") {
      return this.updateSchedule;
    } else if (key === "summary") {
      return null;
    } else {
      return null;
    }
  }

  // Resets task to first task and clears out elapsed time and setTime
  resetTimer() {
    this.setState({current : 0});
    this.updateScheduleElapsedTime(this.state.taskSchedule);
    this.timerRef.current.setTime(1000*this.state.taskSchedule[0].period + 999); // Again, we add 999 to accomodate for how checkpoint is 999
  }

  // Displays notification of current task when timer is started
  startTimer() {
    this.showNotification("Current Task: " + this.state.taskSchedule[this.state.current].name);
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
            initialTime={1000*this.state.taskSchedule[this.state.current].period + 999} // This is in ms as that is what this imported component uses, + 999 in order to shift times in this app by 999 so to complement how we want our timer to jump to next start time instead of turning to 0 (i.e. checkpoint time is 999 not 0)
            direction="backward"
            lastUnit="h" // Only compute time upto hours (not days)
            startImmediately={false} // Defaults to paused
            onReset={() => {this.resetTimer();}}
            onStart={() => {this.startTimer();}}
            formatValue={numPadZeroToTwoPlaces}
            timeToUpdate={200}
            checkpoints={[
              {
                time: 999,
                callback: () => { this.startNextTask();}
              }
            ]}
            ref={this.timerRef}
          >
            {({ start, stop, reset}) => (
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
