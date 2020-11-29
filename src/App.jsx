import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar/navBar.jsx'
import Home from './components/Home/'
import Contacts from './components/Contacts/index'
import Museum from './components/Museum/index'
import Login from './components/User/Login/index'

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/museum">
                    <Museum />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
