import React, {Component} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		}
	}
	componentDidMount() {
		axios.get('/')
		.then(response => this.setState({ posts: response.data }));
		console.log(this.state.posts.length);
	}
	render() {
		let announce = null;
		if (this.state.posts.length === 0) {
			announce = "You are not subscribed to any pets who are streaming today."
		}
		var arr = this.state.posts;
		console.log(arr.length);
		var elements = [];
		for (var i = 0; i < arr.length; i++) {
			elements.push(<Post data={arr[i]} key={i}/>);
		}
		console.log(elements.length);
		return(
			<div style={{marginLeft: 50, marginTop: 50}}>
				<h1>Welcome to the PetTing Zoo</h1>
				<h2>Today's Shows</h2>
				<h4>{announce}</h4>
				<div>
					{elements}
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired
	})
}

export default Home;