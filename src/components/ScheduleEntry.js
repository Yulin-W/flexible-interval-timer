import React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItem from '@material-ui/core/ListItem';
import PeriodInput from './PeriodInput.js';
import TextField from '@material-ui/core/TextField';

export default function ScheduleEntry({index, isFirst, isLast, editable, entry, upFunc, downFunc, delFunc, addFunc}) {

    return (
        <ListItem divider>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid container item xs={2} sm={2} md={2} lg={2} xl={2} justify="flex-start" alignItems="center">
                    <TextField
                        disabled={!editable}
                        margin="dense"
                        defaultValue={entry.name}
                    />
                </Grid>
                <Grid container item xs={8} sm={8} md={8} lg={8} xl={8} justify="center" alignItems="center">
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
                        <IconButton onClick={() => {addFunc(index);}}>
                            <AddIcon></AddIcon>
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