import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.onInputTitle = this.onInputTitle.bind(this);
		this.onInputDesc = this.onInputDesc.bind(this);
		this.onInputFile = this.onInputFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);

		this.state = {
			title: '',
			desc: '',
			file: null
		}
	}

	onInputTitle(e) {
		this.setState({
			title: e.target.value
		});
	}

	onInputDesc(e) {
		this.setState({
			desc: e.target.value
		});
	}

	onInputFile(e) {
		this.setState({
			file: e.target.value.files[0]
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const newForm = {
			title: this.state.title,
			desc: this.state.desc,
			//file: this.state.file
		}
		axios.post('/upload/submit', newForm)
		.then((response) => response.data);
		this.setState({
			title: '',
			desc: '',
			file: null
		});
	}

	onCancel(e) {
		e.preventDefault();
		this.setState({
			title: '',
			desc: '',
			file: null
		});
		document.getElementById("uploadForm").reset();
	}

	render() {
		return (
			<div style={{marginTop: 50}} className="container">
			<h3>Upload a New Pet Video</h3>
				<Form onSubmit={this.onSubmit} id="uploadForm">
					<FormGroup>
						<Label for="Title">Title</Label>
						<Input type="text" name="title" value={this.state.title} id="title" placeholder="give your video a title" onChange={this.onInputTitle}/>
					</FormGroup>
					<FormGroup>
						<Label for="Pets">Pet Tags</Label>
						<Input type="select">
						</Input>
					</FormGroup>
						<Label for="Descr">Description</Label>
						<Input type="textarea" name="desc" value={this.state.desc} id="desc" placeholder="brief catchy description" onChange={this.onInputDesc}/>
					<FormGroup>
						<Label for="File">Video</Label>
						<Input type="file" name="videoFile" value={this.state.file} id="videoFile" placeholder="upload a video file" onChange={this.onInputFile}/>
					</FormGroup>
					<Button color="primary" type="Submit">Submit</Button>
					<Button color="secondary" onClick={this.onCancel}>Cancel</Button>
				</Form>
			</div>
		);
	}
}

export default UploadForm