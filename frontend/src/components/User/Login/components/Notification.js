import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    text_center: {
        color: 'red',
        textAlign: 'center',
        fontSize: '300%',
    },
}))

const Notification = ({ message }) => {
    const classes = useStyles()

    if (message === null) {
        return null
    }

    return <div className={classes.text_center}>{message}</div>
}

export default Notification
