import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Avatar, Button, Paper, Typography, Grid } from '@material-ui/core';
import Icon from './icon';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

import useStyles from './styles';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(isSignUp){
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => setIsSignUp((previsSignUp) => !previsSignUp);

  const responseSuccess = async (response) => {
    const profileData = response?.profileObj;
    const token = response?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { profileData, token }});

      history.push('/'); //redirect to main page
    } catch (error) {
      console.log(error);
    }
  }

  const responseFailure = async () => {
    console.log("Couldn't sign you in")
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
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
                  <Input name="lastName" label="Last Name" handleChange={handleChange} xs={6}/>              
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
              <Button onClick={switchMode} className={classes.createButton}>
                { isSignUp ? `Already have an account? Sign In` :
                `Don't have an account yet? Create Account`} 
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>   
    </Container>
  )
}

export default Auth
