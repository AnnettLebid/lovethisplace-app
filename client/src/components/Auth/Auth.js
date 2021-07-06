import React from 'react';
import { Container, Avatar, Button, Paper, Typography } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const isSignUp = false;

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
         
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Un' : 'Sign In' }</Typography>
      </Paper>   
    </Container>
  )
}

export default Auth
