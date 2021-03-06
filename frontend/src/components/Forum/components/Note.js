import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '150%',
        maxWidth: '100%',
        marginTop: '2%',
        boxShadow: '3px 3px 8px #000000',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    favoriteText: {
        fontSize: '90%',
        fontWeight: 'bold',
    },
    mobileRoot: {
        width: '100%',
        maxWidth: '100%',
        marginTop: '2%',
        boxShadow: '3px 3px 8px #000000',
    },
})

const Note = ({ note, toggleImportance }) => {
    const classes = useStyles()
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    const label = note.important ? (
        <>
            <StarIcon />
            <p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;poista suosikeista</p>
        </>
    ) : (
        <>
            <StarBorderIcon />
            <p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;lisää suosikkeihin</p>
        </>
    )

    return isBigScreen ? (
        <Card className={classes.root}>
            <CardContent className={classes.CardContent}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    käyttäjältä {note.user && note.user.username}
                </Typography>
                <Typography variant="h5" component="h2">
                    {note.heading}
                </Typography>
                <Typography variant="body2" component="p">
                    {note.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={toggleImportance}>
                    {label}
                </Button>
            </CardActions>
        </Card>
    ) : (
        <Card className={classes.mobileRoot}>
            <CardContent className={classes.CardContent}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    käyttäjältä {note.user && note.user.username}
                </Typography>
                <Typography variant="h5" component="h2">
                    {note.heading}
                </Typography>
                <Typography variant="body2" component="p">
                    {note.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={toggleImportance}>
                    {label}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Note
