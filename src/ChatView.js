import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

import SocketIOClient from 'socket.io-client';

class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
      userid: '',
      firstTimeMessage: true,
    };
  }

  componentDidMount() {
    this.socket = SocketIOClient('http://192.168.0.105:3000');
    this.socket.on('chat message', (msg) => {
      msg = {
        key: Math.random,
        userid: this.state.firstTimeMessage && this.state.userid,
        message: msg,
      };
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    if (this.state.firstTimeMessage) {
      this.setState({userid: this.state.chatMessage, firstTimeMessage: false});
    } else {
      this.socket.emit('chat message', this.state.chatMessage);
    }
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) =>
      chatMessage.userid === this.state.userid ? (
        <Text style={styles.textViewUser1}>
          {chatMessage.message + ' ' + chatMessage.userid}
        </Text>
      ) : (
        <Text style={styles.textViewUser2}>{chatMessage.message}</Text>
      ),
    );

    return (
      <View style={styles.container}>
        <Text style={{alignSelf: 'center'}}>
          {'Username: ' + this.state.userid}
        </Text>
        <View style={styles.textViewContainer}>{chatMessages}</View>
        <TextInput
          style={styles.textbox}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({chatMessage});
          }}
          placeholder={
            this.state.firstTimeMessage
              ? 'Please enter user name here...'
              : 'Please enter message here...'
          }
        />
      </View>
    );
  }
}

export default ChatView;

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    justifyContent: 'flex-end',
  },
  textbox: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'black',
    height: 50,
  },
  textViewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textViewUser1: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  textViewUser2: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    margin: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
