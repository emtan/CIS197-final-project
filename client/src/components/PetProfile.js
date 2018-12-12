import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardLink } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubscribeButton from './SubscribeButton';
import axios from 'axios';

class PetProfile extends React.Component {
	constructor(props) {
		super(props);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);

		this.state = {
			name: '',
			breed: '',
			bio: '',
			img: null
		}
	}
	onEdit(e) {
		e.preventDefault();
	}
	onDelete(e) {
		e.preventDefault();
		axios.get('/profile/delete/' + this.props.data._id)
		.then(console.log('deleted'));
		console.log(this.props.data._id);
	}
	render() {
		return (
			<div className="container">
				<Card>
			        <CardBody>
			          <CardTitle>Name: {this.props.data.name}</CardTitle>
			          <CardSubtitle>Breed: {this.props.data.breed}</CardSubtitle>
			          <CardText>
			          	<small>Bio: {this.props.data.bio}</small>
			          </CardText>
			        </CardBody>
			        <Button onClick={this.onEdit} color='warning'>Edit</Button>
					<Button onClick={this.onDelete} color='danger'>Delete</Button>
				</Card>
			</div>
		);
	}
}

PetProfile.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		img: PropTypes.string
	})
}

export default PetProfile
