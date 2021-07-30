import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './styles';


const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const[user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logOut = () => {
    dispatch ({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  }
  
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} style={{textDecoration: 'none',}}>
            LoveThisPlace
          </Typography>        
          <div className={classes.grow} />
          { user ? (
            <div>
              <div className={classes.sectionAuth}>           
                <IconButton
                  edge="end"
                  aria-label="account of current user"             
                  aria-haspopup="true"
                  // onClick={}
                  color="inherit"
                >                  
                  <Avatar alt={`${user.profileData.givenName} ${user.profileData.familyName}`} src={user.profileData.imageUrl} />
                </IconButton>
                <Typography className={classes.userName} variant="h6">{`${user.profileData.givenName} ${user.profileData.familyName}`}</Typography>
                <div>
                  <Button className={classes.loginButton} component={Link} to="/auth" variant="outlined" color="inherit"
                  onClick={logOut}>Logout</Button>
                </div>
              </div>              
            </div>
            ) : (
            <div>
              <Button component={Link} to="/auth" variant="outlined" color="inherit">Sign In</Button>
            </div>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
