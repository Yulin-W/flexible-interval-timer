import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    periodInput: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PeriodInput({ disabled, hr, min, sec, editFunc, index }) { // assumes that input default value for period is in seconds
    const classes = useStyles();
    return (
        <div className={classes.periodInput}>
            <TextField
                disabled={disabled}
                margin="dense"
                label="Hr"
                value={hr}
                type="number"
                onChange={(e) => {editFunc(index, "hr", Number(e.target.value));}} // FIXME: whilst this avoid the dodgy string input case, it also means I cannot make input empty, i.e. delete a remaining 0
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Min"
                value={min}
                type="number"
                onChange={(e) => {editFunc(index, "min", Number(e.target.value));}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Sec"
                value={sec}
                type="number"
                onChange={(e) => {editFunc(index, "sec", Number(e.target.value));}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}