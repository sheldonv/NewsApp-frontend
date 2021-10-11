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
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstVisit, setFirstVisit] = useState(false);
  const [articles, setArticles] = useState([]);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const Auth = useContext(authContext);

  const logOut = useCallback(() => {
    setLoggedIn(false)
  }, [])

  const logIn = useCallback(() => {
    setLoggedIn(true)
  }, [])


  useEffect(async () => {
    const response = await fetchData('http://localhost:3000/user');
    const responseData = await response.json();

    if (responseData) {
      if (responseData.firstName) {
        Auth.logIn()
      }
      if (responseData.firstVisit == true) {
        setFirstVisit(responseData.firstVisit);
      } else {
        setFirstVisit(responseData.firstVisit);
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
          flexDirection: 'column'
        }}
      >
        <Router>
          <authContext.Provider
            value={{
              loggedIn: loggedIn,
              logOut: logOut,
              firstVisit: firstVisit,
              logIn: logIn
            }}
          >
            <Navbar />
            
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              {loggedIn && <Route path="/dashboard" exact>
                <Dashboard />
              </Route>}
              <Redirect to="/" exact/>
              
            </Switch> 
            <Footer />         
            </authContext.Provider>
        </Router>
      </Box>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');

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
    <ColorModeContext.Provider
      value={{ toggleColorMode: toggleColorMode, color: mode }}
    >
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


