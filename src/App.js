import { useState, useEffect, useContext, useCallback } from 'react';
import Navbar from './components/Navigation/Navbar';
import authContext from './context/authContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/views/HomePage';
import Dashboard from './components/views/Dashboard';
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './context/ColorModeContext';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer';
import { purple, amber, deepPurple } from '@mui/material/colors';
import { Button } from '@mui/material';
import {
  deepOrange,
  grey,
  blueGrey,
  green,
  blue,
  indigo,
} from '@mui/material/colors';
import Contact from './components/views/Contact';
import { responsiveFontSizes } from '@mui/material';
import About from './components/views/About';


const fetchData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  });
  return response;
};
let fragment;



function MyApp(props) {
  let authenticated = false;
  const Auth = useContext(authContext);
  const [loggedIn, setLoggedIn] = useState(false);
  //pass headerSize from Navbar to MyApp
  const [headerHeight, setHeaderHeight] = useState(0);

  const callback = useCallback((size) => {
    console.log('callback', size)
    setHeaderHeight(size);
  }, []);

  //getting size of header
  let box = document.querySelector('.appBox');
  
  console.log(box)

  useEffect(async () => {
    const response = await fetchData(
      `${process.env.REACT_APP_BACKEND_URL}/user`
    );
    const responseData = await response.json();
    fragment = true;
    if (responseData) {
      if (responseData.firstName) {
        console.log(responseData.firstName);
        setLoggedIn(true);
        Auth.logIn();
      }
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,

          paddingBottom: '0px',
          flexDirection: 'column',
        }}
      >
        <Router>
          <Navbar parentCallback={callback}/>

          <main style={{ marginTop: headerHeight + 'px' }}>
            <Switch>
              {
                <Route path="/" exact>
                  <HomePage />
                </Route>
              }

              {
                <Route path="/dashboard" exact>
                  <Dashboard />
                </Route>
              }
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/about" exact>
                <About headerHeight={headerHeight}/>
              </Route>
              <Redirect to="/" exact />
            </Switch>
            <Footer />
          </main>
        </Router>
      </Box>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const Auth = useContext(authContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(async () => {
    const response = await fetchData(
      `${process.env.REACT_APP_BACKEND_URL}/user`
    );
    const responseData = await response.json();
    console.log(Auth.isLoggedIn);
    if (responseData) {
      if (responseData.firstName) {
        console.log(responseData);
        setUser(responseData);
        setLoggedIn(true);
        Auth.logIn();
      }
    }
  }, []);

  console.log(loggedIn);
  const logOut = useCallback(() => {
    alert('logged In');
    setLoggedIn(false);
  }, []);

  const logIn = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  React.useMemo(
    () => ({
      toggleColorMode,
    }),
    []
  );
  let responseTextTheme = createTheme();
  responseTextTheme = responsiveFontSizes(responseTextTheme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...(mode === 'dark' && {
              main: blue[700],
            }),
            ...(mode === 'light' && {
              main: blue[100],
            }),
          },
          secondary: {
            ...(mode === 'dark' && {
              main: grey[700],
            }),
            ...(mode === 'light' && {
              main: blue[500],
            }),
          },
          ...(mode === 'dark' && {
            background: {
              default: '#121212',
              paper: '#121212',
            },
          }),
          ...(mode === 'light' && {
            background: {
              default: 'white',
              paper: '#f0f8ff',
            },
          }),
          text: {
            ...(mode === 'light'
              ? {
                  primary: '#000000',
                  secondary: grey[800],
                }
              : {
                  primary: blue[200],
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );
  
  return (
    <authContext.Provider
      value={{
        loggedIn: loggedIn,
        logOut: logOut,
        logIn: logIn,
        user: user,
      }}
    >
      <ColorModeContext.Provider
        value={{ toggleColorMode: toggleColorMode, color: mode }}
      >
        <ThemeProvider theme={theme}>
          <MyApp />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </authContext.Provider>
  );
}
