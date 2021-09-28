import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 10,
        marginTop: '0',
        fontWeight: 500,
    },
    input: {
        color: 'black',
        fontSize: '2em',
        height: '100%'
    }
});

export default function BasicTextFields() {
  const classes = useStyles();
  return (
    
      <TextField id="outlined-basic" label="Search Todays News" variant="outlined" margin="none" className={classes.textField}  InputProps={{ className: classes.input }}/>
    
  );
}
