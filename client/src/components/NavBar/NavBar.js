import React from 'react';
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';
import useStyles from './styles';


const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          LoveThisPlace
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
  </AppBar>
  )
}

export default NavBar;
