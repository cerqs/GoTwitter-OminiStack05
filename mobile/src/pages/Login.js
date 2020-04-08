import React, { Component } from 'react';

import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView,
  AsyncStorage 
} from 'react-native';

import { CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {
  state = {
    username: '',
  };
  
  
  async componentDidMount(){
    const  username = await AsyncStorage.getItem('@GoTwitter:username');

    if (username){
      this.navigationToTimeline();
    }
  }

  handleInputChange = username =>{
    this.setState({ username });
  };

  handlelogin = async () =>{
    const { username } = this.state;

    if (!username.length) return;

    await AsyncStorage.setItem('@GoTwitter:username', username);

    this.navigationToTimeline();

  };

  navigationToTimeline = () => {
    const resetAction = CommonActions.reset({
        index:0,
        routes: [{name:'Timeline'}]
    });

    this.props.navigation.dispatch(resetAction);
  };


  render() {
    return (
      <KeyboardAvoidingView style= { styles.container } behavior="padding" >
        <View style = { styles.container }>
          <View style={ styles.content }>
            <View>
              <Icon name="twitter" size={64} color="#4BB0EE"  />
            </View>
            <TextInput
              style={ styles.input }
              placeholder="Nome de usuário"
              value={this.state.username}
              onChangeText={this.handleInputChange}
              returnKeyType="send"
              onSubmitEditing={this.handlelogin}
            />  
            <TouchableOpacity style = { styles.button } onPress={ this.handlelogin }>
              <Text style ={ styles.buttonText } > Entrar </Text>
            </TouchableOpacity>  
          </View>
        </View>
      </KeyboardAvoidingView>
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
