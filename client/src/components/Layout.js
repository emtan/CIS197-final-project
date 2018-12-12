import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ZooNavbar from './Navbar.js';
 
class Layout extends Component {
    render() {
    return (
        <div>
            <div>
                <ZooNavbar/>
            </div>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

export default Layout;