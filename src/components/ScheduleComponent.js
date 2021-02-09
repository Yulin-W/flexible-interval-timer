import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ScheduleEntry from './ScheduleEntry.js';

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    schedule: {
        backgroundColor: theme.palette.background.paper,
        overflow: "scroll",
        flexGrow: 1
    },
}));

export default function ScheduleComponent({data}) {
    const classes = useStyles();
    // TODO: the below vh method is quite bad IMO, not very responsive
    return (
        <List className={classes.schedule}>
            {data.map((entry) => (
                <ScheduleEntry entry={entry}></ScheduleEntry>
            ))}
        </List>
    );
}
