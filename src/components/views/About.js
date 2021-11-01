import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WomanReading from '../../images/woman-reading-news.jpg'
import './About.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
    
`
const AboutHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const AboutHeaderSlogan = styled.div`

`
const AboutContentsHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const AboutContent = styled.div`
    flex: 1;
`
const ImageHolder = styled.div``
const Image = styled.img`
    object-fit: cover;
`
const About = (props) => {
    const [headerHeight, setHeaderHeight] = useState(props.headerHeight)
    console.log(headerHeight)
    useEffect(() => {
        setHeaderHeight(props.headerHeight)
    }, [props.headerHeight])
    return (
        <Container>
            <AboutHeader className="aboutImage" style={{position: 'relative'}}>
                    
            </AboutHeader>
            <AboutContentsHolder style={{padding: '1rem'}}>
                <Typography variant="h4" color="secondary" style={{textAlign: 'center', maxWidth: '800px'}}>
                    NewsPinger is a easy way to Keep your eyes on what matters to you and from sources you trust
                </Typography>
                <AboutContent>
                    <ImageHolder>
                        <Image />
                    </ImageHolder>
                </AboutContent>
                <AboutContent>
                    <ImageHolder>
                        <Image />
                    </ImageHolder>
                </AboutContent>
            </AboutContentsHolder>
        </Container>
    )
}

export default About
