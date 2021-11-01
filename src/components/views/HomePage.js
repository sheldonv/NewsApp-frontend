import React, {useState, useEffect, useContext} from 'react'
import './HomePage.css'
import { Container} from '@mui/material';
import { Grid } from '@mui/material';
import Articles from '../Articles';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@mui/material';
import ColorModeContext from '../../context/ColorModeContext';
import styled from 'styled-components'

const InputHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: 3px;
`
const Input = styled.input`
  flex: 8;
  height: 100%;
  border: none;
  padding-left: 20px;
  font-size: 1.5rem;
  outline: none;

`
const SearchButton = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: #BBDEFB
`

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
        height: '100%',
        outline: 'none',
        border: ''
    },
    searchIcon: {
      
    },
    welcome: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '100'
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
        iconColor = '#5B92E5'
    }else{
        iconColor = 'white'
    }
    let headerText;
    if (colorMode.color == 'light') {
      headerText = '#5B92E5';
    } else {
      headerText = '#007FFF';
    }
    // intiate useEffect to get Headlines news upon page load
    useEffect( async () => {
        const response = await fetchNews(`${process.env.REACT_APP_BACKEND_URL}/news/headlines`);
        const responseData = await response.json();
        setArticles(responseData.articles)
        
    }, [])

    useEffect(() => {
      const articleGrid = document.getElementById('articlesGrid')
      console.log(articleGrid)
      articleGrid.onload = () => {
        console.log(articleGrid)
      };
      articleGrid.onload();
    }, [query])
    

    const updateQuery = (e) => {
        
        setQuery(e.target.value)
    }
    const searchNews = async (e) => {
        if(!query){
          return
        }
        e.preventDefault();
        const response = await fetchNews(`${process.env.REACT_APP_BACKEND_URL}/news/search/?query=${query}`);
        const responseData = await response.json()
        setArticles(responseData.articles)
    }
    let gridRowStyling;
    /*const rowStyling = () => {
      if(window.innerWidth < 700)
      console.log('resize')
    }
    window.onresize = rowStyling*/
    if(window.innerWidth <= 600){
      gridRowStyling = {'& > div:not(:nth-child(1n))::after' : {width: '100%'}}
    }else if(window.innerWidth <= 800){
      gridRowStyling = {'& > div:not(:nth-child(2n))::after' : {width: '100%'}}
    }else if(window.innerWidth <= 900){
      gridRowStyling = {'& > div:not(:nth-child(3n))::after' : {width: '100%'}}
    }else{
      gridRowStyling = {'& > div:not(:nth-child(4n))::after' : {width: '100%'}}
    }

    
    return (
      <Container fixed maxWidth style={{width: '100vw'}}>
        <div className={classes.welcome}><h3 style={{fontWeight: 100, color: headerText}}>Todays Headlines</h3></div>
        <div className="searchBox">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchNews(e);
            }}
          >
            <InputHolder style={{border: '1px solid lightblue'}}>
              <Input onChange={(e) => { updateQuery(e)}} placeholder="Search Today's Headlines" style={{color: '#07d'}} className='homeInputLight'/>
              <SearchButton onClick={(e) => {
                e.preventDefault();
                searchNews(e);
              }}>
                <SearchIcon style={{'width': '3rem', 'fontSize': '2rem', 'color': iconColor}}/>
              </SearchButton>
            </InputHolder>
          </form>
        </div>
        <Grid  id="articlesGrid" container columnSpacing={2} rowSpacing={5}  sx={{gridRow: gridRowStyling}} >
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
