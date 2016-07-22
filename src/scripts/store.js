import Backbone from 'backbone'
import _ from 'underscore'
import {DishCollection} from './models/models'

console.log('i am the dish store')

//Set Up STORE - Backbone event object so all events are broadcast from here and point to the emit change method 
const DISH_STORE = _.extend(Backbone.Events, {	//extend underscore and backbone.event is best listener of event happen in app 
//use underscore here b/c backbone events does not have an extend method like the models and collection do

	data: {
		collection: new DishCollection() //create new instance of the collection here 
	}, 

	_emitChange: function(){	//this is a custom method..not built in...
		this.trigger('updateContent')	//this is an event we have create ourselves
	}, 

	_getData: function(){
		//data from here becomes the top level state (state of the app)
		return _.clone(this.data)	//make a clone b/c we don't want to modify the state directly(original data)
	},

	initialize: function(){
		this.data.collection.on('sync update', this._emitChange.bind(this))
	}

})	

DISH_STORE.initialize()	//initalize the data before you export it (have to call it ourselves since it isn't native)

export default DISH_STORE