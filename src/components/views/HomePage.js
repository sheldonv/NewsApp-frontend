import React, {useState, useEffect} from 'react'
import './HomePage.css'
import TextField from '../FormElements/TextField';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Articles from '../Articles';

const fetchNews = async () => {
    const response = await fetch('http://localhost:3000/news/headlines', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}
 
const HomePage = (props) => {
    const [articles, setArticles] = useState([])

    // intiate useEffect to get Headlines news upon page load
    useEffect( async () => {
        const response = await fetchNews();
        const responseData = await response.json();
        setArticles(responseData.articles)
        console.log(responseData)
    }, [])
    return (
        <Container>
            <div className="welcome"> 
                
            </div>
            <div className="searchBox">
                <h3>Search for daily News</h3>
                <TextField />
            </div>
            <Grid container columnSpacing={2} rowSpacing={3}>
                {articles.map((article) => {
                    return <Articles image={article.urlToImage} title={article.title} url={article.url} source={article.source.name}/>
                })}
            </Grid>
        </Container>
    )
}

export default HomePage
