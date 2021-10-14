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
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

 

const ITEM_HEIGHT = 90;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  viewOptionsTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    
  },
  menu: {
    width: '300px',
    padding: '0 !important'
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
    
    height: '1.5em',
  },
  appHeader: {
    paddingRight: '0px !important',
    color: 'secondary',
    
  },
  abRoot: {
  },
  abStatic: {
    
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

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

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
    <>
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
          <Button color="inherit" href={`${process.env.REACT_APP_BACKEND_URL}/auth/logout`}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>
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
          
        </div>
      </Toolbar>
    </AppBar>
    <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{paddingLeft: '1.5rem'}}>
          
              View Options
          
          
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
        <Switch
      checked={checked}
      onChange={() => {
        changeColor();
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    DarkMode
        </MenuItem>
        
      </StyledMenu>
    </>
  );
};

export default Navbar;
