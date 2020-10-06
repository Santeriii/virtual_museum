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

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Tervetuloa!</h1>
                <p className={classes.paragraph}>
                    Virtuaalimuseon tarjonnasta löydät sisältöä aina kuvataidekokoelmista
                    muinaisesineisiin. Tarjonta kattaa museot ympäri Suomen. Sisältö on
                    koottu kätevästi yhteen paikkaan, jolloin käyttäjän ei tarvitse
                    selailla usean yksittäisen museosivun välillä. Hauskaa
                    kulttuurihetkeä!
                    <br />
                    <br />
                    Osat:
                    <br />
                    <br />
                    Museo - Hae museoiden sisältöä kategorian, sijainnin ja iän
                    perusteella
                    <br />
                    <br />
                    Kirjaudu - Luo omat käyttäjätunnuksesi, kirjaudu sisään ja tarkastele
                    omia suosikkilistauksiasi
                    <br />
                    <br />
                    Yhteystiedot - Tarkastele sivuston luojien ja ylläpitäjin
                    yhteystietoja, anna palautetta sivustosta
                </p>
            </h1>
        </div>
    )
}
