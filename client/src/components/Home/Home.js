import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import { getPosts } from '../../actions/posts';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
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
  )
}

export default Home
