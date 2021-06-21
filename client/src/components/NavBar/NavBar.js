import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';
import useStyles from './styles';


const NavBar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography component={Link} to="/" variant="h6" className={classes.title}>
          LoveThisPlace
        </Typography>
        {user ? <AccountCircle /> : (
          <Button component={Link} to="/auth" variant="outlined" color="inherit">Login</Button>
        )}
      </Toolbar>
  </AppBar>
  )
}

export default NavBar;
