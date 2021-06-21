import React, { useState, useEffect } from 'react';
import { Box, Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import useStyles from './styles';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
    <>         
      <Box className={classes.container}>
          <NavBar />
          <Header />
      </Box>
      <Container maxWidth="lg">      
        <Grow in>
          <Container>
            <Grid container 
              className={classes.mainContainer}
              justify="space-between" 
              alignItems="stretch"
              spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts currentId={currentId}  setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId}  setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
          </Container>
        </Grow>     
      </Container>
    </>
  );
}

export default App;
