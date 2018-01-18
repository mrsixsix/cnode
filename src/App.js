import React from 'react'
import axios from "axios"
import './app.css'

import {
  HashRouter as Router,Route,Switch
}
from 'react-router-dom'
import Header from "./components/Header/Header"
import ShowTopic from "./components/ShowTopic/ShowTopic"
import Home from "./components/Home/Home"
import Create from "./components/Create/Create"
import User from "./components/User/User"
class App extends React.Component {

render () {

    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/topic/create' component={Create} />
            <Route path='/topic/:id'  component={ShowTopic}/>
            <Route path='/user/:loginname' component={User} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
