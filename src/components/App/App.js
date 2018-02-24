import React, { Component } from 'react'
import './App.css'
import Home from '../Home/Home'
import
{
  HashRouter as Router,
  Route,
  Switch
}
from 'react-router-dom'
import ATopic from '../ATpoic/ATopic'
import Author from '../Author/Author'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CreatTopic from '../CreatTopic/CreatTopic'
import Messages from '../Messages/Messages'
import GetStart from '../GetStart/GetStart'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/topic/create' component={CreatTopic}/>
            <Route path='/topic/:id'  component={ATopic}/>
            <Route path='/user/:loginname' component={Author}/>
            <Route path='/message/:count' component={Messages}/>
            <Route path='/getstart' component={GetStart}/>

          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
