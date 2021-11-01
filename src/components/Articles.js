import React, {useState} from 'react'
import { Grid } from '@mui/material'
import { Card, CardActions, CardMedia, CardContent, Button } from '@mui/material'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import './Articles.css'
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import ColorModeContext from '../context/ColorModeContext';

const useStyles = makeStyles((theme) => ({
    cardImage: {
      [theme.breakpoints.up(0)]: { 
        height: 70,
      },
      [theme.breakpoints.up(350)]: {
        height: 90
      },
      [theme.breakpoints.up(400)]: {
        height: 106
      },
      [theme.breakpoints.up(450)]: {
        height: 115
      },
      [theme.breakpoints.up(499)]: {
        height: 125
      },
      [theme.breakpoints.up(550)]: {
        height: 145
      },
      [theme.breakpoints.up(600)]: {
        height: 100
      },
      [theme.breakpoints.up(650)]: {
        height: 140
      },
      [theme.breakpoints.up(1000)]: {
        height: 180
      },
      [theme.breakpoints.up(1050)]: {
       
      },
      [theme.breakpoints.up(1150)]: {
        
      },
      [theme.breakpoints.up(1200)]: {
        
      },
      [theme.breakpoints.up(1250)]: {
        height: 175
      },
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    source: {
      textAlign: 'right'
    }
  }));
  const SearchButton = () => (
    <IconButton>
      <SearchIcon fontSize="large"/>
    </IconButton>
    )
    const fetchNews = async (url) => {
      const response = await fetch(url, { 
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      return response;
  }
  
const Articles = (props) => {
    const [articleTitle, setArticleTitle] = useState('');
    const classes = useStyles();
    let title = null;
    const colorMode = React.useContext(ColorModeContext);
    if(props.title.includes('-')){
      title = props.title.lastIndexOf('-');
      title = props.title.slice(0, title);
    }else{
      title = props.title
    }
    //creating a function that saves the article to the Database
    
    const saveArticle = async (e) => {
      console.log()
      e.preventDefault();
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/save`, props.save).then(
        (response) => {

          console.log(response)
        }
      )
      
    }
    let dividerColor;
    let saveButtonColor;
    if(colorMode.color == 'light'){
      dividerColor = 'lightgrey'
      saveButtonColor = '#5b92e5'
    }else{
      saveButtonColor = '#90CAF9'
    }
    
    return ( 
      <Grid xs={12} sm={6} md={4} lg={3} item style={{zIndex: '10'}} sx={{ gridRow: { borderBottom: '', position: 'relative', paddingBottom: '2rem', '&::after': { content: '"dfdfdfdfd"', position: 'absolute', width: '94.8%', height: '90%', backgroundColor: 'transparent', borderBottom: '1px solid', borderColor: dividerColor, display: 'block', zIndex: '-1', top: '10%'}}}} >
        <Card className="articleCard">
          <CardMedia className="cardMedia"> 
            <div className={`${classes.cardImage} articleImage`}>
              <img src={props.image} alt="" />
            </div>
          </CardMedia>
          <CardContent>
            <Typography variant="" gutterBottom component="div">
              {title}
            <Typography className={classes.source} component="div">
              {props.source}
            </Typography>
              <hr />
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions} >
            <Button href={props.url} style={{color: saveButtonColor}}>read more</Button>
            <Button variant="contained" startIcon={<SaveIcon />} style={{color: saveButtonColor}} color="primary" onClick={(e) => saveArticle(e)}>Save</Button>  
          </CardActions>
        </Card>
      </Grid>
    );
}

export default Articles
