import { AppBar } from '@mui/material';
import { useState, useEffect, useContext} from 'react';
import Navbar from './components/Navigation/Navbar';
import authContext from './context/authContext';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/views/HomePage';
import Dashboard from './components/views/Dashboard';


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

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);

  const Auth = useContext(authContext);

  useEffect( async () => {
    const response = await fetchData('http://localhost:3000/user')
    const responseData = await response.json();
    if(responseData.firstName){
      setLoggedIn(true)
    }
    console.log(responseData);
    setUser(responseData)
  }, [])
  const logOut = () => {
    setLoggedIn(false)
  }
  return (
    <>
      <Router>
        <authContext.Provider value={{ loggedIn: loggedIn, logOut: logOut }}>
          <Navbar />
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            
          </Switch>
        </authContext.Provider>
      </Router>
    </>
  );
}

export default App;
