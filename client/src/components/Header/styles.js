import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
    url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
    // url('https://images.unsplash.com/photo-1621841058209-dcb875c9b970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80')`,
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