import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }, 
  sectionAuth: {   
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  loginButton: {
    marginLeft: theme.spacing(2),
  },
  title: {   
    color: 'inherit',
    margin: '1rem',
  },
  userName: {
    padding: '1rem',
  }
}));