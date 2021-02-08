import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ScheduleEntry from './ScheduleEntry.js';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    summary: {
        backgroundColor: theme.palette.background.paper,
        overflow: "scroll",
        flexGrow: 1
    },
}));

export default function Summary({data}) {
    const classes = useStyles();
    return (
        <div className={classes.summary}>Summary Page incomplete</div>
    );
}