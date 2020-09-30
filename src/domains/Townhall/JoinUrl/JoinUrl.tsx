import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Copy from 'components/Copy';
import { TownhallContext } from '../Contexts/Townhall';

export default function JoinUrl() {
    const townhall = React.useContext(TownhallContext);
    const joinUrl = `${process.env.HOST}/${townhall._id}`;
    return (
        <Grid container justify='space-between' alignItems='center' spacing={3}>
            <Grid item xs='auto'>
                <Typography variant='body1'>{joinUrl}</Typography>
            </Grid>
            <Grid item xs='auto'>
                <Copy data={joinUrl} />
            </Grid>
        </Grid>
    );
}