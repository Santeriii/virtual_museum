import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Footer from './components/Footer'
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
        textShadow: '2px 2px 4px #000000',
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
    }
}))

export default function Home() {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    return (
        <div className={classes.rootElement}>
            {isBigScreen &&
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Tervetuloa!</h1>
                <p className={classes.paragraph}>
                    Virtuaalimuseon tarjonnasta löydät sisältöä aina kuvataidekokoelmista
                    muinaisesineisiin. Tarjonta kattaa museot ympäri Suomen. Sisältö on
                    koottu kätevästi yhteen paikkaan, jolloin käyttäjän ei tarvitse
                    selailla usean yksittäisen museosivuston välillä. Jokaisen artikkelin osalta tarjotaan artikkelin nimi ja sijaintitiedot
                    sekä mahdollinen sisältökieli. Hauskaa
                    kulttuurihetkeä!
                    <br />
                    <br />
                    Osat:
                    <br />
                    <br />
                    Museo - Hae museoiden sisältöä hakukoneen avulla
                    <br />
                    <br />
                    Foorumi - Keskustele muiden sivoston käyttäjien kanssa
                    <br />
                    <br />
                    Kirjaudu - Kirjaudu sisään ja jätä kommenttisi keskustelufoorumille
                    <br />
                    <br />
                    Yhteystiedot - Tarkastele sivuston luojien ja ylläpitäjien
                    yhteystietoja
                </p>
                <Footer />
            </h1>
            }
            {isTabletOrMobile &&
            <h1 className={classes.mobileStyle}>
                <h1 className={classes.text_center}>Tervetuloa!</h1>
                <p className={classes.paragraph}>
                    Virtuaalimuseon tarjonnasta löydät sisältöä aina kuvataidekokoelmista
                    muinaisesineisiin. Tarjonta kattaa museot ympäri Suomen. Sisältö on
                    koottu kätevästi yhteen paikkaan, jolloin käyttäjän ei tarvitse
                    selailla usean yksittäisen museosivuston välillä. Jokaisen artikkelin osalta tarjotaan artikkelin nimi ja sijaintitiedot
                    sekä mahdollinen sisältökieli. Hauskaa
                    kulttuurihetkeä!
                    <br />
                    <br />
                    Osat:
                    <br />
                    <br />
                    Museo - Hae museoiden sisältöä hakukoneen avulla
                    <br />
                    <br />
                    Foorumi - Keskustele muiden sivoston käyttäjien kanssa
                    <br />
                    <br />
                    Kirjaudu - Kirjaudu sisään ja jätä kommenttisi keskustelufoorumille
                    <br />
                    <br />
                    Yhteystiedot - Tarkastele sivuston luojien ja ylläpitäjien
                    yhteystietoja
                </p>
                <Footer />
            </h1>
            }
        </div>
    )
}
