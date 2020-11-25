import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getRecords } from '../../services/records'
import RecordList from './RecordList'

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

export default function Contacts() {
    const classes = useStyles()
    const [records, setRecords] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await getRecords()
            setRecords(response.data)
        }

        getData()
        console.log(records)
    }, [records])

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <RecordList
                    records={records}
                />
            </h1>
        </div>
    )
}