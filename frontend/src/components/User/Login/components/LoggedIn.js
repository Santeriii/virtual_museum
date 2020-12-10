import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'
import CheckIcon from '@material-ui/icons/Check'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'
import { useMediaQuery } from 'react-responsive'

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
    mobileStyle: {
        position: 'relative',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(44, 44, 44, 0.9)',
        padding: '4rem 8rem',
        border: '3px solid #ffffff',
        borderRadius: '2% 6% 5% 4% / 1% 1% 2% 4%',
        color: '#ffffff',
        marginTop: '0%',
        boxShadow: '0 15px 10px rgba(0, 0, 0, 0.7)',
        maxWidth: '60%',
    },
}))

export default function LoggedIn({ logout }) {
    const classes = useStyles()
    const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    return (
        <div className={classes.rootElement}>
            {isBigScreen && (
                <h1 className={classes.paper}>
                    <CheckIcon className={classes.checkIcon} />
                    <h1 className={classes.text_center}>
                        Tervetuloa {loggedUserJSON.name}!
                    </h1>
                    <Button className={classes.logout} onClick={logout}>
                        <ExitToAppIcon className={classes.logoutButton} />
                        Kirjaudu ulos
                    </Button>
                    <Footer />
                </h1>
            )}
            {isTabletOrMobile && (
                <h1 className={classes.mobileStyle}>
                    <CheckIcon className={classes.checkIcon} />
                    <h1 className={classes.text_center}>
                        Tervetuloa {loggedUserJSON.name}!
                    </h1>
                    <Button className={classes.logout} onClick={logout}>
                        <ExitToAppIcon className={classes.logoutButton} />
                        Kirjaudu ulos
                    </Button>
                    <Footer />
                </h1>
            )}
        </div>
    )
}
