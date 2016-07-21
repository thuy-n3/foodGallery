

import React from 'react'
import ACTIONS from '../actions'

const Header = React.createClass({

	render: function() {
		return (
			<div id="headerContainer">
				<h1>Food Mood</h1>
				<NavBar />
			</div>
			)
	}
})

const NavBar = React.createClass({
	render: function() {
		return (
			<div id="navBar"> {/*made a few edits here so that is makes sense for this app*/}
				<a href="#login">log in</a>
				<a href="#home">home</a>
				<a href="#messages/read">inbox</a>
				<a href="#messages/write">compose</a>
				<a href="#" onClick={ACTIONS.logUserOut} >log out</a>
			</div>
			)
	}

})

export default Header