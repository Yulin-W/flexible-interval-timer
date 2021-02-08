import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    timer: {
        backgroundColor: theme.palette.background.paper,
        overflow: "scroll",
        flexGrow: 1
    },
}));

export default function Timer({data}) {
    const classes = useStyles();
    return (
        <div className={classes.timer}>Timer Page incomplete</div>
    );
}