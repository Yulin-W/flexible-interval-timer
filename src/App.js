// Import css
import './App.css';
// Import basic React stuff
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
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
    "min-width": "100vh",
    height: "100vh"
  },

  // Ensures width covers width of parent
  navBar: {
    width: "100%",
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
      pageValue: "timer"
    }
  }

  render() {
    // For allowing using our custom style
    const { classes } = this.props;
    // Dynamically specifies the pageComponent to be used depending on the currently selected page in the BottomNavigation
    const PageComponent = pageComponents[this.state.pageValue];
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid container item justify="center">
          <PageComponent></PageComponent>
        </Grid>
        <BottomNavigation
          container
          item
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
      </Grid>
    );
  }
}

export default withStyles(useStyles)(App);
