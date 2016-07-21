import React from 'react'
import Header from './header'
import ACTIONS from '../actions'
import {User} from '../models/models'
import ReactFilepicker from 'react-filepicker'

const ComposeView = React.createClass({
	 render: function() {
	 	return (
	 		<div className="composeView" >
	 			<Header />
	 			<h3>post a dish!</h3>
	 			<DishPostingForm />
	 		</div>
	 	)
 	}
})

const DishPostingForm = React.createClass({

	_handleCompose: function(e){
		e.preventDefault()
		ACTIONS.saveDish({
			title: e. currentTarget.title.value,
			description: e.currentTarget.decription.value,
			location: e.currentTarget.location.value,
			rating: e.currentTarget.rating.value, 
			authorId: User.getCurrentUser()._id,
			authorEmail: User.getCurrentUser().email,
			imageUrl: this.url ? this.url: '/images/img-not-found.png'
		})
	},

	_submitImage: function(result){
		//console.log("submit image",result) test to see if imgage successfully uploaded - filepicker give img url 
		this.url = result.url 

	},

	render: function() {
		return (
			<div className="dishPostingForm">
				<form onSubmit={this._handleCompose} >
					<input type="text" name="title" placeholder="Enter the dish title" />
					<textarea type="text" name="decription" placeholder="Enter the description" ></textarea>
					<input type="text" name="location" placeholder="Enter the dish title" />
					<input type="text" name="rating" />
					<ReactFilepicker apikey="AbYUBwPJRkmndVRXUSK9yz" onSuccess={this_submitImage} />


					<button type="submit">SUBMIT!</button>
				</form>
			</div>
			)
	}
})

export default ComposeView
