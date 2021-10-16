import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    sideDrawer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const HOME  = () => (<HomeIcon />)
const ADVANCED = () => (<ManageSearchIcon />)
const ABOUT = () => (<InfoIcon />)
const DASHBOARD = () => (<DashboardIcon />)


export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300}}
      className={classes.sideDrawer}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
        <Link to="/">
          <ListItem button href="www.google.com" key={'HOME'}>
            <ListItemIcon>
              <HOME />
            </ListItemIcon>
            <ListItemText primary={'HOME'} />
          </ListItem>  
        </Link>
        <Link to="/dashboard">
          <ListItem button href="www.google.com" key={'DASHBOARD'}>
            <ListItemIcon>
              <DASHBOARD />
            </ListItemIcon>
            <ListItemText primary={'DASHBOARD'} />
          </ListItem>  
        </Link>
        <Link to="/advanced">
          <ListItem button key={'ADVANCED SEARCH'}>
            <ListItemIcon>
              <ADVANCED />
            </ListItemIcon>
            <ListItemText primary={'ADVANCED'} />
          </ListItem>  
        </Link>
        <Link to="/about">
          <ListItem button key={'ABOUT'}>
            <ListItemIcon>
              <ABOUT />
            </ListItemIcon>
            <ListItemText primary={'ABOUT'} />
          </ListItem>  
        </Link>
       
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{props.children}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}