import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profilePic from '../../images/4a9037a6-7ecb-4ba5-9da6-6c3ebaedb446.jpg'
import Collapse from '@material-ui/core/Collapse'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        width: '60%',
        position: 'relative',
        marginLeft: '20%',
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
}))

export default function Contacts() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={classes.rootElement}>
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
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Ohjelmistotuotannon pääaineopiskelija, fullstack-kehittäjä. &nbsp;|&nbsp; Frontend: React, Javascript, Axios, CSS, Proptypes, Netlify. &nbsp;|&nbsp; Backend: Node.js, Express, MongoDB (mongoose), Heroku, Jsonwebtoken. 
                    &nbsp;| &nbsp;Testaaminen: Cypress, Jest, Supertest
                    </Typography><br />
                    <Typography paragraph className={classes.contact}><GitHubIcon className={classes.contact}/> &nbsp;&nbsp;https://github.com/Santeriii</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
