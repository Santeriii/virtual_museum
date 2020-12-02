import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '200%',
        fontFamily: 'sans',
    },
    button_text: {
        textDecoration: 'none',
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '90%',
        fontFamily: 'sans',
    },
    appBar: {
        backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/02/25/00/09/texture-3179529_1280.jpg")',
    },
}))

export default function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
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
        </div>
    )
}
