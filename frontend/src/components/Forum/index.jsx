import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Footer from './components/Footer'
import noteService from './services/notes'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button'
import { useMediaQuery } from 'react-responsive'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    text_center: {
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000000',
    },
    rootElement: theme.rootElement,
    backgroundImage: theme.backgroundImage,
    paper: theme.paper,
    paperLeftAlign: theme.paperLeftAlign,
    paragraph: {
        fontSize: '70%',
        fontFamily: 'Serif',
    },
    shadow: {
      textShadow: '2px 2px 4px #000000',
    },
    starFull: {
      color: 'white',
      fontSize: '170%',
      font: 'white',
      display: 'flex',
      flexDirection: 'row',
      textShadow: '2px 2px 4px #000000',
    },
    starBorder: {
      color: 'white',
      fontSize: '170%',
      font: 'white',
      display: 'flex',
      flexDirection: 'row',
      textShadow: '2px 2px 4px #000000',
    },
    sideBySide: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
    },
    favoriteText: {
      fontSize: '80%',
      verticalAlign: 'middle',
    },
    mobilePaper: {
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
      fontSize: '160%',
    },
}))

export default function Forum() {
    const classes = useStyles()

    const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [user, setUser] = useState(null)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

  const noteFormRef = React.createRef()

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = (noteObject) => {
    noteFormRef.current.toggleVisibility()
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(() => {
        console.log(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          console.log(null)
        }, 5000)
      })
  }

  const noteForm = () => (
    <Togglable buttonLabel='uusi kommentti' ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  )


    return (
        <div className={classes.rootElement}>
            {isBigScreen &&
            <h1 className={classes.paperLeftAlign}>
                <h1 className={classes.text_center}>Keskustelufoorumi</h1>
                <p className={classes.paragraph}>
                    {user === null ?
                        <p>Kirjaudu sisään kommentoidaksesi</p> :
                        <div>
                        <p className={classes.shadow}>Hei {user.name}!</p>
                            {noteForm()}
                        </div>
                    }
                    <div className={classes.sideBySide}>
                    <h1 className={classes.shadow}>Kommentit</h1>
                    <div>
                        <Button onClick={() => setShowAll(!showAll)}>
                        {showAll ? <h1 className={classes.starBorder}><StarBorderIcon className={classes.starBorder} /><p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;näytä suosikit</p></h1> : <h1 className={classes.starFull}><StarIcon className={classes.starFull}/><p className={classes.favoriteText}>&nbsp;&nbsp;&nbsp;näytä kaikki</p></h1> }
                        </Button>
                    </div>
                    </div>
                        {notes && 
                        notesToShow.map((note, i) =>
                        <Note
                            key={i}
                            note={note}
                            toggleImportance={() => toggleImportanceOf(note.id)}
                        />
                        )}
                        {notes.length < 1 &&
                          <p>ladataan...</p>
                        }
                </p>
                <Footer />
            </h1>
            }
            {isTabletOrMobile &&
            <h1 className={classes.mobilePaper}>
              <h1 className={classes.mobileText_center}>Keskustelufoorumi</h1>
              <p className={classes.paragraph}>
                  {user === null ?
                      <p>Kirjaudu sisään kommentoidaksesi</p> :
                      <div>
                      <p className={classes.shadow}>Hei {user.name}!</p>
                          {noteForm()}
                      </div>
                  }
                  <div className={classes.sideBySide}>
                  <h1 className={classes.shadow}>Kommentit</h1>
                  <div>
                      <Button onClick={() => setShowAll(!showAll)}>
                      {showAll ? <h1 className={classes.starBorder}><StarBorderIcon className={classes.starBorder} /><p className={classes.favoriteText}>näytä suosikit</p></h1> : <h1 className={classes.starFull}><StarIcon className={classes.starFull}/><p className={classes.favoriteText}>&nbsp;näytä kaikki</p></h1> }
                      </Button>
                  </div>
                  </div>
                      {notes && 
                      notesToShow.map((note, i) =>
                      <Note
                          key={i}
                          note={note}
                          toggleImportance={() => toggleImportanceOf(note.id)}
                      />
                      )}
                      {notes.length < 1 &&
                        <p>ladataan...</p>
                      }
              </p>
              <Footer />
            </h1>
            }
        </div>
    )
}
