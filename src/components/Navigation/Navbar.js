import * as React from 'react';
import {useState, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import authContext from '../../context/authContext';
const Navbar = () => {
    const [login, setLogin] = useState(false)
    const auth = useContext(authContext);
    
    return (
        <AppBar position="static">
           <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             NewsPinger
          </Typography>
          {auth.loggedIn ? (<Button color="inherit" href="http://localhost:3000/auth/logout">Logout</Button>): (<Button color="inherit" href="http://localhost:3000/auth/google">Login</Button>)}
          
        </Toolbar>
        </AppBar>
    )
}

export default Navbar
