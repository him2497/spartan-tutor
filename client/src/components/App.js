import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard'
import RequestNew from './student/RequestNew'
import StudentDashboard from './student/studentDashboard'
import TutorDashboard from './tutor/tutorDashboard'
import ChatRoom from './chat/ChatRoom'

class App extends React.Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div style={{fontFamily: 'Montserrat'}}>
            <Header/>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route path="/students/requests/new" component={RequestNew}></Route>
            <Route path="/student/dashboard" component={StudentDashboard}></Route>
            <Route path="/tutor/dashboard" component={TutorDashboard}></Route>
            <Route path="/tutor/requests/comments/:id/:question/:user" component={ChatRoom}></Route>
            <Route path="/student/requests/comments/:id/:question/:user" component={ChatRoom}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
