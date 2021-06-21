import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heroContainer: {     
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",   
    padding: "5rem 0",
    marginBottom: "4rem",
  },  
  hero: {
    color: "#fff",   
    marginLeft: "5rem",
  }, 
}));