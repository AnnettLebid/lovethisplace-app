import { makeStyles } from '@material-ui/core/styles';
import Background from './images/hero-unsplash.jpg';

export default makeStyles((theme) => ({

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    }
  },
  container: {   
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Background})`,       
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width:"100%",
    height: "400px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "left",    
    marginBottom: "2rem",
  }, 
}));