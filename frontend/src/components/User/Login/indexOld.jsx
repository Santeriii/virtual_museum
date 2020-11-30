import React, { useEffect, useState } from 'react'
import loginService from '../../../services/login'
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

export default function Login() {
    const classes = useStyles()
    const [errorMessage, setErrorMessage]  = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        
        try {
            const user = await loginService.login({
                username, password,
            })

            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            )
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const loginForm = () => (
        <form onSubmit={handleLogin}>
          <div>
            username
              <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
              <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>      
    )

    return (
        <div className={classes.rootElement}>
            <h1 className={classes.paper}>
                <h1 className={classes.text_center}>Login</h1>
                <h1>{errorMessage}</h1>
                {user === null && loginForm()}
                {user !== null && <h1>Tervetuloa {user.name}!</h1>}
            </h1>
        </div>
    )
}