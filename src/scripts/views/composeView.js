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

	getInitialState: function(){	
		return{
			currentDishRating: 0
		}
	},

	_handleCompose: function(e){
		e.preventDefault()
		ACTIONS.saveDish({
			title: e.currentTarget.title.value,
			description: e.currentTarget.decription.value,
			location: e.currentTarget.location.value,
			rating: this.state.currentDishRating,
			authorId: User.getCurrentUser()._id,
			authorEmail: User.getCurrentUser().email,
			imageUrl: this.url ? this.url: '/images/img-not-found.png',	//if img is successful upload this show img at this.url, if img was unsucessful use the no img url 
			tags: e.currentTarget.tags.value.split(',')
		})	
	},

	_submitImage: function(result){
		//console.log("submit image",result) test to see if imgage successfully uploaded - filepicker give img url 
		this.url = result.url 

	},

	_handleStar: function(evt){
		// console.log(parseInt(evt.target.dataset.rating))
		this.setState({
			currentDishRating:parseInt(evt.target.dataset.rating)	
		})
	},

	_generateStarsJSX: function(ratingVal){	//this is to generate star
		var JSXStars = []
		for(var i=1; i<=5; i++){
			let starStyle = {fontSize:30}
			if(i <=ratingVal){
				starStyle.color='yellow'
			}
			let JSXStar = <span style={starStyle} data-rating={i} onClick={this._handleStar} >&#9734;</span>
			JSXStars.push(JSXStar)
		}
		return JSXStars
	},

	render: function() {
		return (
			<div className="dishPostingForm">
				<form onSubmit={this._handleCompose} >
					<input type="text" name="title" placeholder="Enter the dish title" />
					<textarea type="text" name="decription" placeholder="Enter the description" ></textarea>
					<input type="text" name="location" placeholder="Enter location" />
					<input type="text" name="tags" placeholder="Enter tag, separate by commas"/>
					{this._generateStarsJSX(this.state.currentDishRating) }
					<ReactFilepicker apikey="AbYUBwPJRkmndVRXUSK9yz" onSuccess={this._submitImage} />
					<button type="submit">SUBMIT!</button>
				</form>
			</div>
			)
	}
})

export default ComposeView
