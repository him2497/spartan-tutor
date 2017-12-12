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

class ChatRoom extends React.Component{
  constructor(props){
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state= {
      message: '',
      messages: []
    }
  }

  componentDidMount(){
    firebase.database().ref('messages/').child(`${this.props.match.params.id}`).on('value', (snapshot) => {

      const currentMessages = snapshot.val();

      if(currentMessages != null){
        this.setState({
            messages: currentMessages
        })
      }
    })
  }

  updateMessage(event){
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/').child(`${this.props.match.params.id}`).child(nextMessage.id).set(nextMessage)
  }

  render(){
    const currentMessage = this.state.messages.map((message) => {
      return(
        <div className="bubbledLeft" key={message.id}>
          <p>{message.text}</p>
          <p style={{font: '12px Montserrat'}}>By {this.props.match.params.user}</p>
        </div>
      )
    })
    return(
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Discussion for {this.props.match.params.question}</h1>
        <section>
          {currentMessage}
        </section>
        <input type="text" onChange={this.updateMessage} placeholder="Message"></input>
        <br/>
        <button onClick={this.submitMessage} className="green center black-text btn-flat">Submit Message
          <i className="material-icons right">send</i>
        </button>
      </div>
    )
  }
}

export default ChatRoom;
