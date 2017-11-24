import React, { Component } from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
        <div style={styles}>
          <Nav/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}

const styles = {
  background:'white'
}
export default App;
