import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import { Contact } from './components/contact/Contact.js'
import { Home } from './components/home/Home.js'
import { About } from './components/about/About.js'
import { Login } from './components/login/Login.js'
import { Navbar } from './components/navbar/Navbar.js'
import { Signup } from './components/signup/Signup.js'
import { Footer } from './components/footer/Footer.js'
import { Error } from './components/errorpage/Error.js'
import { Logout } from './components/login/Logout.js'

import { initialState, reducer } from './reducer/useReducer.js'

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/"> <Home /></Route>
      <Route path="/about"> <About /> </Route>
      <Route path="/contact"> <Contact /> </Route>
      <Route path="/login"> <Login /> </Route>
      <Route path="/signup"> <Signup /> </Route>
      <Route path="/logout"> <Logout /> </Route>
      <Route> <Error /> </Route>
    </Switch>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value ={{state, dispatch}}>
        <Navbar />
        <Routing/>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App
