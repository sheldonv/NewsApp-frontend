import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import authContext from '../../context/authContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

import ColorModeContext from '../../context/ColorModeContext';
import SwipeableTemporaryDrawer from './SideDrawer';

import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Logo from '../../images/logo.svg';
import LightLogo from '../../images/lightLogo.svg'
import MuiStyled from 'styled-components';
import './Navbar.css';

const Image = MuiStyled.img`
  
`;

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
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[500],
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
          theme.palette.action.selectedOpacity
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
    padding: '0 !important',
  },
  button: {},
  menuIcon: {
    [theme.breakpoints.up(960)]: {
      display: 'none !important',
    },
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
  abRoot: {},
  abStatic: {},
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    flex: 1,
  },
  profileImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: '1.5rem',
  },
  appName: {
    [theme.breakpoints.up('960')]: {
      marginLeft: '15px',
      paddingLeft: '15px',
    },
    menuItem: {
      [theme.breakpoints.up('md')]: {
        display: 'none !important',
        flexGrow: 'none',
      },
      display: 'none !important',
      visibility: 'none !important',
    },
    filterBlue: {
      filter:
        'invert(49%) sepia(99%) saturate(2508%) hue-rotate(161deg) brightness(94%) contrast(101%);',
    },
    filterLightBlue: {
      fillter:
        'invert(32%) sepia(36%) saturate(4660%) hue-rotate(198deg) brightness(103%) contrast(106%);',
    },
    logo: {
      [theme.breakpoints.down('700')]: {
        width: '40%',
      },
    },
  },
}));

const Navbar = ({parentCallback}) => {
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
    console.log(auth.loggedIn);
  };
  let appColor;
  let headerText;
  if (colorMode.color == 'light') {
    appColor = 'white';
  } else {
    appColor = '';
  }
  if (colorMode.color == 'light') {
    headerText = '#5B92E5';
  } else {
    headerText = '#007FFF';
  }
  useEffect(() => {
    const appBox = document.getElementById('appBox')
    parentCallback(appBox.offsetHeight)
  console.log(appBox.offsetHeight)
  }, [login, anchorEl])
  
  return (
    <>
      <AppBar position="fixed" className="appBox" id="appBox">
        <Toolbar>
          <SwipeableTemporaryDrawer
            disabledDiscovery={true}
            ModalProps={{ keepMounted: false }}
          >
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 0 }}
              onClick={() => {
                setOpenDrawer((prevValue) => !prevValue);
              }}
            >
              <MenuIcon
                sx={{
                  color: headerText,
                }}
              />
            </IconButton>
          </SwipeableTemporaryDrawer>

          {colorMode.color == 'dark' ? (<Typography
            gutterBottom={false}
            to="#"
            style={{ color: headerText, padding: 10, margin: 0, display: 'flex' }}
            sx={{ flexGrow: 1, padding: 10, margin: 0}}
            className={classes.menuItem}
          >
            <Link to="/" exact style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center'}}>
              <Image
                style={{ padding: '0px', marginLeft: '-10px', height: '100%' }}
                src={Logo}
                className="logo"
              />
            </Link>
          </Typography>) : (
            <Typography
            gutterBottom={false}
            to="#"
            style={{ color: headerText, padding: 10, margin: 0, display: 'flex' }}
            sx={{ flexGrow: 1, padding: 10, margin: 0}}
            className={classes.menuItem}
          >
            <Link to="/" exact style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center'}}>
              <Image
                style={{ padding: '0px', marginLeft: '-10px', height: '100%' }}
                src={LightLogo}
                className="logo"
              />
            </Link>
          </Typography>
          )}

          {auth.loggedIn && (
            <Typography
              variant="h5"
              component={Link}
              to="#"
              style={{ color: headerText }}
              sx={{ flexGrow: 1 }}
              className="menuItem"
            >
              <div className={classes.menuItem}>
                <Link to="/dashboard" className={classes.menuItem}>
                  Dashboard
                </Link>
              </div>
            </Typography>
          )}

          <Typography
            variant="h5"
            component={Link}
            to="#"
            style={{ color: headerText }}
            sx={{ flexGrow: 1 }}
            className="menuItem"
          >
            <Link to="/contact">Contact</Link>
          </Typography>

          <Typography
            variant="h5"
            component={Link}
            to="#"
            style={{ color: headerText }}
            sx={{ flexGrow: 1 }}
            className="menuItem"
          >
            <Link to="/about">About</Link>
          </Typography>

          {auth.loggedIn ? (
            <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/logout`}>
              <div className={classes.profileImageWrapper}>
                <img
                  src={auth.user.imageUrl}
                  className={classes.profileImage}
                  style={{ marginLeft: '40px' }}
                />
              </div>
            </a>
          ) : (
            <Button
              style={{ color: headerText, fontSize: '1.5em' }}
              href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}
            >
              <Typography variant="h6">Login</Typography>
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
              <MoreVertIcon style={{ color: headerText }} />
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
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ paddingLeft: '1.5rem' }}
        >
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
