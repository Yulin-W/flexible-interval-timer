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

const secondsToHms = s => ({
    hr: ((s - s % 3600) / 3600) % 60,
    min: ((s - s % 60) / 60) % 60,
    sec: s % 60
})

export default function PeriodInput({ disabled, defaultValue }) { // assumes that input default value for period is in seconds
    const hms = secondsToHms(defaultValue);
    const classes = useStyles();
    return (
        <div className={classes.periodInput}>
            <TextField
                disabled={disabled}
                margin="dense"
                label="Hr"
                defaultValue={hms.hr}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Min"
                defaultValue={hms.min}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                disabled={disabled}
                margin="dense"
                label="Sec"
                defaultValue={hms.sec}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}