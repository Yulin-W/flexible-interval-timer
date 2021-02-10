import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import secondsToHms from '../scripts/secondsToHms.js';

const useStyles = makeStyles((theme) => ({
    periodInput: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));

export default function PeriodInput({ disabled, defaultValue }) { // assumes that input default value for period is in seconds
    const hms = secondsToHms(defaultValue);
    const classes = useStyles();
    return (
        <div className={classes.periodInput}>
            <TextField
                disabled={disabled}
                margin="dense"
                label="Hr"
                value={hms.hr}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Min"
                value={hms.min}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Sec"
                value={hms.sec}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}