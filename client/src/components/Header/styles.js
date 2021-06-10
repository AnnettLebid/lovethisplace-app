import { makeStyles } from '@material-ui/core/styles';
import Background from '../../images/hero-unsplash.jpg';

export default makeStyles(() => ({
  heroContainer: {   
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Background})`,       
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width:"100%",
    height: "500px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",    
    marginBottom: "2rem",
  },  
  hero: {
    color: "#fff",   
    marginLeft: "5rem",
  }, 
}));