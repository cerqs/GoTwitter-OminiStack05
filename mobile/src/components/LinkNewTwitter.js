import React, { Component } from 'react'
import {  TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class LinkNewTwitter extends Component {

    
    handleNewTweet = () =>{
        navigation.navigate('New');
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.handleNewTweet }>
                <Icon 
                    style={{ marginRight: 25 }}
                    name='add-circle-outline'
                    size={ 24 }
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    }
}
