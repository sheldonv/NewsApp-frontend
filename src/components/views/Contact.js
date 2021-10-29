import React from 'react'
import styled from 'styled-components';
import {createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ProfilePic from '../../images/profile_image.jpeg'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import { Grid, Item } from '@mui/material';
import Designer from '../../images/webDesign.svg'
import Frontend from '../../images/monitor.svg';
import Backend from '../../images/server.svg'
import { makeStyles } from '@mui/styles';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

const useStyles = makeStyles({
    filterGreen: {
        filter: 'invert(78%) sepia(12%) saturate(6040%) hue-rotate(183deg) brightness(111%) contrast(95%);'

    },
    filterBlue: {
        filter: 'invert(78%) sepia(12%) saturate(6040%) hue-rotate(183deg) brightness(111%) contrast(95%);'
    }
})
const Container = styled.div`
   width: 100vw;
`
const ImageHolder = styled.div`
   width: 100%;
   height: 20vh;
   position: relative;
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border: none;
`
const Slogan = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`
const SloganTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 400;
`
const PitchHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
`
const PitchHeader = styled.h2`
    padding; 0;
    margin: 0;
    font-size: 3em;
    margin: 2rem 0 1rem 0;
    letter-spacing: 3px;
    text-align: center;
`

const PitchExtra = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-align: center;
`
const ProfileImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`
const ProfileImageHolder = styled.div`
    height: 10vh;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactMe = styled.div`
    max-width: 500px;
    margin-bottom: 2rem;
`
const ContactMeDesc = styled.p`
    text-align: center;
    padding: 0;
    margin: 0;
    font-weight: 900;
`
const Skills = styled.div``
const Skill = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const SkillImageHolder = styled.div`
    width: 10%;
`

let theme = createTheme();
theme = responsiveFontSizes(theme);
const About = () => {
    const classes = useStyles();
    return (
        <Container>
            <ThemeProvider theme={theme}>
<ImageHolder>
                <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F3426528%2Fimages%2Fo-HANDS-KEYBOARD-BLACK-facebook.jpg&f=1&nofb=1" />
                <Slogan>
                    <SloganTitle>
                        <Typography variant="h3">
                            Your Only Digital Solution
                        </Typography>
                    </SloganTitle>
                </Slogan>
            </ImageHolder>
            <PitchHolder>
                <PitchHeader>
                    <Typography variant="h3">
                        Designer, FullStack Web Developer
                    </Typography>
                    
                </PitchHeader>
                <PitchExtra>
                    <Typography variant="h5">
                         Designing and Coding Beautifull Apps is what I love to do.
                    </Typography>
                   
                </PitchExtra>
                <ProfileImage>
                    <ProfileImageHolder>
                        <Image src={ProfilePic}/>
                    </ProfileImageHolder>
                    
                </ProfileImage>
                <ContactMe>
                    <ContactMeDesc>
                        <Typography variant="body1" style={{letterSpacing: '1px', fontWeight: '100'}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium quasi placeat eveniet aut porro minima odit quae qui, cum voluptas adipisci et asperiores quisquam dolorem voluptatem voluptates facilis. Quaerat.
                        </Typography>
                    </ContactMeDesc>
                </ContactMe>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Skill>
                            <SkillImageHolder>
                            <Image src={Designer} className={classes.filterBlue} />
                            </SkillImageHolder>
                            <Typography>
                                Designer
                            </Typography>
                            
                        </Skill>
                    </Grid>
                    <Grid item xs={12}>
                        <Skill>
                            <SkillImageHolder>
                                <Image src={Frontend} className={classes.filterGreen}/>
                            </SkillImageHolder>
                            <Typography>
                                Frontend
                            </Typography>
                        </Skill>
                    </Grid>
                    <Grid item xs={12}>
                        <Skill>
                            <SkillImageHolder>
                                <Image src={Backend} className={classes.filterGreen}/>
                            </SkillImageHolder>
                            <Typography>
                                Backend
                            </Typography>
                        </Skill>
                    </Grid>
                    
                </Grid>
            </PitchHolder>
            </ThemeProvider>
            
        </Container>
    )
}

export default About
