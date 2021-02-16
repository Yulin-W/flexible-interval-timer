import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";

export default function PeriodInput({ disabled, hr, min, sec, editFunc, index }) { // assumes that input default value for period is in seconds
    return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
            <TextField
                item
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
                item
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
                item
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
        </Grid>
    );
}