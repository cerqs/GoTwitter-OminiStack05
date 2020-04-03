import React, { Component } from 'react';
import socket from 'socket.io-client';
import './Timeline.css';
import twitterLogo from '../twitter.svg';
import api from '../services/Api';
import Tweet from '../components/Tweet';

export default class TimeLine extends Component {
    state = {
        tweets:[],
        newTweet: " "
    };



    async componentDidMount (){
        this.subscribeToEvents();

        const response = await api.get('tweets');
        this.setState({ tweets:response.data });

    }



    
    handleNewTweet = async e =>{
        if (e.keyCode !== 13)return;

        const content = this.state.newTweet;
        const author =  localStorage.getItem('@GoTwitter:username');

        //console.log(content, author);

        await api.post('tweets', { content, author });

        this.setState({ newTweet:"" });
    };




    handleInputChange = e =>{
        this.setState({ newTweet: e.target.value  });
    };



    subscribeToEvents = () =>{
        const io = socket('http://192.168.0.7:3000');
        
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
            <div className = "timeline-wrapper">
                <img height ={ 24 } src={ twitterLogo } alt="gotwitter"/>
                <form>
                    <textarea
                        value={ this.state.newTweet }
                        onChange={ this.handleInputChange }
                        onKeyDown={ this.handleNewTweet }
                        placeholder="O que está acontecendo? "
                    />    
                </form>

                <ul className="tweet-list">
                    { this.state.tweets.map(tweet => (
                        <Tweet key={ tweet._id } tweet={ tweet } />
                    ))}
                </ul>
            </div>
        )
    }
}
