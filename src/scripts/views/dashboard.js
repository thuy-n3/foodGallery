import React from 'react'
import Header from './header'
import DISH_STORE from '../store.js'
import ACTIONS from '../actions'
import {User} from '../models/models'

const Dashboard = React.createClass({

	getInitialState: function(){
		//need to return the object that will be the state 
		return DISH_STORE._getData()
	},

	componentWillMount: function(){	
	//use componentWillMounnt to set up the pub sub systems
	//start listening to the store 
		ACTIONS.fetchDishes()
		DISH_STORE.on('updateContent', ()=> {
			this.setState(DISH_STORE._getData() )})

			},

	componentWillUnmount: function(){

		DISH_STORE.off('updateContent')
	},

	_handleTagSearch: function(evt){
		if(evt.keyCode === 13){
			console.log(evt.target.value)
			ACTIONS.fetchDishes(evt.target.value)
			evt.target.value = ''
		}
	},

	 render: function() {
	 	return (
	 		<div className="dashboard">
	 			<Header />
	 				<input onKeyDown = {this._handleTagSearch} type='text' placeholder='Enter tag' />
	 			<h3>dashboard</h3>
	 			<DishContainer dishColl = {this.state.collection} />
	 		</div>
	 	)
 	}
})

const DishContainer = React.createClass({
	render: function() {
		return (
			<div className="dishContainer">
				{this.props.dishColl.map( 
					(model)=> <Dish dishModel={model} key={model.id} /> )}
			</div>
		)
	}
})

const Dish = React.createClass({

	_handleLikes: function(){
		ACTIONS.likeDish(this.props.dishModel, User.getCurrentUser() )
	},

	render: function() {
		return (
			<div className="dish">
				<p>{this.props.dishModel.get('title')}</p>
				<p>{this.props.dishModel.get('description')}</p>
				<img src={this.props.dishModel.get('imageUrl')} />
				<button onClick={this._handleLikes}>like</button>
				<p>likes: {this.props.dishModel.get('likes').length } </p>
			</div>
			)
	}
})

export default Dashboard
