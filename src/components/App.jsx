import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Game from './components/Game';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import queryString from 'query-string';

//AUTOMATICALLY PLAY WHEN VALID USERNAMES ENTERED????

export default class App extends Component {
	//SOURCE OF TRUTH!!!! AND DON'T FORGET IT//
	//================WARNING================//
	//--------NOW ENTERING TRUTH ZONE--------//
	//
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
			users1: null,
			user2: null
		};
	}
	//
	//==================NOTICE================//
	//-----------LEAVING TRUTH ZONE-----------//

	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		this.setState({ user1: value.user1 });
		this.setState({ user2: value.user2 });

		/* if (this.state.user1 != null && this.state.user2 != null) {
			this.getTweets(this.state.user1, this.state.user2, 10);
		} */
	}

	callBack = (stateData) => {
		//iterate through stateData to store each key value pair
		var tempName = stateData.name;
		var tempValue = stateData.value;
		this.setState({ tempName: tempValue });
	};

  getURLQuery = () => {
    const query = this.props.location;
  }


	getTweets() {
		var Twit = require('twit');

		var T = new Twit({
			consumer_key: 'CUUNuT0vlRRXz039KpBeYJCcy',
			consumer_secret: 'GFvcTpWxrzzXHdJI2ToandnPyTSG7YUC1d2fh1TFPI0Y7QWnkY',
			access_token: '2909934652-k0mHQI7SrZADlTjHHdhWuTOwTwu4b9cPf9Yil3U',
			access_token_secret: 'WSY47I8IXXQLuuTeAolkVuv6lgjqJzh1EMglruSyPrjrb'
		});

		T.get(
			'account/verify_credentials',
			{
				include_entities: false,
				skip_status: true,
				include_email: false
			},
			onAuthenticated
		);

		var num = 10;
		var tempTweets = [];

		var params1 = {
			screen_name: user1,
			count: num,
			json: true
		};
		var params2 = {
			screen_name: user2,
			count: num,
			json: true
		};

		T.get('statuses/user_timeline', params1, searchedData);
		//console.log('things are working so far')
		T.get('statuses/user_timeline', params2, searchedData);

		tempTweets = shuffle(tempTweets);
		this.setState({ tweets: tempTweets });
		//console.log('--------------------------------');
		//console.log(tweets);
	}

	searchedData(err, data, res) {
		var rawData = data;
		for (var i = 0; i < rawData.length; i++) {
			var tweet = {
				user: data[i].user.screen_name,
				tweet: data[i].text,
				propic: data[i].user.profile_image_url_https
			};
			tempTweets.push(tweet);
			console.log(tweet);
		}
		console.log(err);
		//console.log(response)
		//console.log(tweets)
	}

	onAuthenticated(err, res) {
		if (err) {
			throw err;
		}
	}

	shuffle(array) {
		var m = array.length,
			t,
			i;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

	render() {
		return (
			<div className="App">
				<Header callBackSource={this.callBack} />
				<Login callBackSource={this.callBack} />
				<Game callBackSource={this.callBack} />
				<Footer />
			</div>
		);
	}
}
