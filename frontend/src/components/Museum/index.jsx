import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getRecords } from '../../services/records'
import RecordList from './RecordList'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    searchField: {
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        boxShadow: '3px 3px 8px #000000',
        marginRight: '1%',
    },
    search: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paragraph: {
        fontSize: '76%',
        fontFamily: 'Serif',
        textShadow: '2px 2px 4px #000000',
    },
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
    },
    boxShadow: {
        boxShadow: '3px 3px 8px #000000',
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
    mobileText_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
        fontSize: '140%',
    },
    mobileParagraph: {
        fontSize: '60%',
        fontFamily: 'Serif',
        textShadow: '2px 2px 4px #000000',
    },
}))

export default function Contacts() {
    const classes = useStyles()
    const [records, setRecords] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect (() => {
        const getData = async () => {
            const response = await getRecords('hakutesti')
            setRecords(response.data)
        }

        getData()
    }, [])

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
            {isBigScreen &&
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Artikkelihaku</h1>
                <div className={classes.search}>
                <TextField id="filled-basic" label="Hakusana" variant="filled" className={classes.searchField} onChange={handleSearchTermChange}/><button onClick={search} className={classes.boxShadow}><SearchIcon /></button>
                <h1 className={classes.paragraph}>Voit kohdistaa hakuja Finna.fi:ssä mukana olevien organisaatioiden eli suomalaisten kirjastojen, arkistojen ja museoiden aineistoihin. Esimerkiksi Suomen kansallisbibliografia Fennica ja kansallisdiskografia Viola ovat mukana rajapinnan kautta tarjottavissa aineistoissa. Rajapinnan ylläpidosta ja kehittämisestä vastaa Kansalliskirjaston kirjastoverkkopalvelut. Rajapintaa koskevat tiedustelut ja palaute: finna-posti AT helsinki.fi</h1>
                </div>
                <RecordList
                    records={records}
                />
                <Footer />
            </h1>
            }
            {isTabletOrMobile &&
            <h1 className={classes.mobileStyle}>
                <h1 className={classes.mobileText_center}>Artikkelihaku</h1>
                <div className={classes.search}>
                <TextField id="filled-basic" label="Hakusana" variant="filled" className={classes.searchField} onChange={handleSearchTermChange}/><button onClick={search} className={classes.boxShadow}><SearchIcon /></button>
                <h1 className={classes.mobileParagraph}>Voit kohdistaa hakuja Finna.fi:ssä mukana olevien organisaatioiden eli suomalaisten kirjastojen, arkistojen ja museoiden aineistoihin. Esimerkiksi Suomen kansallisbibliografia Fennica ja kansallisdiskografia Viola ovat mukana rajapinnan kautta tarjottavissa aineistoissa. Rajapinnan ylläpidosta ja kehittämisestä vastaa Kansalliskirjaston kirjastoverkkopalvelut. Rajapintaa koskevat tiedustelut ja palaute: finna-posti AT helsinki.fi</h1>
                </div>
                <RecordList
                    records={records}
                />
                <Footer />
            </h1>
            }
        </div>
    )
}