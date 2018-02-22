import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

import logo from '../images/logo.png'
import signInWithGoogle from '../images/sign-in-with-google.png'


class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google"><img style={signInImgStyle} src={signInWithGoogle} alt="sign-in-with-google" /></a>
					</li>
				)
			default:
				return [
				   <li key="1"><Payments /></li>,
				   <li key="3" style={{ margin: '0 10px' }}>
					 	Credits: {this.props.auth.credits}
					</li>,
				   <li key="2"><a href="/api/logout">Sign out!</a></li>
				]
		}
	}

	render() {
		return(
			<nav style={navStyle}>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						<img style={logoStyle} src={logo} alt="Logo" />
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		)
	}
}

var navStyle = {
	height: "100px"
}

var logoStyle = {
	marginLeft: "15%"
}

var signInImgStyle = {
  width: "50%",
  float: "right",
  margin: "22px 0px"
}

function mapStateToProps({ auth }) {
	return { auth }
}

export default connect(mapStateToProps)(Header);
