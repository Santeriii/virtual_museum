import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    paragraph: {
        fontSize: '90%',
        fontFamily: 'Arvo',
    },
    divider: {
        backgroundColor: 'white',
    },
    script: {
        fontFamily: "Seaweed Script",
        color: '#fff',
        textAlign: 'center',
        fontSize: '40px',
        position: 'relative',
        margin: '0',
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: 'verdana',
        fontSize: '1em',
        fontWeight: '700',
        color: '#f5f5f5',
        textShadow: '1px 1px 1px #919191,1px 2px 1px #919191,1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)',
    },
    shadow: {
        color: '#fff',
        fontFamily: 'Arvo',
        fontWeight: 'bold',
        textShadow: '-3px -3px 0 #222,3px -3px 0 #222,-3px 3px 0 #222,3px 3px 0 #222,4px 4px 0 #fff,5px 5px 0 #fff,6px 6px 0 #fff,7px 7px 0 #fff',
        lineHeight: '0.8em',
        letterSpacing: '0.1em',
        transform: 'scaleY(0.7)',
        webkitTransform: 'scaleY(0.7)',
        mozTransform: 'scaleY(0.7)',
        margin: '0',
        textAlign: 'center',
        fontSize: '90%',
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
                        <p className={classes.text}>{record.title}</p>
                        <p className={classes.paragraph}>tyyppi = {record.formats[0].translated}</p>
                        <p className={classes.paragraph}>sijainti</p>
                        <ul className={classes.paragraph}>{record.buildings.map(building => (
                            <li className={classes.paragraph}>{building.translated}</li>
                        ))}
                        </ul>
                        {record.languages.length > 0 &&
                            <>
                            <p className={classes.paragraph}>kielet</p>
                            <ul className={classes.paragraph}>{record.languages.map(lang => (
                                <li className={classes.paragraph}>{lang}</li>
                            ))}
                            </ul>
                            </>
                        }
                        <Divider className={classes.divider}/>
                        </>
                    ))}
                </>
            )}
        </div>
    )
}