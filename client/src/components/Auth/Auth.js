import React, { useState } from 'react';
import { Container, Avatar, Button, Paper, Typography, Grid, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = false;

  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
         <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Un' : 'Sign In' }</Typography>
        <form classNmae={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>       
                  <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>              
                </>
              )
            }
            <Input name="email" label="Email" type="email" handleChange={handleChange} />
            <Input name="password" label="Password" type={showPassword ? "text" : "password"} 
              handleChange={handleChange} 
              handleShowPassword={handleShowPassword}
            />
            { isSignUp && 
              <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange} />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>   
    </Container>
  )
}

export default Auth
