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

	componentWillRecievedProps: function(newProps){
		//componentWillRecievedProps is a React Lieft cycle method 
		//newProps is passed in - is newProps like an empty obj before it receive the props with the authorId?????
		//not use for inital render - more for updating state and transfer of props 

		let queryForDishes
		if(newProps.routedFrom === 'dish/myDishes'){
			queryForDishes = {'authorId':User.getCurrentUser()._id}  
		}else{
			queryForDishes = {}
		}

		ACTIONS.fetchDishes(queryForDishes)

	},

	componentWillMount: function(){	
	//use componentWillMounnt to set up the pub sub systems
	//start listening to the store 

		// if routedFrom 'home'
		// var queryObject = {}

		// if routedFrom 'dish/myDishes'
		// var queryObject = {authorId: «current user id » }

		console.log("myDishes - current user:", User.getCurrentUser())

		let queryForDishes
		if(this.props.routedFrom === 'dish/myDishes'){
			queryForDishes = {'authorId' : User.getCurrentUser()._id }
		}else{
			queryForDishes = {}
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

		ACTIONS.fetchDishes(queryForDishes)
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
		console.log('dashboard - model', this.props.dishModel)
		return (
			<div className="dish">
				<p>post by:{this.props.dishModel.get('authorEmail')}</p>
				<p>title: {this.props.dishModel.get('title')}</p>
				<p>description: {this.props.dishModel.get('description')}</p>
				<img src={this.props.dishModel.get('imageUrl')} />
				<button onClick={this._handleLikes}>like</button>
				<p>tags:{this.props.dishModel.get('tags')}</p>
				<p>likes: {this.props.dishModel.get('likes').length } </p>
			</div>
			)
	}
})




export default Dashboard
