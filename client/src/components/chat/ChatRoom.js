import React from 'react'
import * as firebase from 'firebase';
require('./ChatBubble.css')

var config = {
  apiKey: "AIzaSyAvdhpQF7-7iNDq7NFes5IssVEqsSNg69s",
  authDomain: "spartan-tutor.firebaseapp.com",
  databaseURL: "https://spartan-tutor.firebaseio.com",
  projectId: "spartan-tutor",
  storageBucket: "spartan-tutor.appspot.com",
  messagingSenderId: "683777212784"
};
firebase.initializeApp(config);

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  componentDidMount() {
    firebase.database().ref('messages/').child(`${this.props.match.params.id}`).on('value', (snapshot) => {

      const currentMessages = snapshot.val();

      if (currentMessages != null) {
        this.setState({messages: currentMessages})
      }
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.submitMessage();
      this.refs.input.value = ''
    }
  }

  updateMessage(event) {
    this.setState({message: event.target.value})
  }

  submitMessage(event) {
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
      type: this.props.match.params.type
    }
    firebase.database().ref('messages/').child(`${this.props.match.params.id}`).child(nextMessage.id).set(nextMessage)

    this.refs.input.value = ''
  }

  render() {
    const currentMessage = this.state.messages.map((message) => {
      if (message.type === "Student") {
        return (<div className='bubbledLeft' key={message.id}>
          <p>{message.text}</p>
          <p style={{
              font: '12px Montserrat'
            }}>By {this.props.match.params.user}</p>
          <p style={{
              font: '10px Montserrat'
            }}>{message.type}</p>
        </div>)
      } else if (message.type === "Tutor") {
        return (<div className='bubbledRight' key={message.id}>
          <p>{message.text}</p>
          <p style={{
              font: '12px Montserrat'
          }}>By {this.props.match.params.user}</p>
          <p style={{
              font: '10px Montserrat'
            }}>{message.type}</p>
        </div>)
      }
      return(
        <div key="1xyshha"></div>)
    })
    return (<div className="container">
      <h1 style={{
          textAlign: 'center'
        }}>Discussion for {this.props.match.params.question}</h1>
      <section>
        {currentMessage}
      </section>
      <input type="text" onChange={this.updateMessage} ref="input" onKeyPress={this.handleKeyPress} placeholder="Message"></input>
      <br/>
      <button onClick={this.submitMessage} className="green center black-text btn-flat">Submit Message
        <i className="material-icons right">send</i>
      </button>
    </div>)
  }
}

export default ChatRoom;
