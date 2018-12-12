import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SubscribeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { subscribed: false }
	}
	toggle() {
		this.setState({ subscribed: !this.state.subscribed });
	}
	render() {
		var txt = this.state.subscribed ? "Unsubscribe" : "Subscribe";
		return(
			<Button onClick={this.toggle.bind(this)}>{txt}
			</Button>
		);
	}
}

export default SubscribeButton