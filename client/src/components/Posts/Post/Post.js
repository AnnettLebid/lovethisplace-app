import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import  DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {  
  const classes = useStyles();
  const dispatch = useDispatch();

  return( 
    <Card className={classes.card}  style={{transition:'ease 0.5s', borderRadius: '15px'}}>
      <CardMedia 
        className={classes.media} 
        image={post.selectedFile}
        title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button 
            style={{color: 'white'}} 
            size="small" 
            onClick={() => {setCurrentId(post._id)}}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.city}</Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            <FavoriteBorderIcon fontSize="small" color="secondary" onClick={() => dispatch(likePost(post._id))} />            
            &nbsp;{post.likeCount}
          </Button>
          <Button size="small" color="primary">
            <DeleteIcon fontSize="small"  onClick={() => dispatch(deletePost(post._id))}/>                       
          </Button>
        </CardActions>
    </Card>
  )
}

export default Post;