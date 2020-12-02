import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

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
}))

export default function LoggedIn() {
    const classes = useStyles()

    const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Tervetuloa {loggedUserJSON.name}!</h1>
                <button
                    onClick={() => window.localStorage.removeItem('loggedNoteappUser')}>
                    kirjaudu ulos
                </button>
            </h1>
        </div>
    )
}
