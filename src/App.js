// Import css
import './App.css';
// Import basic React stuff
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
// Import bottom navigation module
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Import icons
import TimerIcon from "@material-ui/icons/Timer";
import ListAltIcon from '@material-ui/icons/ListAlt';
import BarChartIcon from '@material-ui/icons/BarChart';
// Import the 3 pages' components
import Timer from "./components/Timer.js";
import Schedule from "./components/Schedule.js";
import Summary from "./components/Summary.js";

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
    minHeight: 30
  },
});

// Defining a dictionary for the 3 page components
const pageComponents = {
  "timer": Timer,
  "schedule": Schedule,
  "summary": Summary
};

// App component class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageValue: "schedule", // Default page to display
      taskSchedule: [ // Default tasks in schedule, name is task name, period is task period in seconds
        {name : "Read", period : 145},
        {name : "Chill", period : 3610},
        {name : "Exercise", period: 7264},
      ],
      taskElapsedTime: {

      }, //FIXME:
      totalElapsedTime: 0, //FIXME:
      paused: true,
    }
    this.fetchPageData.bind(this);
  }

  updateSchedule() { //FIXME:

  }

  fetchPageData(key) {
    if (key==="timer") {
      return null; //FIXME:
    } else if (key==="schedule") {
      return this.state.taskSchedule;
    } else if (key==="summary") {
      return null; //FIXME:
    } else {
      return null;
    }
  }

  render() {
    // For allowing using our custom style
    const { classes } = this.props;
    // Dynamically specifies the pageComponent to be used depending on the currently selected page in the BottomNavigation
    const PageComponent = pageComponents[this.state.pageValue];
    const pageData = this.fetchPageData(this.state.pageValue);
    return (
      <Box className={classes.root}>
        <PageComponent data={pageData}></PageComponent>
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
    );
  }
}

export default withStyles(useStyles)(App);
