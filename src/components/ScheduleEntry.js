import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItem from '@material-ui/core/ListItem';
import PeriodInput from './PeriodInput.js';

export default function ScheduleEntry({index, isFirst, isLast, editable, entry, upFunc, downFunc, delFunc}) {

    return (
        <ListItem divider>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid container item xs={4} sm={4} md={4} lg={4} xl={4} justify="flex-start" alignItems="center">
                    <Typography item variant="h6" component="h2">{entry.name}</Typography>
                </Grid>
                <Grid container item xs={6} sm={6} md={6} lg={6} xl={6} justify="flex-start" alignItems="center">
                    <PeriodInput disabled={!editable} defaultValue={entry.period}></PeriodInput>
                </Grid>
                <Grid container item xs={2} sm={2} md={2} lg={2} xl={2} justify="flex-end" alignItems="center">
                    <ButtonGroup color="primary" disabled={!editable} disableElevation>
                        <IconButton disabled={isFirst} onClick={() => {upFunc(index);}}>
                            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                        </IconButton>
                        <IconButton disabled={isLast} onClick={() => {downFunc(index);}}>
                            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                        </IconButton>
                        <IconButton onClick={() => {delFunc(index);}}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </ListItem>
    );
}