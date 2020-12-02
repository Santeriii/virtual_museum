import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getRecords } from '../../services/records'
import RecordList from './RecordList'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

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
    searchField: {
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
    },
    search: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}))

export default function Contacts() {
    const classes = useStyles()
    const [records, setRecords] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const search = () => {
        const getData = async () => {
            const response = await getRecords(searchTerm)
            setRecords(response.data)
        }

        if (searchTerm) {
            getData()
        }
        console.log(records)
    }

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <div className={classes.search}>
                <TextField id="filled-basic" label="Hakusana" variant="filled" className={classes.searchField} onChange={handleSearchTermChange}/><button onClick={search}><SearchIcon /></button>
                </div>
                <RecordList
                    records={records}
                />
            </h1>
        </div>
    )
}