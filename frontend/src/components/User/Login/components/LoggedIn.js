import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'
import CheckIcon from '@material-ui/icons/Check'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
    },
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
    checkIcon: {
        fontSize: '1000%',
        color: 'limegreen',
        margin: 'auto',
    },
    logout: {
        color: 'red',
        fontSize: '100%',
    },
    logoutButton: {
        color: 'red',
        fontSize: '300%',
    },
}))

export default function LoggedIn({ logout }) {
    const classes = useStyles()

    const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <CheckIcon className={classes.checkIcon} />
                <h1 className={classes.text_center}>Tervetuloa {loggedUserJSON.name}!</h1>
                <Button className={classes.logout} onClick={logout}>
                    <ExitToAppIcon className={classes.logoutButton} />
                    Kirjaudu ulos
                </Button>
                <Footer />
            </h1>
        </div>
    )
}
