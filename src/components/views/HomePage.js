import React, {useState, useEffect, useContext} from 'react'
import './HomePage.css'
import { Container, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Articles from '../Articles';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@mui/material';
import ColorModeContext from '../../context/ColorModeContext';



const fetchNews = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const useStyles = makeStyles({
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 10,
        marginTop: '0',
        fontWeight: 500,
    },
    input: {
        color: 'black',
        fontSize: '2em',
        height: '100%'
    },
    searchIcon: {
      
    }
});

const HomePage = (props) => {
    const [articles, setArticles] = useState([])
    // component to put at the end of search
    const [query, setQuery] = useState('')
    const classes = useStyles();
    let iconColor = ''
    const colorMode = useContext(ColorModeContext)
    if(colorMode.color === 'light'){
        iconColor = 'black'
    }else{
        iconColor = 'white'
    }
    // intiate useEffect to get Headlines news upon page load
    useEffect( async () => {
        const response = await fetchNews('http://localhost:3000/news/headlines');
        const responseData = await response.json();
        setArticles(responseData.articles)
        
    }, [])
    const updateQuery = (e) => {
        
        setQuery(e.target.value)
    }
    const searchNews = async (e) => {
        e.preventDefault();
        const response = await fetchNews(`http://localhost:3000/news/search/?query=${query}`);
        const responseData = await response.json()
        setArticles(responseData.articles)
    }
    return (
      <Container>
        <div className="welcome"><h3>Todays Headlines</h3></div>
        <div className="searchBox">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchNews(e);
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search Todays News"
              variant="outlined"
              margin="none"
              className={classes.textField}
              InputProps={{
                className: classes.input,
                endAdornment: <SearchIcon className={classes.searchIcon} style={{'width': '3rem', 'fontSize': '2rem', 'color': iconColor}} onClick={(e) => {searchNews(e)}}/>,
              }}
              onChange={(e) => { updateQuery(e)}}
            />
          </form>
        </div>
        <Grid container columnSpacing={2} rowSpacing={3}>
          {articles.map((article) => {
            return (
              <Articles
                image={article.urlToImage}
                title={article.title}
                url={article.url}
                source={article.source.name}
                description={article.description}
                save={{...article}}
              />
            );
          })}
        </Grid>
      </Container>
    );
}

export default HomePage
