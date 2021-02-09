import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    summary: {
        backgroundColor: theme.palette.background.paper,
        overflow: "scroll",
        flexGrow: 1
    },
}));

export default function SummaryComponent({data, func}) {
    const classes = useStyles();
    return (
        <div className={classes.summary}>Summary Page incomplete</div>
    );
}