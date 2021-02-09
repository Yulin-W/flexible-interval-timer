import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ScheduleEntry from './ScheduleEntry.js';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = theme => ({
    // Scrolls if content overflows and set background color
    schedule: {
        backgroundColor: theme.palette.background.paper,
        overflow: "scroll",
        flexGrow: 1
    },
    fab: {
        position: "absolute",
        bottom: 100,
        right: 50
    }
});

const fabIconDict = {
    "false":<EditIcon></EditIcon>,
    "true":<DoneIcon></DoneIcon>
}

class ScheduleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: "Current Task",
            nextTask: "Next Task",
            data: props.data,
            editing: false,
        }
        this.setEditing = this.setEditing.bind(this);
    }

    setEditing() {
        const currentEditingState = this.state.editing;
        this.setState({editing: !currentEditingState});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.schedule}>
                <List>
                    {this.state.data.map((entry) => (
                        <ScheduleEntry editable={this.state.editing} entry={entry}></ScheduleEntry>
                    ))}
                </List>
                <Fab color="secondary" className={classes.fab} onClick={this.setEditing}>
                    {fabIconDict[this.state.editing.toString()]}
                </Fab>
            </div>
        );
    }
}

export default withStyles(useStyles)(ScheduleComponent);
