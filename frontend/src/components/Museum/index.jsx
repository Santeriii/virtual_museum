import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getRecords } from '../../services/records'
import RecordList from './RecordList'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    searchField: {
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
    },
    search: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
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
                <h1 className={classes.text_center}>Artikkelihaku</h1>
                <div className={classes.search}>
                <TextField id="filled-basic" label="Hakusana" variant="filled" className={classes.searchField} onChange={handleSearchTermChange}/><button onClick={search}><SearchIcon /></button>
                <h1 className={classes.paragraph}>Voit kohdistaa hakuja Finna.fi:ssä mukana olevien organisaatioiden eli suomalaisten kirjastojen, arkistojen ja museoiden aineistoihin. Esimerkiksi Suomen kansallisbibliografia Fennica ja kansallisdiskografia Viola ovat mukana rajapinnan kautta tarjottavissa aineistoissa. Rajapinnan ylläpidosta ja kehittämisestä vastaa Kansalliskirjaston kirjastoverkkopalvelut. Rajapintaa koskevat tiedustelut ja palaute: finna-posti AT helsinki.fi</h1>
                </div>
                <RecordList
                    records={records}
                />
            </h1>
        </div>
    )
}