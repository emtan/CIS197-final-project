import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPet } from '../actions/actions';
import axios from 'axios';

class AddPetForm extends React.Component {
	constructor(props) {
		super(props);
		this.onInputName = this.onInputName.bind(this);
		this.onInputBreed = this.onInputBreed.bind(this);
		this.onInputBio = this.onInputBio.bind(this);
		this.onInputImg = this.onInputImg.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);

		this.state = {
			name: '',
			breed: '',
			bio: '',
			img: null
		}
	}

	onInputName(e) {
		this.setState({
			name: e.target.value
		})
	}

	onInputBreed(e) {
		this.setState({
			breed: e.target.value
		})
	}

	onInputBio(e) {
		this.setState({
			bio: e.target.value
		})
	}

	onInputImg(e) {
		this.setState({
			img: e.target.files[0]
		});
		const file = e.target.files[0];
	}

	onSubmit(e) {
		e.preventDefault();
		const pet = {
			name: this.state.name,
			breed: this.state.breed,
			bio: this.state.bio,
			img: this.state.img
		}
		axios.post('/profile/addPet', {pet})
		.then((response) => response.data);
		this.setState({
			name: '',
			breed: '',
			bio: '',
			img: null
		})
	}

	onCancel(e) {
		this.setState({
			name: '',
			breed: '',
			bio: '',
			img: null
		})
		document.getElementById("petForm").reset();
	}

	render() {
		return(
			<div style={{marginTop: 50}}>
			<h3>Add a new pet</h3>
				<Form onSubmit={this.onSubmit} id="petForm">
					<FormGroup>
						<Label>Pet Name: </Label>
						<input type="text" name="name" value={this.state.name} id="name" onChange={this.onInputName}/>
					</FormGroup>
					<FormGroup>
						<Label>Pet Breed: </Label>
						<input type="text" name="breed" value={this.state.breed} id="breed" onChange={this.onInputBreed}/>
					</FormGroup>
					<FormGroup>
						<Label>Pet Bio: </Label>
						<input type="textarea" name="bio" value={this.state.bio} id="bio" onChange={this.onInputBio}/>
					</FormGroup>
					<FormGroup>
						<Label>Pet Image: </Label>
						<input type="file" name="petImg" id="img" onChange={this.onInputImg}/>
					</FormGroup>
					<Button>Submit</Button>
					<Button onClick={this.onCancel}>Cancel</Button>
				</Form>
			</div>
		);
	}
}

export default AddPetForm