import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({    
    city: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name}));
    } else {      
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ city: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  return(
    <Paper className={classes.paper}>
      <form 
        autoComplete="off" 
        noValidate 
        className={`${classes.root} ${classes.form}`} 
        onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Edit a loveplace` : `Create a new loveplace`}</Typography>       
         <TextField 
          name="city" 
          variant="outlined" 
          label="City" 
          fullWidth
          value={postData.city}
          onChange={(e) => setPostData({ ...postData, city: e.target.value })}
        />
        <TextField 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField 
          name="tags" 
          variant="outlined" 
          label="Tags" 
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}
        />
        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          size="large" 
          type="submit"
          fullWidth
          >Submit
        </Button>
        <Button     
        className={classes.buttonClear}       
          variant="contained"          
          size="large" 
          onClick={clear}
          fullWidth
          >Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form;