import React from 'react';
import { Box } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import useStyles from './styles';

function App() {  
  const classes = useStyles();

  return (
    <Router>         
      <Box className={classes.container}>
          <NavBar />
          <Header />
      </Box>   
      <Home />   
    </Router>
  );
}

export default App;
