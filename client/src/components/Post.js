import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Player } from 'video-react';

class Post extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<Card>
					<CardBody>
						<CardTitle>{this.props.data.title}
						</CardTitle>
						<CardSubtitle>{this.props.data.desc}
						</CardSubtitle>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Post