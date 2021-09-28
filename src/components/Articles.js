import React, {useState} from 'react'
import { Grid } from '@mui/material'
import { Card, CardActions, CardMedia, CardContent, Button } from '@mui/material'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import './Articles.css'
import { flexbox } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';

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
      display: flexbox,
      justifyContent: 'space-between'
    },
    source: {
      textAlign: 'right'
    }
  }));

const Articles = (props) => {
    const [articleTitle, setArticleTitle] = useState('');
    const classes = useStyles();
    let title = props.title.lastIndexOf('-');
    title = props.title.slice(0, title);
    

    console.log(title)
    return (
      <Grid xs={6} sm={4} lg={3} item>
        <Card className="articleCard">
          <CardMedia className="cardMedia">
            <div className={`${classes.cardImage} articleImage`}>
              <img src={props.image} alt="" />
            </div>
          </CardMedia>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              {title}
            <Typography className={classes.source} component="div">
              {props.source}
            </Typography>
              <hr />
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions} >
            <Button href={props.url}>read more</Button>
            <Button variant="contained" startIcon={<SaveIcon />} color="secondary">Save</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}

export default Articles
