import React, {useState, useEffect, useContext, useRef} from 'react'
import authContext from '../../context/authContext'
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
import _ from 'lodash'
import remove from 'lodash.remove'
import './Dashboard.css'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '9px',
    boxShadow: 24,
    p: 4,
    color: 'text.primary'
  };
  const modalStyle = {
    width : '80%',
    margin: '0 auto'
  }
  const useStyles = makeStyles((theme) => ({
      saveButton: {
          textAlign: 'center',
          width: '40%',
          float: 'right'
      },
      gridItem: {
          textAlign: 'center'
      },
      categoryButton: {
          width: '10em'

      },
      categoryBorder: {
          width: '10em',
          border: '1px solid black'
      },
      modal: {
        width: '90%'
      }
  }))
let categories = [];

const Dashboard = () => {
    const Auth = useContext(authContext);
    const history = useHistory();
    
    
  
    const [open, setOpen] = React.useState(false);
    const [categoryButtons, setCategoryButtons] = useState([])
    const [user, setUser] = useState('');
    const [categoryData, setCategoryData] = useState([])
    const [clicked, setClicked] = useState(false)
    const [categoryEmpty, setCategoryEmpty] = useState(false);
    const [categoryArray, setCategoryArray] = useState([])
    const classes = useStyles();
    const ref = useRef(null)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  useEffect(async () => {
    // send GET request to backend to get User Profile
    const response = await fetchData('http://localhost:3000/user');
    const responseData = await response.json();
    setUser(responseData)
    // check if the dashboard has been initialized if not then open up modal
    if(responseData){
      alert('response froze Dashboard')
    
    if(responseData.dashboardInit === false){
        handleOpen();
    }else{
      const categories = responseData.categories.split('x')

      setCategoryButtons(categories)
    }
  }
  }, []);
  useEffect(async () => {
     const firstButton = await document.getElementById(categoryButtons[0])

     fetchCategory(categoryButtons[0])
  }, [categoryButtons])
    const updateCategories = async (e) => {  
        if(e.target.checked){
            categories.push(e.target.value);
            setCategoryArray([...categories])
        }else{
            const index = categories.indexOf(e.target.value)
            categories.splice(index, 1)
            setCategoryArray([...categories])
        }
    }
    const pushCategories = async () => {
      
        if(categories.length > 0){
          const categoryString = categories.join('x');
          const response = await fetchData(
            `http://localhost:3000/news/categories/?categories=${categoryString}&id=${user._id}`
          );
          const responseData = await response.json();
          const categoryArray = responseData.categories.split('x');

          setCategoryButtons(categoryArray);
          if (responseData.categories !== null) {
            const response = await fetchData(
              `http://localhost:3000/users/dashboardinit/?id=${user._id}`
            );
            const responseData = await response.json();
            
          }
        }else{
          setCategoryEmpty(true)
          
        }
        handleClose();
        
    }
    // Creating a function to fetch the data pertaining to the selected category
    const fetchCategory = async (category) => {
        const response = await fetchData(`http://localhost:3000/news/category/?category=${category}`)
        const responseData = await response.json();
        setCategoryData([])
        setCategoryData(responseData.articles)
        
    }
    // Create function that takes border style of initial button in dashboard
    const changeButton = () => {
        setClicked(true)
    }
    // Create a function that lets the user add categories and delete categories
    const addCategories = () => {
      categoryButtons.forEach((item) => {
      })
      handleOpen();

    }
    const fetchSaved = () => {
      setCategoryData(user.articles)
    }
  return (
    <div>
      <h1 className="welcome">Dashboard</h1> 
      <Container>
        <Grid container spacing={2}>
          {categoryButtons.map((category) => {
            return (
              <Grid item xs={6} className={classes.gridItem}>
                <Button id={category}  variant="outlined" size="small" className={category == categoryButtons[0] && clicked === false ? classes.categoryBorder : classes.categoryButton} onClick={() => {changeButton(); fetchCategory(category)}}>{category.toUpperCase()}</Button>
              </Grid>
            ); 
          })}
          <Grid item xs={6} className={classes.gridItem}>
                <Button disabled={!categoryEmpty} variant="outlined" size="small" className={classes.categoryButton} onClick={fetchSaved}>Saved</Button>
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <Button disabled={!categoryEmpty} variant="outlined" size="small" className={classes.categoryButton} onClick={addCategories}>Add</Button>
              </Grid>
        </Grid>
      </Container>

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
                control={<Checkbox defaultChecked={categoryButtons.includes('entertainment')} />}
                label="Entertainment"
                value="entertainment"
                id="entertainment"
                onChange={(e) => updateCategories(e)}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={categoryButtons.includes('sports')}/>}
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
            <Button
              variant="contained"
              className={classes.saveButton}
              onClick={pushCategories}
              disabled={categoryArray.length === 0}
            >
              Save
            </Button>
          </Typography>
          
        </Box>
      </Modal>
      <Container className="articlesConsole">
        {categoryData.articles}
        <Grid container columnSpacing={2} rowSpacing={3}>
                {categoryData.map((article) => {
                    return <Articles image={article.urlToImage} title={article.title} url={article.url} source={article.source.name} description={article.description} save={article}/>
                })}
            </Grid>
      </Container>
      
    </div>
  );
};

export default Dashboard;
