import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    paragraph: {
        fontSize: '90%',
        fontFamily: 'Serif',
    },
    divider: {
        backgroundColor: 'white',
    },
}))
    

export default function RecordList({ records }) {
    const classes = useStyles()

    return (
        <div>
            {records && (
                <>
                    {records.records.map(record => (
                        <>
                        <p className={classes.paragraph}>artikkelin nimi = {record.title}</p>
                        <p className={classes.paragraph}>tyyppi = {record.formats[0].translated}</p>
                        <p className={classes.paragraph}>sijainti</p>
                        <ul className={classes.paragraph}>{record.buildings.map(building => (
                            <li className={classes.paragraph}>{building.translated}</li>
                        ))}
                        </ul>
                        <Divider className={classes.divider}/>
                        </>
                    ))}
                </>
            )}
        </div>
    )
}