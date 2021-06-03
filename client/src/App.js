import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxwidth="lg">
      <Typography className={classes.heading} variant="h2" align="center">
        LoveThisPlace
      </Typography>    
      <Grow in>
        <Container>
          <Grid container 
            justifyadd page="space-between" 
            alignItems="stretch"
            spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
          </Grid>
        </Container>
      </Grow>
     
    </Container>
  );
}

export default App;
