import React from 'react';
import { Collapse, Navbar, Nav, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';

class ZooNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return(
			<div>
				<Navbar color="light" light expand color="info">
					<NavbarBrand href="/">PetTing Zoo</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/" color="primary">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/profile">Pets</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/upload">Upload</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/subscribe">Subscribe</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/logout">Logout</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default ZooNavbar