import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="header">
                <div className="div-inner">
                    <div className="logo">
                        <img src='./assets/images/logo-promax.svg'/>
                    </div>
                </div>
            </div>
		);
	}
}

export default Header;