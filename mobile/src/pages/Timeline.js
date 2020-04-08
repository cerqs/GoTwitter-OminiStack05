import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Tweet from '../components/Tweet';
import Api from '../Services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ioClient from 'socket.io-client';


export default class Timeline extends Component {
  state= {
    tweets:[],
  };

  async componentDidMount(){
    this.HeaderConfig();
    this.subscribeToEvents();


    const response = await Api.get('tweets');
    this.setState({ tweets: response.data });
  }
  
  HeaderConfig(){
    this.props.navigation.setOptions({ 
      headerRight:() => ( 
        <TouchableOpacity onPress={ () => (this.props.navigation.navigate('New')) }>
            <Icon 
                style={{ marginRight: 25 }}
                name='add-circle-outline'
                size={ 24 }
                color="#4BB0EE"
            />
        </TouchableOpacity> 
       )
     });
  }
  
  

  subscribeToEvents = () =>{
    const io = ioClient.connect('http://192.168.0.7:3000', { forceNode: true });
   
    io.on('tweet', data => {
        this.setState({ tweets:[ data, ...this.state.tweets] });
    });

    io.on('like', data => {
        this.setState({ tweets: this.state.tweets.map( tweet =>
            tweet._id === data._id ?  data : tweet


        ) })
    });

}

  render() {
    return (
      <View style={ styles.container } >
        <FlatList
          data ={ this.state.tweets }
          keyExtractor ={ tweet=> tweet._id }
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
      </View>
    )}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
