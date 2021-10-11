import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    footer: {
        color: 'white',
        display: 'flex',
        backgroundColor: 'background.default',
        padding: '.5rem',
        width: '100%',
        flexDirection: 'column'
    },
    footerTop: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    span: {
        padding: '.3rem'
    },
    socialFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        '& span': {
            padding: '.5rem'
        },
        width: '100%'
    },
    divider: {
        color: 'white',
        width: '100%',
        marginTop: '1rem',
        height: '1px'
        
    },
    iconDiv: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
        '& span': {
            
        },
        marginTop: '1rem'
    },
    copyRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& span': {
            marginTop: '.3rem'
        }
    }
})

const Footer = (props) => {
  const classes = useStyles()

  return (
    <>
      
      <div className={classes.footer}>
          <hr className={classes.divider} />
        <div className={classes.footerTop}>
          <div className={classes.socialFooter}>
            <span>HOME</span>
            <span>LOGIN</span>
            <span>DASHBOARD</span>
            <span>ABOUT</span>
          </div>
          <div className={classes.iconDiv}>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <YouTubeIcon />
            </span>
            <span>
              <FacebookIcon />
            </span>
          </div>
        </div>
        <hr className={classes.divider}/>

        <div className={classes.copyRight}>
         <span>&copy;  NewsPinger &nbsp;. All Rights Reserved</span>
        <span>Powered &nbsp; by &nbsp; NewsApi</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
