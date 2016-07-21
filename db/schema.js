const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

//step 1
const dishSchema = new Schema({
	description: {type: String, require: true},
	rating: {type: Number, require: true}, 
	likes: {type: Number, default: 0}, 
	location: {type: String, require: true}, 
	title: {type: String, require: true}, 
	authorEmail: {type: String, require: true},
	Imageurl: {type:String, require: true}, 
	tags: {type: [String], default: []},
	authorId: {type: String, require: true}
})

module.exports = {
  User: createModel('User', usersSchema),
  Dish: createModel('Dish', dishSchema)
}

