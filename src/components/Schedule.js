import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ScheduleEntry from './ScheduleEntry.js';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 400,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Schedule() {
    const classes = useStyles();
    // TODO: the below vh method is quite bad IMO, not very responsive
    return (
        <Scrollbars style={{ width: "80%", height: "85vh" }}>
            <List className={classes.root}>
                {[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item) => (
                    <ListItem button>
                        <ListItemText primary={`Item`} />
                    </ListItem>
                ))}
            </List>
        </Scrollbars>
    );
}
