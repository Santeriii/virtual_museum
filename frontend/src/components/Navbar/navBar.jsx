import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 10px black',
        fontSize: '240%',
        fontFamily: 'sans',
        marginRight: '1%',
    },
    button_text: {
        textDecoration: 'none',
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '80%',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        letterSpacing: '1px',
    },
    appBar: {
        backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/02/25/00/09/texture-3179529_1280.jpg")',
    },
    appBarMobile: {
        backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/02/25/00/09/texture-3179529_1280.jpg")',
        float: 'none',
        display: 'block',
        textAlign: 'left',
    },
    itemAlignMobile: {
        float: 'none',
        display: 'block',
        textAlign: 'left',
    },
    mobileButton_text: {
        textDecoration: 'none',
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '80%',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
}))

export default function Navbar() {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    return (
        <div className={classes.root}>
            {isBigScreen && 
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            Virtuaalimuseo
                        </Link>
                    </Typography>

                    <Link to="/museum" className={classes.link}>
                        <Button
                            data-cy="museumNav"
                            color="inherit"
                            className={classes.button_text}>
                            Museo
                        </Button>
                    </Link>

                    <Link to="/forum" className={classes.link}>
                        <Button
                            data-cy="forumNav"
                            color="inherit"
                            className={classes.button_text}>
                            Foorumi
                        </Button>
                    </Link>

                    <Link to="/login" className={classes.link}>
                        <Button
                            data-cy="loginNav"
                            color="inherit"
                            className={classes.button_text}>
                            Kirjaudu
                        </Button>
                    </Link>

                    <Link to="/contacts" className={classes.link}>
                        <Button
                            data-cy="contacsNav"
                            color="inherit"
                            className={classes.button_text}>
                            Yhteystiedot
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            }
            {isTabletOrMobile &&
            <AppBar position="static" className={classes.appBarMobile}>
                <Toolbar className={classes.itemAlignMobile}>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            Virtuaalimuseo
                        </Link>
                    </Typography>

                    <Link to="/museum" className={classes.link}>
                        <Button
                            data-cy="museumNav"
                            color="inherit"
                            className={classes.mobileButton_text}>
                            Museo
                        </Button>
                    </Link>

                    <Link to="/forum" className={classes.link}>
                        <Button
                            data-cy="forumNav"
                            color="inherit"
                            className={classes.mobileButton_text}>
                            Foorumi
                        </Button>
                    </Link>

                    <Link to="/login" className={classes.link}>
                        <Button
                            data-cy="loginNav"
                            color="inherit"
                            className={classes.mobileButton_text}>
                            Kirjaudu
                        </Button>
                    </Link>

                    <Link to="/contacts" className={classes.link}>
                        <Button
                            data-cy="contacsNav"
                            color="inherit"
                            className={classes.mobileButton_text}>
                            Yhteystiedot
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            }
        </div>
    )
}
