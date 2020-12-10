import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import profilePic from '../../images/4a9037a6-7ecb-4ba5-9da6-6c3ebaedb446.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles(theme => ({
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
    },
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
    root: {
        width: '68%',
        position: 'relative',
        marginLeft: '16%',
        boxShadow: '3px 3px 8px #000000',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      image: {
          width: '23%',
          display: 'block',
        marginLeft: 'auto',
            marginRight: 'auto',
      },
      contact: {
        verticalAlign: 'middle',
      },
      mobileRoot: {
        width: '100%',
        position: 'relative',
        boxShadow: '3px 3px 8px #000000',
      },
      mobileImage: {
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
}))

export default function Contacts() {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    return (
        <div className={classes.rootElement}>
            {isBigScreen &&
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                    </Avatar>
                    }
                    title="Santeri Einola"
                    subheader="Tieto- ja viestintätekniikan insinööriopiskelija, Metropolia-ammattikorkeakoulu"
                />
                <img
                    src={profilePic}
                    className={classes.image}
                    alt='Santeri'
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Ohjelmistotuotannon pääaineopiskelija, fullstack-kehittäjä. &nbsp;|&nbsp; Frontend: React, Javascript, Axios, CSS, Proptypes, Netlify. &nbsp;|&nbsp; Backend: Node.js, Express, MongoDB (mongoose), Heroku, Jsonwebtoken. 
                    &nbsp;| &nbsp;Testaaminen: Cypress, Jest, Supertest
                    </Typography><br />
                    <Typography paragraph className={classes.contact}><GitHubIcon className={classes.contact}/> &nbsp;&nbsp;https://github.com/Santeriii</Typography>
                    <Footer />
                </CardContent>
            </Card>
            }
            {isTabletOrMobile &&
            <Card className={classes.mobileRoot}>
              <CardHeader
                  avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                      S
                  </Avatar>
                  }
                  title="Santeri Einola"
                  subheader="Tieto- ja viestintätekniikan insinööriopiskelija, Metropolia-ammattikorkeakoulu"
              />
              <img
                  src={profilePic}
                  className={classes.mobileImage}
                  alt='Santeri'
              />
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Ohjelmistotuotannon pääaineopiskelija, fullstack-kehittäjä. &nbsp;|&nbsp; Frontend: React, Javascript, Axios, CSS, Proptypes, Netlify. &nbsp;|&nbsp; Backend: Node.js, Express, MongoDB (mongoose), Heroku, Jsonwebtoken. 
                  &nbsp;| &nbsp;Testaaminen: Cypress, Jest, Supertest
                  </Typography><br />
                  <Typography paragraph className={classes.contact}><GitHubIcon className={classes.contact}/> &nbsp;&nbsp;https://github.com/Santeriii</Typography>
                  <Footer />
              </CardContent>
            </Card>
            }
        </div>
    )
}
