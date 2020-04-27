
import React from 'react';

import { AppBar, Avatar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
      marginRight: theme.spacing(2),
    }
}));

export default function Navigation() {

    const classes = useStyles();

    return (
        <>
        <AppBar position="relative">
          <Toolbar>
            <Avatar className={classes.avatar} alt="Nick Routsong" src="/assets/img/nick-routsong-120.jpg" />
            <Typography variant="h6" color="inherit" noWrap>
              Nick Routsong | CSE 341: Web Backend Development II
            </Typography>
          </Toolbar>
        </AppBar>
        </>
    );
}