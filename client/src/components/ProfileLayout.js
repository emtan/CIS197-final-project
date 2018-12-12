import React, {Component} from 'react';
import PetProfile from './PetProfile';
import AddPetForm from './AddPetForm';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pets: []
		}
	}
	componentDidMount() {
		axios.get('/profile')
		.then(response => this.setState({ pets: response.data }));
	}
	render() {
		var arr = this.state.pets;
		var elements = [];
		for (var i = 0; i < this.state.pets.length; i++) {
			elements.push(<PetProfile data={arr[i]} key={i}/>);
		}
		let phrase = null;
		if (elements.length === 0) {
			phrase = "You do not own any pets yet :(";
		}
		return(
			<div>
				<div style={{marginLeft: 50, marginTop: 50}}>
					<h1>Welcome to Your Profile</h1>
				</div>
				<div className="container">
					<h3>Your Pets:</h3>
					<h4>{phrase}</h4>
					<div className="container">
						{elements}
					</div>
				</div>
				<div className="container">
					<AddPetForm />
				</div>
			</div>
		);
	}
}

ProfileLayout.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	})
}

export default ProfileLayout