import React from 'react';
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({name, handleChange, handleShowPassword, label, autoFocus, type,  }) => {
  return (
    <Grid item xs={12}>
      <TextField 
      name={name}
      onChange={handleChange}
      variant="outlined"
      label={label}
      autoFocus={autoFocus}
      type={type}
      required
      fullWidth
      InputProps={name === 'password' ? {
        endAdornment : (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      } : null } />      
    </Grid>
  )
}

export default Input
