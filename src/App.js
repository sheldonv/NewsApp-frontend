import { useState, useEffect, useContext, useCallback} from 'react';
import Navbar from './components/Navigation/Navbar';
import authContext from './context/authContext';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/views/HomePage';
import Dashboard from './components/views/Dashboard';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './context/ColorModeContext';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer';
import dotenv from 'dotenv'



const fetchData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  })
  return response
}

function MyApp() {
  const [user, setUser] = useState({});
  const [firstVisit, setFirstVisit] = useState(false);
  const [articles, setArticles] = useState([]);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const Auth = useContext(authContext);

  


  useEffect(async () => {
    const response = await fetchData(`${process.env.REACT_APP_BACKEND_URL}/user`);
    const responseData = await response.json();

    if (responseData) {
      if (responseData.firstName) {
        console.log(responseData.firstName)
        Auth.logIn()
      }


      setUser(responseData);
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
          p: 3,
          paddingBottom: '0px',
          flexDirection: 'column'
        }}
      >
        <Router>
         
            <Navbar />
            
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              {<Route path="/dashboard" exact>
                <Dashboard />
              </Route>}
              <Redirect to="/" exact/>
              
            </Switch> 
            <Footer />         
        </Router>
      </Box>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useContext(authContext);
  const [user, setUser] = useState({});
  useEffect(async () => {
    const response = await fetchData(`${process.env.REACT_APP_BACKEND_URL}/user`);
    const responseData = await response.json();

    if (responseData) {
      if (responseData.firstName) {
        auth.logIn()
      }


      setUser(responseData);
    }
  }, []);

  const logOut = useCallback(() => { 
    alert(auth.loggedIn)
    setLoggedIn(false)
  }, [])

  const logIn = useCallback(() => {
    setLoggedIn(true)
  }, [])

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    
  };
  
 
  React.useMemo(
    () => ({
      toggleColorMode,
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <authContext.Provider
    value={{
      loggedIn: loggedIn,
      logOut: logOut,
      logIn: logIn
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


