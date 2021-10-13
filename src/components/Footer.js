import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: 'text.primary',
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
        width: '100%',
        [theme.breakpoints.up('600')]: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    },
    span: {
        padding: '.3rem'
    },
    socialFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& span': {
            padding: '.5rem'
        },
        width: '100%',
        [theme.breakpoints.up('600')]: {
            width: '40%',
            paddingBottom: '1rem',
            paddingTop: '1rem'
        }
    },
    divider: {
        width: '100%',
        marginTop: '1rem',
        height: '1px',
        [theme.breakpoints.up('600')]: {
       
            margin: '0px'
        }
        
    },
    iconDiv: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
        '& span': {
            
        },
        marginTop: '1rem',
        [theme.breakpoints.up('600')]: {
            width: '40%',
            marginTop: '0px'
        }
    },
    copyRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& span': {
            marginTop: '.3rem',
            [theme.breakpoints.up('600')]: {
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-around'
             }
        },
        [theme.breakpoints.up('600')]: {
           flexDirection: 'row',
           width: '100%',
           justifyContent: 'space-around'
        }
    }
}))

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
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', padding: '1rem', paddingBottom: '-.8rem'}}>
            <div className={classes.copyRight} >
         <span style={{textAlign: 'right'}}>&copy;  NewsPinger &nbsp;. All Rights Reserved</span>
        <span>Powered &nbsp; by &nbsp; NewsApi</span>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Footer;
