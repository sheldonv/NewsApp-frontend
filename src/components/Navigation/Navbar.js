import * as React from 'react';
import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import authContext from '../../context/authContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemButton } from '@mui/material';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { margin } from '@mui/system';
import ColorModeContext from '../../context/ColorModeContext';
import SwipeableTemporaryDrawer from './SideDrawer';
import { createMuiTheme } from '@material-ui/core/styles';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 90;



const useStyles = makeStyles((theme) => ({
  viewOptionsTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    paddingLeft: '15px',
  },
  menu: {
    width: '300px',
  },
  button: {},
  menuIcon: {
    border: 'none',

    width: '-5px',
    outline: 'none',
    padding: '0 !important',
    marginRight: '0px',
  },
  viewOptions: {
    display: 'list-item',
    flexDirection: 'row',
    position: 'relative',
  },
  switch: {},
  darkModeButton: {
    paddingLeft: '3.5em',
    height: '1.5em',
    marginLeft: '3.5em',
  },
  appHeader: {
    paddingRight: '0px !important',
    color: 'secondary',
    backgoundColor: 'red'
  },
  abRoot: {
    backgroundColor: "red"
  },
  abStatic: {
    border: "solid blue 2px"
  }
}));





const Navbar = () => {
  const [login, setLogin] = useState(false);
  const auth = useContext(authContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const colorMode = React.useContext(ColorModeContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeColor = () => {
    colorMode.toggleColorMode();
  };
  let appColor;
  if(colorMode.color == 'light'){
    appColor = '#989890'
  }
  
  return (
    <AppBar position="fixed"  className={classes.root} sx={{backgroundColor: appColor}}>
      <Toolbar>
        <SwipeableTemporaryDrawer >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenDrawer((prevValue) => !prevValue);
            }}
          >
            <MenuIcon
              sx={{
                color: 'text.secondary',
              }}
            />
          </IconButton>
        </SwipeableTemporaryDrawer>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NewsPinger
        </Typography>
        {auth.loggedIn ? (
          <Button color="inherit" href="http://localhost:3000/auth/logout">
            Logout
          </Button>
        ) : (
          <Button color="inherit" href="http://localhost:3000/auth/google">
            Login
          </Button>
        )}
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '24ch',
              },
            }}
            className={classes.menu}
          >
            <div>
              <span className={classes.viewOptionsTitle}>View Options</span>
              <MenuItem>
                <ListItemIcon className={classes.menuIcon}>
                  <SettingsBrightnessRoundedIcon fontSize="large" />
                </ListItemIcon>
                DarkMode
                <ListItemButton>
                  <Switch
                    onChange={() => {
                      changeColor();
                    }}
                  />
                </ListItemButton>
              </MenuItem>
            </div>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
