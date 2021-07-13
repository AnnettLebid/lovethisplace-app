import React, { useState } from 'react';
import { Container, Avatar, Button, Paper, Typography, Grid } from '@material-ui/core';
import Icon from './icon';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); ;

  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => setIsSignUp((previsSignUp) => !previsSignUp);

  const responseSuccess = async (response) => {
    console.log(response);
  }

  const responseFailure = async () => {
    console.log("Couldn't sign you in")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
         <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
          <GoogleLogin 
            clientId="GOOGLE ID"
            render={(renderProps) => (
              <Button className={classes.googleButton} 
                color="primary" fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon variant="contained" />}
              >Sign In with Google
              </Button>
            )}
            onSuccess={responseSuccess}
            onFailure={responseFailure}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? `Already have an account? Sign In` :
                `Don't have account? Sign Up`} 
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>   
    </Container>
  )
}

export default Auth
