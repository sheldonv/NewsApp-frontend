import React, { useState, useEffect, useContext, useRef } from 'react';
import authContext from '../../context/authContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Articles from '../Articles';
import _ from 'lodash';
import './Dashboard.css';
import { useHistory, Link } from 'react-router-dom';

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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  border: '1px solid #007FFF',
  borderRadius: '9px',
  boxShadow: '24 #007FFF',
  p: 4,
  color: 'text.primary',
};
const modalStyle = {
  width: '80%',
  margin: '0 auto',
};
const useStyles = makeStyles((theme) => ({
  saveButton: {
    textAlign: 'center',
  },
  gridItem: {
    textAlign: 'center',
  },
  categoryButton: {
    width: '10em',
  },
  categoryBorder: {
    width: '10em',
    border: '1px solid black',
  },
  modal: {
    width: '90%',
  },
}));
let categories = [];

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [openRestricted, setOpenRestricted] = useState(false)
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [user, setUser] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [categoryEmpty, setCategoryEmpty] = useState(false);
  const [categoryArray, setCategoryArray] = useState([]);
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenRestricted = () => setOpenRestricted(true);
  const handleCloseRestricted = () => setOpenRestricted(false);
  useEffect(async () => {
    // send GET request to backend to get User Profile
    const response = await fetchData(
      `${process.env.REACT_APP_BACKEND_URL}/user`
    );
    const responseData = await response.json();
    if (!responseData){
      handleOpenRestricted();
    }
    if (responseData) {
      setUser(responseData);
      setArticles(responseData.articles);
      // check if the dashboard has been initialized if not then open up modal
      console.log(responseData);

      if (responseData.dashboardInit === false) {
        handleOpen();
      } else {
        const categories = responseData.categories.split('x');

        setCategoryButtons(categories);
      }
    }
  }, []);
  useEffect(async () => {
    const firstButton = await document.getElementById(categoryButtons[0]);

    fetchCategory(categoryButtons[0]);
  }, [categoryButtons]);
  const updateCategories = async (e) => {
    if (e.target.checked) {
      categories.push(e.target.value);
      setCategoryArray([...categories]);
    } else {
      const index = categories.indexOf(e.target.value);
      categories.splice(index, 1);
      setCategoryArray([...categories]);
    }
  };
  const pushCategories = async () => {
    if (categories.length > 0) {
      const categoryString = categories.join('x');
      const response = await fetchData(
        `${process.env.REACT_APP_BACKEND_URL}/news/categories/?categories=${categoryString}&id=${user._id}`
      );
      const responseData = await response.json();
      const categoryArray = responseData.categories.split('x');

      setCategoryButtons(categoryArray);
      if (responseData.categories !== null) {
        const response = await fetchData(
          `${process.env.REACT_APP_BACKEND_URL}/users/dashboardinit/?id=${user._id}`
        );
        const responseData = await response.json();
      }
    } else {
      setCategoryEmpty(true);
    }
    handleClose();
  };
  // Creating a function to fetch the data pertaining to the selected category
  const fetchCategory = async (category) => {
    const response = await fetchData(
      `${process.env.REACT_APP_BACKEND_URL}/news/category/?category=${category}`
    );
    const responseData = await response.json();
    setCategoryData([]);
    setCategoryData(responseData.articles);
  };
  // Create function that takes border style of initial button in dashboard
  const changeButton = () => {
    setClicked(true);
  };
  // Create a function that lets the user add categories and delete categories
  const addCategories = () => {
    categoryButtons.forEach((item) => {});
    handleOpen();
  };
  const fetchSaved = () => {
    setCategoryData(user.articles);
  };
  const gridRowStyling = {
    '& > div:not(:nth-child(4n))::after': { width: '100%' },
  };
  return (
    <div>
      <h1 className="welcome">Dashboard</h1>
      <Container style={{width: '100%'}}>
        <Grid
          id="articlesGrid"
          container
          columnSpacing={2}
          rowSpacing={5}
          sx={{ gridRow: gridRowStyling }}
        >
          {categoryButtons.map((category) => {
            return (
              <Grid item xs={6} className={classes.gridItem}>
                <Button
                  id={category}
                  variant="outlined"
                  size="small"
                  className={
                    category == categoryButtons[0] && clicked === false
                      ? classes.categoryBorder
                      : classes.categoryButton
                  }
                  onClick={() => {
                    changeButton();
                    fetchCategory(category);
                  }}
                >
                  {category.toUpperCase()}
                </Button>
              </Grid>
            );
          })}
          <Grid item xs={6} className={classes.gridItem}>
            <Button
              disabled={articles.length === 0}
              variant="outlined"
              size="small"
              className={classes.categoryButton}
              onClick={fetchSaved}
            >
              Saved
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <Button
              variant="outlined"
              size="small"
              className={classes.categoryButton}
              onClick={addCategories}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Container>
      
      <Modal
        open={openRestricted}
        onClose={handleCloseRestricted}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={style} style={{height: '60vh'}}>
          <Typography variant="h4" color="secondary" style={{textAlign: 'center'}}>
            You Must Create Account or Login To Use Dashboard
          </Typography>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '1rem'}}>
            <Button variant="outlined" color="secondary" style={{margin: '1rem'}}>Login Or Create Account</Button>
          <Button variant="outlined" color="secondary" style={{margin: '1rem'}}>Set Up Later</Button>
          </div>
          
        </Box>
      </Modal>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Choose your categories
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={categoryButtons.includes('entertainment')}
                  />
                }
                label="Entertainment"
                value="entertainment"
                id="entertainment"
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={categoryButtons.includes('sports')}
                  />
                }
                label="Sports"
                value="sports"
                id="sports"
                defaultChecked={categoryButtons.includes('sports')}
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Business"
                value="business"
                id="business"
                defaultChecked={categoryButtons.includes('business')}
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Technology"
                value="technology"
                id="technology"
                defaultChecked={categoryButtons.includes('technology')}
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Health"
                value="health"
                id="health"
                defaultChecked={categoryButtons.includes('health')}
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Science"
                value="science"
                id="science"
                defaultChecked={categoryButtons.includes('science')}
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="General"
                value="general"
                id="general"
                defaultChecked={categoryButtons.includes('general')}
                onChange={(e) => updateCategories(e)}
              />
            </FormGroup>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Button
              variant="contained"
              className={classes.saveButton}
              onClick={pushCategories}
              color="secondary"
              disabled={categoryArray.length === 0}
              style={{width: '90%', marginBottom: '1rem'}}
            >
              Save
            </Button>
            <Button
              variant="contained"
              className={classes.saveButton}
              onClick={pushCategories}
              style={{width: '90%'}}
              color="secondary"
              component={Link}
              to="/"
              exact
            >
              Set Up Later
            </Button>
            </div>
            
          </Typography>
        </Box>
      </Modal>
      <Container className="articlesConsole">
        {categoryData.articles}
        <Grid
          id="articlesGrid"
          container
          columnSpacing={2}
          rowSpacing={5}
          sx={{ gridRow: gridRowStyling }}
        >
          {categoryData.map((article) => {
            return (
              <Articles
                image={article.urlToImage}
                title={article.title}
                url={article.url}
                source={article.source.name}
                description={article.description}
                save={article}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
