import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PetProfile from './PetProfile';

class SubscribeLayout extends Component {
	constructor(props) {
		super(props);
		this.onInputSearch = this.onInputSearch.bind(this);
		this.onSearchCriteria = this.onSearchCriteria.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			subscribeButton: true,
			searchKey: '',
			criteria: ''
		}
	}
	onInputSearch(e) {
		this.setState({
			searchKey: e.target.value
		});
	}
	onSearchCriteria(e) {
		this.setState({
			criteria: e.target.options[e.target.selectedIndex].name
		});
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(`search is ${this.state.searchKey} and criteria is ${this.state.criteria}`);
		this.setState({
			searchKey: '',
			criteria:  ''
		});
	}
    render(){
        return (
        	<div style={{marginTop: 50}} className="container">
            	<h3>Your Subscribed Pets</h3>
            	<h3>Search Pets Database</h3>
            	<Form onSubmit={this.onSubmit}>
            		<FormGroup>
            			<Label for="searchSelect">Select Criteria</Label>
			            <Input type="select" name="select" value={this.state.criteria} id="searchSelect" onChange={this.onSearchCriteria}>
			            	<option name="Name">Name</option>			            	
			            	<option name="Breed">Breed</option>
			            	<option name="Owner">Owner</option>
			          </Input>
            		</FormGroup>
            		<FormGroup>
            			<Label for="search">Search</Label>
         				<Input type="search" name="search" value={this.state.searchKey} id="Search" placeholder="search keyword" onChange={this.onInputSearch}/>
            		</FormGroup>
            		<Button>Search</Button>
            	</Form>
            </div>
        )
    }
}

export default SubscribeLayout;