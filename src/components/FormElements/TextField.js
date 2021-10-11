import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@mui/material';

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
const buttonBorder = {
    border: '1px solid black',
    backgroundColor: 'red'
}
export default function BasicTextFields() {
  const classes = useStyles();

  const SearchButton = () => (

        <SearchIcon fontSize="large"/>
      
    
    )
  return (
      <form action="">
            <TextField id="outlined-basic" label="Search Todays News" variant="outlined" margin="none" className={classes.textField}  InputProps={{ className: classes.input, endAdornment: <SearchButton /> }}/>
    
      </form>
    
    
  );
}
