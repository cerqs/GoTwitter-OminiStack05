import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Timeline extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
