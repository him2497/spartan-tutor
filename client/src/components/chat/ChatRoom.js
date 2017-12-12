import React from 'react'
import * as firebase from 'firebase';

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
    firebase.database().ref('messages/').on('value', (snapshot) => {

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
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
  }

  render(){
    const currentMessage = this.state.messages.map((message) => {
      return(
        <li key={message.id}>{message.text}</li>
      )
    })
    return(
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Discussion for {this.props.match.params.question}</h1>
        {currentMessage}
        <p>{this.props.match.params.id}</p>
        <input type="text" onChange={this.updateMessage} placeholder="Message"></input>
        <br/>
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom;
