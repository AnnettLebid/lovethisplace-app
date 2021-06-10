import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from './styles';

export default function Header() {  
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>   
      <Box className={classes.hero}>
        <Typography variant="h3">EXPLORE, TRAVEL, LOVE</Typography>
        <Typography variant="h6">Be inspired by a place and inspire others</Typography>
      </Box>           
    </Box>
  );
}