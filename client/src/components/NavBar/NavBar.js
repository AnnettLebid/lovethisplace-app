import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import useStyles from './styles';


const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography component={Link} to="/" variant="h6" className={classes.title}>
          LoveThisPlace
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
  </AppBar>
  )
}

export default NavBar;
