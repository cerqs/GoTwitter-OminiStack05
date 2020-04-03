import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class Login extends Component {
  state = {
    username: '',
  }

  handleInputChange = username =>{
    this.setState({ username });
  }

  handlelogin = () =>{

  };

  render() {
    return (
      <View style = {styles.container}>
        
        <Text> textInComponent </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={this.handleInputChange}
        />  
        <TouchableOpacity 
          style={ styles.button }
          onPress={ this.handlelogin }
        >
          <Text style ={styles.button } >Entrar</Text>
        </TouchableOpacity>  

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
