import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Tweet from '../components/Tweet';
import api from '../Services/api';

export default class Timeline extends Component {
  state= {
    tweets:[],
  };

  async componentDidMount(){
    const response = await api.get('tweets');
    this.setState({ tweets: response.data });
    
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
